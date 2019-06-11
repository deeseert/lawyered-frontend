import React, { Component } from "react";

class Lawyer extends Component {
  render() {
    // debugger;
    return (
      <div className="ui cards">
        <div className="card">
          <div className="image">
            <img className="myImg" src={this.props.lawyer.image} alt="" />
          </div>
          <div className="content">
            <div className="header">{this.props.lawyer.full_name}</div>
            <button onClick={() => this.props.selectLawyer(this.props.lawyer)}>
              View Details
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Lawyer;
