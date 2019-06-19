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
        {props.username ? <li id="name">Hello {props.username}</li> : ""}
        {props.username ? (
          <li>
            <button onClick={props.signout}> Sign Out</button>
          </li>
        ) : (
          ""
        )}
        {props.username ? (
          ""
        ) : (
          <li>
            <Link style={{ textDecoration: "none" }} to="/signup">
              <button>Sign Up</button>
            </Link>
          </li>
        )}

        {props.username ? (
          ""
        ) : (
          <li>
            <Link style={{ textDecoration: "none" }} to="/signin">
              <button>Log In</button>
            </Link>
          </li>
        )}
        {props.username ? (
          <li>
            <Link style={{ textDecoration: "none" }} to="/dashboard">
              <button onClick={props.studentCall}>My Appointments</button>
            </Link>
          </li>
        ) : (
          ""
        )}

        {props.username ? (
          <li>
            <Link style={{ textDecoration: "none" }} to="/lawyers">
              <button id="navless">Lawyers</button>
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
