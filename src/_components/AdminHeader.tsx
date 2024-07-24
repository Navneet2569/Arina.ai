"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebaseConfig";
import { signOut } from "firebase/auth";
import { useRouter } from "next/router";

const AdminHeader: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const select = (selector: string, all = false) =>
      all
        ? Array.from(document.querySelectorAll(selector))
        : document.querySelector(selector);

    const mobileNavToggleBtn = select(".mobile-nav-toggle") as HTMLElement;
    if (mobileNavToggleBtn) {
      mobileNavToggleBtn.addEventListener("click", () => {
        const body = select("body") as HTMLElement;
        body.classList.toggle("mobile-nav-active");
        mobileNavToggleBtn.classList.toggle("bi-list");
        mobileNavToggleBtn.classList.toggle("bi-x");
      });
    }

    const navmenuLinks = select("#navmenu a", true) as HTMLElement[];
    navmenuLinks.forEach((navmenu) => {
      navmenu.addEventListener("click", () => {
        const body = select("body") as HTMLElement;
        if (body.classList.contains("mobile-nav-active")) {
          body.classList.remove("mobile-nav-active");
          mobileNavToggleBtn.classList.add("bi-list");
          mobileNavToggleBtn.classList.remove("bi-x");
        }
      });
    });

    const toggleDropdowns = select(
      ".navmenu .toggle-dropdown",
      true
    ) as HTMLElement[];
    toggleDropdowns.forEach((toggleDropdown) => {
      toggleDropdown.addEventListener("click", function (e) {
        e.preventDefault();
        const parent = this.parentNode as HTMLElement;
        const nextSibling = parent.nextElementSibling as HTMLElement;

        parent.classList.toggle("active");
        if (nextSibling) {
          nextSibling.classList.toggle("dropdown-active");
        }

        e.stopImmediatePropagation();
      });
    });
  }, []);

  const [user] = useAuthState(auth);

  const handleLogout = () => {
    signOut(auth);
    sessionStorage.removeItem("user");
    router.push("/signin");
  };

  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <div className="logo d-flex align-items-center me-auto">
          {/* <img src="assets/img/logo.png" alt="logo" /> */}
          <h1 className="sitename">Vesperr</h1>
        </div>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <Link href="/admindashboard" className="active">
                Enquries
              </Link>
            </li>
            <li>
              <Link href="/blogs">Blogs</Link>
            </li>
            <li>
              <Link href="/create-blog">Create a blog</Link>
            </li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>
        {user ? (
          <button onClick={handleLogout} className="btn-getstarted">
            Logout
          </button>
        ) : (
          <Link href="/adminlogin">
            <button className="btn-getstarted">Sign In</button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default AdminHeader;
