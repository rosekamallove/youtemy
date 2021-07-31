import React from "react";
import { Link } from "react-router-dom";
import logo from "./Logo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="header">
      <img class="logo" src={logo} alt="logo" />
      <nav>
        <ul className="nav__links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/explore">Explore</Link>
          </li>
          <li>
            <Link to="/bookmarks">Bookmarks</Link>
          </li>
        </ul>
      </nav>
      <Link to="/settings">
        <div className="settings-icon">
          <i class="fas fa-cog "></i>
        </div>
      </Link>
    </div>
  );
}

export default Navbar;
