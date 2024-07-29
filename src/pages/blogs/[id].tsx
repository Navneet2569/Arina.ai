import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { doc, getDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import Footer from "@/_components/Footer";
import Header from "@/_components/Header";
import AdminHeader from "@/_components/AdminHeader";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Spinner from "react-bootstrap/Spinner";

interface Blog {
  title: string;
  content: string;
  imageUrl: string;
  author: string;
}

const BlogDetail: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [blog, setBlog] = useState<Blog | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null); // Ensure admin status is correctly set
  const [loading, setLoading] = useState<boolean>(true);

  // Check admin status
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

  // Fetch blog data
  useEffect(() => {
    const fetchBlog = async () => {
      if (id) {
        try {
          const docRef = doc(db, "blogs", id as string);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            setBlog(docSnap.data() as Blog);
          } else {
            setBlog(null); // Set to null if no blog is found
          }
        } catch (error) {
          console.error("Error fetching blog data:", error);
          setBlog(null); // Set to null in case of an error
        }
      }
      setLoading(false);
    };

    fetchBlog();
  }, [id]);

  const handleDelete = async () => {
    if (id) {
      try {
        await deleteDoc(doc(db, "blogs", id as string));
        router.push("/admin-dashboard"); // Redirect after deletion
      } catch (error) {
        console.error("Error deleting blog:", error);
      }
    }
  };

  const renderContent = (content: string) => {
    return content
      .split("\n")
      .map((paragraph, index) => <p key={index}>{paragraph}</p>);
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
          <div className="col-lg-8 offset-lg-2">
            {blog ? (
              <div className="card mb-4 shadow-sm">
                <img
                  src={blog.imageUrl}
                  className="card-img-top"
                  alt={blog.title}
                  style={{ maxHeight: "400px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h1 className="card-title mb-4">{blog.title}</h1>
                  <h5 className="card-subtitle mb-3 text-muted">
                    By {blog.author}
                  </h5>
                  <div className="card-text" style={{ lineHeight: "1.8" }}>
                    {renderContent(blog.content)}
                  </div>
                  {isAdmin === true && (
                    <button
                      className="btn btn-danger mt-3"
                      onClick={handleDelete}
                    >
                      Delete Blog
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <div className="text-center">
                <Spinner animation="border" />
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogDetail;
