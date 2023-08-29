import React from "react";
import { Outlet } from "react-router-dom";
import "./Layout.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

function Layout() {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="body">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
