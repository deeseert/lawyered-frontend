import React, { Component } from "react";

class LawyerDetails extends Component {
  render() {
    return (
      <div className="ui cards">
        <div className="card">
          <div className="image">
            <img src={this.props.lawyer.image} alt="" />
          </div>
          <div className="content">
            <div className="header">{this.props.lawyer.full_name}</div>
            <div className="meta">
              <a>Friends</a>
            </div>
            <div className="description">Description</div>
          </div>
          <div>
            <button onClick={() => this.props.deselectPainting()}>
              Go Back
            </button>
            <button onClick={() => this.props.addToMyCart(this.props.lawyer)}>
              Add To my Cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default LawyerDetails;
