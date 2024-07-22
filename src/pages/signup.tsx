"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "@/firebaseConfig";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";

const Signup: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
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
      const auth = getAuth();
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log("Signup response:", res);

      // Create a document in Firestore with email and role
      await setDoc(doc(db, "users", res.user.uid), {
        email: email,
        role: "user",
      });

      sessionStorage.setItem("user", "true");
      setEmail("");
      setPassword("");
      router.push("/");
    } catch (e: any) {
      console.error("Signup error:", e.message);
      if (e.code === "auth/email-already-in-use") {
        setError(
          "User already exists. Please sign in or use a different email."
        );
      } else {
        setError(e.message);
      }
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row className="w-100 justify-content-center">
        <Col md={6} lg={4}>
          <h1 className="text-center mb-4">Sign Up</h1>
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
              Sign Up
            </Button>
            <div className="text-center">
              <p>
                Already a user?{" "}
                <Link
                  href="/signin"
                  style={{ color: "#0070f3", textDecoration: "underline" }}
                  passHref
                >
                  Sign In here
                </Link>
              </p>
              <p>
                Admin?{" "}
                <Link
                  href="/adminlogin"
                  style={{ color: "#0070f3", textDecoration: "underline" }}
                  passHref
                >
                  Login as Admin
                </Link>
              </p>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
