import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { doc, getDoc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import Footer from "@/_components/Footer";
import Header from "@/_components/Header";
import AdminHeader from "@/_components/AdminHeader";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Spinner from "react-bootstrap/Spinner";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

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
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists() && userDoc.data().role === "admin") {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      } else {
        setIsAdmin(false);
      }
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    const fetchBlog = async () => {
      if (id) {
        try {
          const docRef = doc(db, "blogs", id as string);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setBlog(docSnap.data() as Blog);
          } else {
            setBlog(null);
          }
        } catch (error) {
          console.error("Error fetching blog data:", error);
          setBlog(null);
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
        router.push("/admin-dashboard");
      } catch (error) {
        console.error("Error deleting blog:", error);
      }
    }
  };

  const handleUpdate = async () => {
    if (id && blog) {
      try {
        const docRef = doc(db, "blogs", id as string);
        const updateData = {
          title: blog.title,
          content: blog.content,
          imageUrl: blog.imageUrl,
          author: blog.author,
        };
        await updateDoc(docRef, updateData);
        alert("Blog updated successfully!");
      } catch (error) {
        console.error("Error updating blog:", error);
      }
    }
  };

  const handleContentChange = (event: any, editor: any) => {
    const data = editor.getData();
    setBlog({ ...blog, content: data } as Blog);
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
                  <h1
                    className="card-title mb-4"
                    style={{ fontSize: "2.5rem", fontWeight: "bold" }}
                  >
                    {blog.title}
                  </h1>
                  <h5
                    className="card-subtitle mb-3 text-muted"
                    style={{ fontSize: "1.2rem" }}
                  >
                    By {blog.author}
                  </h5>
                  {isAdmin === true ? (
                    <>
                      <CKEditor
                        editor={ClassicEditor}
                        data={blog.content}
                        onChange={handleContentChange}
                      />
                      <button
                        className="btn btn-primary mt-3"
                        onClick={handleUpdate}
                      >
                        Update Blog
                      </button>
                    </>
                  ) : (
                    <div
                      className="card-text"
                      style={{ lineHeight: "1.8" }}
                      dangerouslySetInnerHTML={{ __html: blog.content }}
                    />
                  )}
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
