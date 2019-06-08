import React, { Component } from "react";

class MyItem extends Component {
  state = {
    item: ""
  };
  render() {
    return (
      <div>
        <h1>I'm the element in your Dashboard</h1>
      </div>
    );
  }
}

export default MyItem;
