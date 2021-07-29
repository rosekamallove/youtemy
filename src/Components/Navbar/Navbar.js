import React from "react";
import logo from "./Logo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="header">
      <img class="logo" src={logo} alt="logo" />
      <nav>
        <ul className="nav__links">
          <li>
            <a href="#" class="active">
              Home
            </a>
          </li>
          <li>
            <a href="#">Courses</a>
          </li>
          <li>
            <a href="#">Explore</a>
          </li>
          <li>
            <a href="#">Bookmarks</a>
          </li>
        </ul>
      </nav>
      <a href="#">
        <div className="settings-icon">
          <i class="fas fa-cog "></i>
        </div>
      </a>
    </div>
  );
}

export default Navbar;
