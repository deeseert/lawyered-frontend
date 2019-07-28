import React from "react";

import { Link } from "react-router-dom";

import "../App.css";
import logo from "../pictures/logo.png";

const NavBar = props => {
  return (
    <nav>
      <Link style={{ textDecoration: "none" }} to="/">
        <img id="logo" src={logo} alt="logo" />
      </Link>
      <ul className="nav_list">
        {props.username ? <li id="name">Hello {props.username}</li> : ""}
        {props.username ? (
          <li>
            <button className="buttonNavar" onClick={props.signout}>
              {" "}
              Sign Out
            </button>
          </li>
        ) : (
          ""
        )}
        {props.username ? (
          ""
        ) : (
          <li>
            <Link style={{ textDecoration: "none" }} to="/signup">
              <button className="buttonNavar">Sign Up</button>
            </Link>
          </li>
        )}

        {props.username ? (
          ""
        ) : (
          <li>
            <Link style={{ textDecoration: "none" }} to="/signin">
              <button className="buttonNavar">Log In</button>
            </Link>
          </li>
        )}
        {props.username ? (
          <li>
            <Link style={{ textDecoration: "none" }} to="/dashboard">
              <button className="buttonNavar" onClick={props.studentCall}>
                My Appointments
              </button>
            </Link>
          </li>
        ) : (
          ""
        )}

        {props.username ? (
          <li>
            <Link style={{ textDecoration: "none" }} to="/lawyers">
              <button className="buttonNavar" id="navless">
                Lawyers
              </button>
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
