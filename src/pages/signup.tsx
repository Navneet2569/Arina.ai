"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/firebaseConfig";
import { useRouter } from "next/router"; // Import the router from Next.js
import Link from "next/link"; // Import Link from Next.js
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

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
    event.preventDefault(); // Prevent form from reloading the page
    try {
      const auth = getAuth();
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log("Signup response:", res);
      sessionStorage.setItem("user", "true"); // Store string value in sessionStorage
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
    <div style={wrapperStyle}>
      <div style={containerStyle}>
        <h1 style={headingStyle}>Sign Up</h1>
        <form style={formStyle} onSubmit={handleSubmit}>
          <div style={formGroupStyle}>
            <label htmlFor="email" style={labelStyle}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              style={inputStyle}
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="password" style={labelStyle}>
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              style={inputStyle}
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button type="submit" style={submitButtonStyle}>
            Sign Up
          </button>
          <p style={{ marginTop: "1rem", textAlign: "center" }}>
            Already a user?{" "}
            <Link
              href="/signin"
              style={{ color: "#0070f3", textDecoration: "underline" }}
            >
              Sign In here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

// Inline styles
const wrapperStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundColor: "#f5f5f5",
};

const containerStyle: React.CSSProperties = {
  maxWidth: "400px",
  width: "100%",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#fff",
};

const headingStyle: React.CSSProperties = {
  textAlign: "center",
  marginBottom: "20px",
  fontSize: "24px",
};

const formStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
};

const formGroupStyle: React.CSSProperties = {
  marginBottom: "15px",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  marginBottom: "5px",
  fontWeight: "bold",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "4px",
};

const submitButtonStyle: React.CSSProperties = {
  padding: "10px",
  backgroundColor: "#0070f3",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: "16px",
};

export default Signup;
