import React, { Component } from "react";

import LawyerDetails from "./LawyerDetails";

class LawyerList extends Component {
  state = {
    myLawyers: []
  };

  componentDidMount() {
    this.setState({ myLawyers: this.props.lawyers });
  }

  updateSearch = () => {
    // const myNewLawyers = this.state.myLawyers;
    const mySearch = this.props.cardValue.toLowerCase();
    return this.state.myLawyers.filter(lawyer => lawyer.full_name.toLowerCase().includes(mySearch)
    );
  };
  render() {
    if (!this.updateSearch()) {
      return <h1>Match not found!</h1>;
    } else {
      return (
        <div>
          {this.updateSearch().map(lawyer => (
            <LawyerDetails key={lawyer.id} lawyer={lawyer} />
          ))}
        </div>
      );
    }
  }
}

export default LawyerList;
