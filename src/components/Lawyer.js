import React, { Component } from "react";
import { Card } from "semantic-ui-react";

import StarRatings from "react-star-ratings";

import Flippy, { FrontSide, BackSide } from "react-flippy";

class Lawyer extends Component {
  state = {
    front: true,
    rating: 2.5
  };

  flipImageLawyer = () => {
    this.setState({ front: !this.state.front });
  };

  renderImageLawyer = (lawyer, selectLawyer) => {
    return this.state.front ? (
      <div onMouseEnter={this.flipImageLawyer}>
        <h4>{lawyer.full_name}</h4>
        <div className="image_wrapper">
          <img src={lawyer.image} alt="" />
        </div>
        <div>{lawyer.full_name}</div>
        <div>
          <button onClick={() => selectLawyer(lawyer)}>View Details</button>
        </div>
      </div>
    ) : (
      <div className="card_back" onMouseLeave={this.flipImageLawyer}>
        <button onClick={() => selectLawyer(lawyer)}>View Details</button>
        <h1>This is the back</h1>
        <StarRatings
          rating={this.props.lawyer.rating}
          starRatedColor="orange"
          changeRating={this.changeRating}
          numberOfStars={5}
          name="rating"
          starDimension="20px"
          starSpacing="15px"
        />
      </div>
    );
  };

  render() {
    const { lawyer, selectLawyer } = this.props;
    // debugger;
    return (
      <div className="lawyer_list_card">
        <div>{this.renderImageLawyer(lawyer, selectLawyer)}</div>
      </div>
    );
  }
}

export default Lawyer;
