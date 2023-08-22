import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <div className="navbar">
        <div className="menu">
          <Link to="/">
            <button className="menu-btn">Home</button>
          </Link>
          <Link to="/men">
            <button className="menu-btn">Men</button>
          </Link>
          <Link to="/women">
            <button className="menu-btn">Women</button>
          </Link>
        </div>
        <div className="search">
          <div className="search-form">
            <input
              type="text"
              className="search-input"
              placeholder="search..."
            />
            <button className="search-btn">
              <i class="fas fa-search"></i>
            </button>
          </div>
        </div>
      </div>
  )
}

export default Navbar