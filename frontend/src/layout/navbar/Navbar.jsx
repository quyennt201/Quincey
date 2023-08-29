import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="menu">
        <Link to="/">
          <button className="menu-btn">Home</button>
        </Link>
        <Link to="/product/men">
          <button className="menu-btn">Men</button>
        </Link>
        <Link to="/product/women">
          <button className="menu-btn">Women</button>
        </Link>
        <Link to="/product/kids">
          <button className="menu-btn">Kids</button>
        </Link>
        <Link to="/product/lady">
          <button className="menu-btn">Lady</button>
        </Link>
        <Link to="/product/gentlemen">
          <button className="menu-btn">Gentlemen</button>
        </Link>
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
        <div className="search-form">
          <input type="text" className="search-input" placeholder="search..." />
          <button className="search-btn">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
