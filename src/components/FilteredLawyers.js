import React, { Component } from "react";

import "../App.css";

import Lawyer from "./Lawyer";

class FilteredLawyers extends Component {
  state = {
    filteredLawyersArray: []
    // sort: ''
  };

  render() {
    return (
      <div>
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
