import "firebase/auth";
import React from "react";
import { Link } from "react-router-dom";
import firebase from "../../firebase";
import logo from "./Logo.png";
import "./Navbar.css";
const auth = firebase.auth();

function Navbar() {
  return (
    <div className="parent">
      <div className="header">
        <img className="logo" src={logo} alt="logo" />
        <nav>
          <ul className="nav__links">
            <li className="nav-li">
              <Link className="nav-a" to="/">
                Home
              </Link>
            </li>
            <li className="nav-li">
              <Link className="nav-a" to="/courses">
                Courses
              </Link>
            </li>
            <li className="nav-li">
              <Link className="nav-a" to="/explore">
                Explore
              </Link>
            </li>
            <li className="nav-li">
              <Link className="nav-a" to="/bookmarks">
                Bookmarks
              </Link>
            </li>
          </ul>
        </nav>
        <ul className="nav__links">
          <li className="nav-li">
            <Link className="nav-a" to="/settings">
              <div className="settings-icon">
                <i className="fas fa-cog "></i>
              </div>
            </Link>
          </li>
          <li className="nav-li">
            <Link className="nav-a" to="/">
              <div className="signout-icon">
                <i
                  className="fas fa-sign-out-alt"
                  onClick={() => auth.signOut()}
                ></i>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
