"use client";

import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <Link href="/" legacyBehavior>
          <a className="logo d-flex align-items-center me-auto">
            {/* <img src="assets/img/logo.png" alt="logo" /> */}
            <h1 className="sitename">Vesperr</h1>
          </a>
        </Link>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <Link href="/" legacyBehavior>
                <a className="active">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/#about" legacyBehavior prefetch={false}>
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/#services" legacyBehavior>
                <a>Services</a>
              </Link>
            </li>
            <li>
              <Link href="/#portfolio" legacyBehavior>
                <a>Portfolio</a>
              </Link>
            </li>
            <li>
              <Link href="/#team" legacyBehavior>
                <a>Team</a>
              </Link>
            </li>
            <li className="dropdown">
              <a href="#">
                <span>Dropdown</span>{" "}
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </a>
              <ul>
                <li>
                  <a href="#">Dropdown 1</a>
                </li>
                <li className="dropdown">
                  <a href="#">
                    <span>Deep Dropdown</span>{" "}
                    <i className="bi bi-chevron-down toggle-dropdown"></i>
                  </a>
                  <ul>
                    <li>
                      <a href="#">Deep Dropdown 1</a>
                    </li>
                    <li>
                      <a href="#">Deep Dropdown 2</a>
                    </li>
                    <li>
                      <a href="#">Deep Dropdown 3</a>
                    </li>
                    <li>
                      <a href="#">Deep Dropdown 4</a>
                    </li>
                    <li>
                      <a href="#">Deep Dropdown 5</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Dropdown 2</a>
                </li>
                <li>
                  <a href="#">Dropdown 3</a>
                </li>
                <li>
                  <a href="#">Dropdown 4</a>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/#contact" legacyBehavior>
                <a>Contact</a>
              </Link>
            </li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>
        <Link href="/" legacyBehavior prefetch={false}>
          <a className="btn-getstarted">Get Started</a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
