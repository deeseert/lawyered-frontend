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

      <div class="input-field col s12 teal lighten-2">
        <select name="searchValue" onChange={props.handleSearch}>
          <option value="" disabled selected>
            Choose your option
          </option>
          <option value="Commercial Law">Commercial Law</option>
          <option value="Criminal Law">Criminal Law</option>
          <option value="Property Law">Property Law</option>
        </select>
        <label>Please, select the field here:</label>
      </div>
      <button onClick={props.handleSubmit} id="submit">
        Search{" "}
      </button>

      <Categories handleCardValue={props.handleCardValue} />
      {/* <HowWorks /> */}
      <Footer />
    </div>
  );
};

export default HomePage;
