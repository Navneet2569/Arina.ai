"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebaseConfig";
import { signOut } from "firebase/auth";

const Header: React.FC = () => {
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
  };

  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <Link href="/" className="logo d-flex align-items-center me-auto">
          {/* <img src="assets/img/logo.png" alt="logo" /> */}
          <h1 className="sitename">Vesperr</h1>
        </Link>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <Link href="/" className="active">
                Home
              </Link>
            </li>
            <li>
              <Link href="/#about">About</Link>
            </li>
            <li>
              <Link href="/#services">Services</Link>
            </li>
            <li>
              <Link href="/#portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="/#team">Team</Link>
            </li>
            <li className="dropdown">
              <Link href="#">
                Dropdown
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </Link>
              <ul>
                <li>
                  <Link href="#">Dropdown 1</Link>
                </li>
                <li className="dropdown">
                  <Link href="#">
                    <span>Deep Dropdown</span>{" "}
                    <i className="bi bi-chevron-down toggle-dropdown"></i>
                  </Link>
                  <ul>
                    <li>
                      <Link href="/blogs">Blogs</Link>
                    </li>
                    <li>
                      <Link href="#">Deep Dropdown 2</Link>
                    </li>
                    <li>
                      <Link href="#">Deep Dropdown 3</Link>
                    </li>
                    <li>
                      <Link href="#">Deep Dropdown 4</Link>
                    </li>
                    <li>
                      <Link href="#">Deep Dropdown 5</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="#">Dropdown 2</Link>
                </li>
                <li>
                  <Link href="#">Dropdown 3</Link>
                </li>
                <li>
                  <Link href="#">Dropdown 4</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/#contact">Contact</Link>
            </li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>
        {user ? (
          <button onClick={handleLogout} className="btn-getstarted">
            Logout
          </button>
        ) : (
          <Link href="/signin">
            <button className="btn-getstarted">Sign In</button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
