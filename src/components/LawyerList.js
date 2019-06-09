import React, { Component } from "react";

import LawyerDetails from "./LawyerDetails";

class LawyerList extends Component {
  state = {};
  render() {
    return (
      <div>
        {this.props.lawyers.map(lawyer => (
          <LawyerDetails />
        ))}
      </div>
    );
  }
}

export default LawyerList;
