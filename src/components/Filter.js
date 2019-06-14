import React, { Component } from "react";

// import M from "materialize-css";

class Filter extends Component {
  // const { toggleGreased, updateSort } = this.props

  // componentDidMount() {
  //   var elems = document.querySelectorAll("select");
  //   return M.FormSelect.init(elems);
  // }

  render() {
    return (
      <div>
        <div>
          <select
            name="searchValue"
            onChange={event => this.props.updateSort(event.target.value)}
          >
            <option value="" disabled selected>
              Sort by:
            </option>
            <option value="Name">Name</option>
            <option value="Location">Location</option>
            <option value="Rating">Rating</option>
            <option value="Price_hour">Price</option>
          </select>
          <label />
        </div>
      </div>
    );
  }
}

export default Filter;
