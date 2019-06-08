import React from "react";

import API from "../API";

import Item from "../components/Item";

class Inventory extends React.Component {
  state = {
    items: []
  };

  style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flexWrap: "wrap"
  };

  componentDidMount() {
    if (!this.props.username) {
      this.props.history.push("/signin");
    } else {
      API.getDashboard().then(data => {
        if (data.error) {
          alert(data.error);
        } else {
          this.setState({ items: data });
        }
      });
    }
  }

  render() {
    const { items } = this.state;

    return (
      <div style={this.style} className="user-list">
        <h3>Here's your inventory:</h3>
        {items.length === 0 && <p>Sorry, you don't have any items.</p>}
        {items.map(item => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    );
  }
}

export default Inventory;
