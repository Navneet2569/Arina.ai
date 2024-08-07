import { useState, FormEvent, ChangeEvent } from "react";
import { useRouter } from "next/router";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { db, storage } from "@/firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import AdminHeader from "@/_components/AdminHeader";
import Footer from "@/_components/Footer";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const CreateBlog: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const router = useRouter();

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  const handleContentChange = (event: any, editor: any) => {
    const data = editor.getData();
    setContent(data);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!image) {
      alert("Please select an image to upload");
      return;
    }

    try {
      const storageRef = ref(storage, `images/${image.name}`);
      await uploadBytes(storageRef, image);
      const imageUrl = await getDownloadURL(storageRef);

      const blogRef = collection(db, "blogs");
      await addDoc(blogRef, {
        title,
        content,
        author,
        imageUrl,
        createdAt: serverTimestamp(),
      });

      alert("Blog post created!");
      router.push("/");
    } catch (error) {
      console.error("Error creating blog post:", error);
      alert("Failed to create blog post");
    }
  };

  return (
    <>
      <AdminHeader />
      <Container className="mt-5 blog-container">
        <Row className="justify-content-md-center">
          <Col md={8}>
            <h1 className="mb-4 text-center">Create a New Blog Post</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formTitle" className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formContent" className="mb-3">
                <Form.Label>Content</Form.Label>
                <CKEditor
                  editor={ClassicEditor}
                  data={content}
                  onChange={handleContentChange}
                />
              </Form.Group>
              <Form.Group controlId="formAuthor" className="mb-3">
                <Form.Label>Author</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter author name"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formImage" className="mb-3">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="file"
                  onChange={handleImageChange}
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100">
                Create Post
              </Button>
            </Form>
          </Col>
        </Row>
        <style jsx>{`
          .blog-container {
            background-color: white;
            padding: 2rem;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
        `}</style>
      </Container>
      <Footer />
    </>
  );
};

export default CreateBlog;
