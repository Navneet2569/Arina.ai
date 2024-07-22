import { GetServerSideProps } from "next";
import axios from "axios";
import { useEffect } from "react";
import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";
import { useRouter } from "next/router";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "@/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

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

const DataPage = ({ data }: HomeProps) => {
  const router = useRouter();
  const [user, loading] = useAuthState(auth);

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

  const handleLogout = async () => {
    try {
      await signOut(auth);
      sessionStorage.removeItem("admin");
      router.push("/adminlogin");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return null;
  }

  return (
    <Container className="mt-5">
      <Row className="mb-4">
        <Col>
          <h1>Data from Firestore</h1>
        </Col>
        <Col className="text-right">
          <Button variant="danger" onClick={handleLogout}>
            Logout
          </Button>
        </Col>
      </Row>
      <ListGroup>
        {data.map((item) => (
          <ListGroup.Item key={item.id} className="mb-3 p-3">
            <Row>
              <Col md={3}>
                <strong>Email:</strong> {item.email}
              </Col>
              <Col md={2}>
                <strong>Subject:</strong> {item.subject}
              </Col>
              <Col md={2}>
                <strong>Name:</strong> {item.name}
              </Col>
              <Col md={5}>
                <strong>Message:</strong> {item.message}
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
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
