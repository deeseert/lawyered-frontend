import React, { Component } from "react";

import "../App.css";

import Lawyer from "./Lawyer";

class FilteredLawyers extends Component {
  state = {
    filteredLawyersArray: []
  };

  render() {
    return (
      <div className="lawyers_list__cards">
        {this.props.lawyers.map(lawyer => (
          <Lawyer
            key={lawyer.id}
            lawyer={lawyer}
            selectLawyer={this.props.selectLawyer}
          />
        ))}
      </div>
    );
  }
}

export default FilteredLawyers;