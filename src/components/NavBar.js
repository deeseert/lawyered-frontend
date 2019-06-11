import React from "react";

import { Link } from "react-router-dom";

import "../App.css";

const NavBar = props => {
  return (
    <nav className="NavBar">
      <Link style={{ textDecoration: "none" }} to="/">
        <img id="logo" src={"./logo4.png"} alt="logo" />
      </Link>
      <ul className="nav-list">
        {props.username ? <span id="name">Hello, {props.username}</span> : ""}
        {props.username ? <span onClick={props.signout}>Sign Out</span> : ""}
        {props.username ? (
          ""
        ) : (
          <li>
            <Link style={{ textDecoration: "none" }} to="/signup">
              <span>Sign Up</span>
            </Link>
          </li>
        )}

        {props.username ? (
          ""
        ) : (
          <li>
            <Link style={{ textDecoration: "none" }} to="/signin">
              <span>Log In</span>
            </Link>
          </li>
        )}
        {props.username ? (
          <li>
            <Link style={{ textDecoration: "none" }} to="/dashboard">
              <span onClick={props.studentCall}>My Appointments</span>
            </Link>
          </li>
        ) : (
          ""
        )}

        {props.username ? (
          <li>
            <Link style={{ textDecoration: "none" }} to="/lawyers">
              <span id="navless">Lawyers</span>
            </Link>
          </li>
        ) : (
          ""
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
