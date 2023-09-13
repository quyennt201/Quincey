import React from "react";
import { Outlet } from "react-router-dom";
import "./Layout.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Popup from "../../components/Popup/Popup";
import ToastMess from "../../components/ToastMess/ToastMess";
import Loading from "../../components/Loading/Loading";

function Layout() {
  return (
    <div>
      <ToastMess />
      <Popup />
      <Loading />
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
