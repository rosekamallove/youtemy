import firebase from "firebase";
import "firebase/auth";
import React from "react";
import { Link } from "react-router-dom";
import logo from "./Logo.png";
import "./Navbar.css";
const auth = firebase.auth();

function Navbar() {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="logo" />
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
      <ul className="nav__links">
        <li>
          <Link to="/settings">
            <div className="settings-icon">
              <i className="fas fa-cog "></i>
            </div>
          </Link>
        </li>
        <li>
          <div className="signout-icon">
            <i
              className="fas fa-sign-out-alt"
              onClick={() => auth.signOut()}
            ></i>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
