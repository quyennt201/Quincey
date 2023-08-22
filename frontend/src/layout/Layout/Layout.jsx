import React from "react";
import { Outlet } from "react-router-dom";
import "./Layout.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SlideShow from "../SlideShow/SlideShow";
import Navbar from "../navbar/Navbar";

function Layout() {
  return (
    <div>
      <Header />
      <Navbar />
      <div style={{ backgroundColor: "var(--main-color)" }}>
        <SlideShow />
      </div>
      <div className="body">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
