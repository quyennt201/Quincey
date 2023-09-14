import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import DetailInformation from "./pages/DetailInformation/DetailInformation";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProductPage from "./pages/ProductPage/ProductPage";

function App() {
  if(!localStorage.getItem('cart')) {
    localStorage.setItem('cart', JSON.stringify([]))
  }
  return (
    <Routes>
      <Route path="/" exact element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage isLogin={true} />} />
        <Route path="/sign-up" element={<LoginPage isLogin={false} />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/product/:name" element={<ProductPage />} />
        <Route path="/product/detail/:id" element={<DetailInformation />} />
      </Route>
    </Routes>
  );
}

export default App;
