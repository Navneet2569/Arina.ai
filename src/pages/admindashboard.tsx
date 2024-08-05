import { GetServerSideProps } from "next";
import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Spinner } from "react-bootstrap";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "@/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import AdminHeader from "@/_components/AdminHeader";
import Footer from "@/_components/Footer";

type Data = {
  id: string;
  email: string;
  subject: string;
  name: string;
  message: string;
};

type HomeProps = {
  data: Data[];
};

const DataPage = ({ data: initialData }: HomeProps) => {
  const router = useRouter();
  const [user, loading] = useAuthState(auth);
  const [data, setData] = useState<Data[]>(initialData);
  const [deleting, setDeleting] = useState<string | null>(null);

  useEffect(() => {
    const checkUserRole = async () => {
      if (user) {
        const userDocRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userDocRef);

        if (!userDoc.exists() || userDoc.data()?.role !== "admin") {
          router.push("/adminlogin");
        }
      } else {
        const userSession = sessionStorage.getItem("user");

        if (!user && !userSession && !loading) {
          router.push("/adminlogin");
        }
      }
    };

    checkUserRole();
  }, [user, loading, router]);

  const handleDelete = async (id: string) => {
    setDeleting(id);
    try {
      await axios.delete("/api/deleteEnquiry", { data: { id } });
      setData((prevData) => prevData.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting enquiry:", error);
    } finally {
      setDeleting(null);
    }
  };

  if (loading) {
    return (
      <>
        <AdminHeader />
        <Container className="mt-5">
          <Row className="mb-4">
            <Col>
              <h1>Contact Admin</h1>
            </Col>
          </Row>
          <div className="d-flex justify-content-center align-items-center vh-100">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        </Container>
      </>
    );
  }

  if (!user) {
    return (
      <>
        <AdminHeader />
        <Container className="mt-5">
          <Row className="mb-4">
            <Col>
              <h1>Contact Admin</h1>
            </Col>
          </Row>
        </Container>
      </>
    );
  }

  return (
    <>
      <AdminHeader />
      <Container className="mt-5">
        <Row className="mb-4">
          <Col>
            <h1>Contact Admin</h1>
          </Col>
        </Row>
        {data.length === 0 ? (
          <Row className="justify-content-center">
            <Col md={6}>
              <Card className="text-center shadow-sm">
                <Card.Body>
                  <Card.Title>No Enquiries Found</Card.Title>
                  <Card.Text>
                    There are currently no enquiries to display. Check back
                    later.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ) : (
          <Row>
            {data.map((item) => (
              <Col key={item.id} xs={12} sm={6} lg={4} className="mb-4">
                <Card className="h-100 shadow-sm">
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>
                      <strong>{item.subject}</strong>
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {item.name}
                    </Card.Subtitle>
                    <Card.Text>
                      <strong>Email:</strong> {item.email}
                    </Card.Text>
                    <Card.Text className="flex-grow-1">
                      <strong>Message:</strong> {item.message}
                    </Card.Text>
                    <Button
                      variant="danger"
                      onClick={() => handleDelete(item.id)}
                      disabled={deleting === item.id}
                      className="mt-auto"
                    >
                      {deleting === item.id ? "Deleting..." : "Delete"}
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>
      <Footer />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_SITE_URL}/api/data`);
    const data: Data[] = res.data;

    return {
      props: { data },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: { data: [] },
    };
  }
};

export default DataPage;
