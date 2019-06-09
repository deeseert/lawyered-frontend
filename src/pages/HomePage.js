import React from "react";

import { Link } from "react-router-dom";

const HomePage = props => (
  <div>
    <h1>Home page!</h1>
    <Link to="/dashboard">My Dashboard</Link>
  </div>
);

export default HomePage;
