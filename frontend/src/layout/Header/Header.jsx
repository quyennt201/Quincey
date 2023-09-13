import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [isClick, setIsClick] = useState(false);
  return (
    <div className="header">
      <div className="logo">
        <div className="logo-left">
          <button className="btn-icon" title="quyennt.201@gmail.com">
            <i class="far fa-envelope"></i>
          </button>
          {/* <button className="btn-icon"><i class="fas fa-phone"></i></button> */}
        </div>
        <div className="logo-mid">
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "black",
              letterSpacing: "10px",
            }}
          >
            QUINCEY
          </Link>
        </div>
        <div className="logo-right">
          <button className="btn-icon btn-user" onClick={() => setIsClick(!isClick)}>
            <i class="far fa-user"></i>
          </button>
          {isClick && (
            <div className="header-user">
              <Link to="/login" onClick={() => setIsClick(false)}><button className="header-user-item">Login</button></Link>
              <Link to="/sign-up" onClick={() => setIsClick(false)}><button className="header-user-item">Sign Up</button></Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
