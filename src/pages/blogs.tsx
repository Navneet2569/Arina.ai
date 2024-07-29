import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  deleteDoc,
} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "../firebaseConfig";
import Header from "../_components/Header";
import AdminHeader from "../_components/AdminHeader";
import Footer from "../_components/Footer";

interface Blog {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  author: string;
}

const Blogs: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Check if the user is an admin
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists() && userDoc.data().role === "admin") {
          setIsAdmin(true);
        }
      }
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    const fetchBlogs = async () => {
      const querySnapshot = await getDocs(collection(db, "blogs"));
      const blogsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Blog[];
      setBlogs(blogsData);
    };

    fetchBlogs();
  }, []);

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      try {
        await deleteDoc(doc(db, "blogs", id));
        setBlogs(blogs.filter((blog) => blog.id !== id));
        alert("Blog deleted successfully!");
      } catch (error) {
        console.error("Error deleting blog:", error);
        alert("Failed to delete blog");
      }
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Show a loading indicator while checking the user's role
  }

  return (
    <>
      {isAdmin ? <AdminHeader /> : <Header />}
      <div className="container mt-5">
        <h1 className="mb-4 text-center">Blogs</h1>
        <div className="row">
          {blogs.map((blog) => (
            <div className="col-md-6 mb-4" key={blog.id}>
              <div className="card h-100 shadow-sm">
                <img
                  src={blog.imageUrl}
                  className="card-img-top"
                  alt={blog.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{blog.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    By {blog.author}
                  </h6>
                  <p className="card-text flex-grow-1">
                    {blog.content.substring(0, 150)}...
                  </p>
                  <a
                    href={`/blogs/${blog.id}`}
                    className="btn btn-primary mt-auto"
                  >
                    Read More
                  </a>
                  {isAdmin && (
                    <button
                      className="btn btn-danger mt-2"
                      onClick={() => handleDelete(blog.id)}
                    >
                      Delete
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blogs;
