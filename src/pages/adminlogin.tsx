"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "@/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import Link from "next/link";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";

const AdminLogin: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      const userDocRef = doc(db, "users", user.uid);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists() && userDoc.data()?.role === "admin") {
        sessionStorage.setItem("admin", "true");
        setEmail("");
        setPassword("");
        setError(null);
        router.push("/admindashboard");
      } else {
        setError("Invalid Admin Login");
        await auth.signOut();
      }
    } catch (error: any) {
      setError("Invalid Email Id/Password");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row className="w-100 justify-content-center">
        <Col md={6} lg={4}>
          <h1 className="text-center mb-4">Admin Login</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                required
                value={email}
                onChange={handleEmailChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                required
                value={password}
                onChange={handlePasswordChange}
              />
            </Form.Group>
            {error && <Alert variant="danger">{error}</Alert>}
            <Button type="submit" className="w-100 mb-3">
              Admin Login
            </Button>
            <div className="text-center">
              <p>
                Not an admin?{" "}
                <Link
                  href="/signin"
                  style={{ color: "#0070f3", textDecoration: "underline" }}
                  passHref
                >
                  Sign in here
                </Link>
              </p>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminLogin;
