import React, { Component } from "react";

import "../App.css";

import Lawyer from "./Lawyer";

class FilteredLawyers extends Component {
  state = {};
  render() {
    return (
      <div>
        {this.props.filteredLawyers.map(lawyer => (
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
