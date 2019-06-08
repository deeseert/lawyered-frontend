import React from "react";

import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";

import logo from "../logo.svg";

const Header = ({ username, signout }) => (
  <header className="App-header">
    <Link to="/">
      <img src={logo} className="App-logo" alt="logo" />
    </Link>
    <h1 className="App-title">
      {!username ? "Welcome to React." : `Welcome back, ${username}!`}
    </h1>
    {username && (
      <Button onClick={signout} variant="contained" color="primary">
        SIGN OUT
      </Button>
    )}
  </header>
);

export default Header;
