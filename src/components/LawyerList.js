import React, { Component } from "react";

// import LawyerDetails from "./LawyerDetails";
import FilteredLawyers from "./FilteredLawyers";

class LawyerList extends Component {
  state = {
    myLawyers: []
  };

  componentDidMount() {
    this.setState({ myLawyers: this.props.lawyers });
  }

  // updateSearch = () => {
  //   // const myNewLawyers = this.state.myLawyers;
  //   const mySearch = this.props.cardValue.toLowerCase();
  //   return this.state.myLawyers.filter(lawyer =>
  //     lawyer.full_name.toLowerCase().includes(mySearch)
  //   );
  // };
  render() {
    const mySearch = this.props.cardValue.toLowerCase();
    const filteredLawyers = this.props.lawyers.filter(lawyer => {
      if (lawyer.field) {
        return lawyer.field.toLowerCase().includes(mySearch);
      }
    });
    console.log(filteredLawyers);
    if (filteredLawyers.length === 0) {
      return <h1>No match found </h1>;
    } else
      return (
        <div>
          <FilteredLawyers
            filteredLawyers={filteredLawyers}
            selectLawyer={this.props.selectLawyer}
          />
        </div>
      );
  }
}

export default LawyerList;
