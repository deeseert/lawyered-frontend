import React from "react";

// import { Link } from "react-router-dom";

import Picture from "./Picture.js";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
// import HowWorks from "./HowWorks.js";

import "../App.css";

const HomePage = props => {
  return (
    <div className="App">
      <Picture
        test={props.test}
        handleSubmit={props.handleSubmit}
        handleSearch={props.handleSearch}
      />
      <Categories handleCardValue={props.handleCardValue} />
      {/* <HowWorks /> */}
      <Footer />
    </div>
  );
};

export default HomePage;
