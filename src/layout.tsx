// src/layout.tsx
"use client";

import React from "react";
import Header from "./_components/Header";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
