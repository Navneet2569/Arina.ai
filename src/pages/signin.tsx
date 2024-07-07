// "use client";

import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/router"; // Changed to 'next/router'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import Link from "next/link"; // Import Link from Next.js

const Signin: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/"); // Redirect to homepage if user is already signed in
    }
  }, [user, router]);

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      sessionStorage.setItem("user", "true");
      setEmail("");
      setPassword("");
      setError(null);
      router.push("/");
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={wrapperStyle}>
      <div style={containerStyle}>
        <h1 style={headingStyle}>Sign In</h1>
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
          {error && <p style={{ color: "red" }}>Invalid Email Id/Password</p>}
          <button type="submit" style={submitButtonStyle}>
            Sign In
          </button>
          <p style={{ marginTop: "1rem", textAlign: "center" }}>
            Do not have an account?{" "}
            <Link
              href="/signup"
              style={{ color: "#0070f3", textDecoration: "underline" }}
            >
              Sign Up here
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

export default Signin;
