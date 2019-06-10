import React, { Component } from "react";

import "../App.css";

import LawyerDetails from "./LawyerDetails";

class FilteredLawyers extends Component {
  state = {};
  render() {
    return (
      <div>
        {this.props.filteredLawyers.map(lawyer => (
          <LawyerDetails
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
