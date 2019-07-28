import React, { Component } from "react";

// import LawyerDetails from "./LawyerDetails";
import FilteredLawyers from "./FilteredLawyers";
import Filter from "./Filter";
import MapContainer from "./MapContainer";

class LawyerList extends Component {
  state = {
    sort: ""
  };

  updateSort = sort => {
    this.setState({ sort });
  };

  sortLawyers = lawyers => {
    // debugger
    lawyers = [...lawyers];

    if (this.state.sort === "Name") {
      lawyers.sort((a, b) => {
        if (a.full_name > b.full_name) return 1;
        if (a.full_name < b.full_name) return -1;
        return 0;
      });
    }

    if (this.state.sort === "Location") {
      lawyers.sort((a, b) => {
        if (a.location > b.location) return 1;
        if (a.location < b.location) return -1;
        return 0;
      });
    }

    if (this.state.sort === "Rating") {
      lawyers.sort((a, b) => {
        if (a.rating > b.rating) return 1;
        if (a.rating < b.rating) return -1;
        return 0;
      });
    }

    if (this.state.sort === "Price_hour") {
      lawyers.sort((a, b) => {
        if (a.price_hour > b.price_hour) return 1;
        if (a.price_hour < b.price_hour) return -1;
        return 0;
      });
    }
    return lawyers;
  };

  filterLawyers = lawyers => {
    const mySearch = this.props.cardValue.toLowerCase();
    return lawyers.filter(lawyer => {
      if (lawyer.field) {
        return lawyer.field.toLowerCase().includes(mySearch);
      }
    });
  };

  render() {
    const { sortLawyers, filterLawyers } = this;
    const { lawyers } = this.props;
    const filteredAndSortedLawyers = sortLawyers(filterLawyers(lawyers));
    if (filteredAndSortedLawyers.length === 0) {
      return <h1>No match found </h1>;
    } else
      return (
        <div className="lawyers_container">
          <div className="lawyers_list">
            <Filter updateSort={this.updateSort} />
            <FilteredLawyers
              selectLawyer={this.props.selectLawyer}
              lawyers={filteredAndSortedLawyers}
            />
          </div>

          <div className="lawyers_maps">
            <MapContainer lawyers={filteredAndSortedLawyers} />
          </div>
        </div>
      );
  }
}

export default LawyerList;
