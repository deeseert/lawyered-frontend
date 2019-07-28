import React from "react";

import Picture from "./Picture.js";
import Categories from "../components/Categories";
import Footer from "../components/Footer";

import "../App.css";

import { Select } from "semantic-ui-react";

const selectOptions = [
  { key: "comm_l", value: "Commercial Law", text: "Commercial Law" },
  { key: "crim_l", value: "Criminal Law", text: "Criminal Law" },
  { key: "prop_l", value: "Property Law", text: "Property Law" }
];

const HomePage = props => {
  return (
    <div>
      <Picture
        test={props.test}
        handleSubmit={props.handleSubmit}
        handleSearch={props.handleSearch}
      />
      <h3 id="titleHomePage">Select The Legal Matter Below</h3>
      <Select
        value={props.searchValue}
        onChange={props.handleSearch}
        placeholder="Choose your option"
        options={selectOptions}
      />

      <button onClick={props.handleSubmit} id="submit">
        Search{" "}
      </button>
      <div>
        <Categories handleCardValue={props.handleCardValue} />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
