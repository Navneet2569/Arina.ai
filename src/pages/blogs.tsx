import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "@/firebaseConfig";
import Link from "next/link";
import Header from "@/_components/Header";
import AdminHeader from "@/_components/AdminHeader";
import Footer from "@/_components/Footer";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Spinner from "react-bootstrap/Spinner";

interface Blog {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  author: string;
}

const Blogs: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      if (user) {
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
      try {
        const querySnapshot = await getDocs(collection(db, "blogs"));
        const blogsData: Blog[] = [];
        querySnapshot.forEach((doc) => {
          blogsData.push({ id: doc.id, ...doc.data() } as Blog);
        });
        setBlogs(blogsData);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await deleteDoc(doc(db, "blogs", id));
      setBlogs(blogs.filter((blog) => blog.id !== id));
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Spinner animation="border" />
      </div>
    );
  }

  return (
    <>
      {isAdmin === true ? <AdminHeader /> : <Header />}
      <div className="container mt-5">
        <div className="row">
          {blogs.map((blog) => (
            <div key={blog.id} className="col-lg-4 mb-4">
              <div className="card h-100 shadow-sm">
                <img
                  src={blog.imageUrl}
                  className="card-img-top"
                  alt={blog.title}
                  style={{ maxHeight: "200px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{blog.title}</h5>
                  <p className="card-text">{blog.author}</p>
                  <Link
                    href={`/blogs/${blog.id}`}
                    className="btn btn-primary mt-auto"
                  >
                    Read More
                  </Link>
                  {isAdmin === true && (
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
