import React, { Component } from "react";

class LawyerDetails extends Component {
  render() {
    debugger;
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
            <button onClick={() => this.props.addToMyCart(this.props.lawyer)}>
              Button 2
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default LawyerDetails;
