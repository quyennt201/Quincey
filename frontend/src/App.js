import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import AuthenPage from "./pages/AuthenPage";
import PaymentPage from './pages/PaymentPage';
import MenPage from './pages/MenPage';
import WomenPage from './pages/WomenPage';
import DetailInformation from "./components/DetailInformation/DetailInformation";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/authen" element={<AuthenPage />} />
        <Route path="/men" element={<MenPage />} />
        <Route path="/women" element={<WomenPage />} />
        <Route path="/detail" element={<DetailInformation />} />
      </Route>
    </Routes>
  );
}

export default App;
