import React, { useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import { db } from "@/firebaseConfig"; // Make sure this path is correct
import { collection, addDoc } from "firebase/firestore";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [formStatus, setFormStatus] = useState<
    "idle" | "loading" | "error" | "success"
  >("idle");
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastVariant, setToastVariant] = useState<"success" | "danger">(
    "success"
  );

  const handleSubscribe = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormStatus("loading");

    try {
      await addDoc(collection(db, "newsletter"), { email });

      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setFormStatus("success");
        setEmail("");
        setToastMessage("Thank you for subscribing!");
        setToastVariant("success");
        setShowToast(true);
      } else {
        const errorData = await response.json();
        console.error("Error sending email:", errorData.error);
        setFormStatus("error");
        setToastMessage("There was an error. Please try again.");
        setToastVariant("danger");
        setShowToast(true);
      }
    } catch (error) {
      console.error("Error subscribing:", error);
      setFormStatus("error");
      setToastMessage("There was an error. Please try again.");
      setToastVariant("danger");
      setShowToast(true);
    }
  };

  return (
    <footer id="footer" className="footer">
      <ToastContainer position="top-end" className="p-3">
        <Toast
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={3000}
          autohide
          bg={toastVariant}
        >
          <Toast.Header>
            <strong className="me-auto">Notification</strong>
          </Toast.Header>
          <Toast.Body>{toastMessage}</Toast.Body>
        </Toast>
      </ToastContainer>
      <div className="newsletter-subscription text-center mb-3">
        <form
          onSubmit={handleSubscribe}
          className="d-flex justify-content-center"
        >
          <div className="input-group" style={{ maxWidth: "400px" }}>
            <input
              type="email"
              className="form-control"
              placeholder="Subscribe to our newsletter"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-primary">
              Subscribe
            </button>
          </div>
        </form>
      </div>
      <div className="container">
        <div className="copyright text-center">
          <p>
            © {new Date().getFullYear()}{" "}
            <strong className="px-1 sitename">Vesperr</strong> All Rights
            Reserved
          </p>
        </div>
        <div className="social-links d-flex justify-content-center mb-3">
          <a href="#" aria-label="Twitter">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="#" aria-label="Facebook">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#" aria-label="Instagram">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="#" aria-label="LinkedIn">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
        <div className="credits text-center">
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
