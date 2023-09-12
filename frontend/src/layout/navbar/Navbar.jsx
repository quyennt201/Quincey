import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "../Header/Header.css";
import { TYPE } from "../../datas/DATA";
import { cartState } from "../../recoil/CartState";
import { useRecoilValue } from "recoil";

function Navbar() {
  const cart = useRecoilValue(cartState);
  const getCartTotal = () => {
    return cart.reduce((sum, { quantity }) => sum + quantity, 0);
  };

  return (
    <div className="navbar">
      <div className="menu">
        <Link to="/">
          <button className="menu-btn">Home</button>
        </Link>
        {TYPE?.map((t) => (
          <Link to={`/product/${t.value.toLocaleLowerCase()}`}>
            <button className="menu-btn">{t.value}</button>
          </Link>
        ))}
        <Link to="/product">
          <button className="menu-btn">Product</button>
        </Link>
        {/* <div class="w3-dropdown-hover">
          <button class="menu-btn menu-dropdown">Dropdown</button>
          <div class="w3-dropdown-content w3-bar-block w3-card-4">
            <Link to="#" class="w3-bar-item w3-button">
              Link1
            </Link>
          </div>
        </div> */}
      </div>
      <div className="search">
        {/* <div className="search-form">
          <input type="text" className="search-input" placeholder="Search..." />
          <button className="search-btn">
            <i class="fas fa-search"></i>
          </button>
        </div> */}
        <button className="btn-icon">
          <i class="far fa-search"></i>
        </button>
        <button className="btn-icon" style={{ marginLeft: "10px" }}>
          <i class="far fa-heart"></i>
        </button>
        <button
          className="btn-icon"
          style={{ marginLeft: "10px", position: "relative", zIndex: "1" }}
        >
          <i class="far fa-shopping-cart"></i>
          <p className="length-cart">{getCartTotal()}</p>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
