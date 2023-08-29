import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <div className="logo-left">
          <button className="btn-icon"><i class="far fa-envelope" style={{marginRight: "10px"}}></i></button>
          <button className="btn-icon"><i class="fas fa-phone"></i></button>
        </div>
        <div className="logo-mid"><Link to="/" style={{textDecoration: "none", color: "black", letterSpacing: "10px"}}>QUINCEY</Link></div>
        <div className="logo-right">
          <button className="btn-icon"><i class="far fa-shopping-cart" style={{marginRight: "10px"}}></i></button>
          <button className="btn-icon"><i class="far fa-user"  style={{marginRight: "10px"}}></i></button>
          <button className="btn-icon"><i class="fas fa-headphones-alt"  style={{marginRight: "10px"}}></i></button>
          <button className="btn-icon"><i class="fas fa-globe"></i></button>
        </div>
      </div>
     
    </div>
  );
}

export default Header;
