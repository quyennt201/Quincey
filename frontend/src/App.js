import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import AuthenPage from "./pages/AuthenPage";
import PaymentPage from "./pages/PaymentPage";
import MenPage from "./pages/MenPage/MenPage";
import WomenPage from "./pages/WomenPage/WomenPage";
import DetailInformation from "./components/DetailInformation/DetailInformation";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import ProductAddForm from "./components/AddForm/ProductAddForm";

function App() {
  if(!localStorage.getItem('cart')) {
    localStorage.setItem('cart', JSON.stringify([]))
  }
  return (
    <Routes>
      <Route path="/" exact element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/authen" element={<AuthenPage />} />
        <Route path="/product/:name" element={<ProductPage />} />
        <Route path="/product/detail/:id" element={<DetailInformation />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/product" element={<ProductPage />} />
      </Route>
    </Routes>
  );
}

export default App;
