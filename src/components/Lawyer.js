import React, { Component } from "react";
// import { Card } from "semantic-ui-react";

import StarRatings from "react-star-ratings";

// import Flippy, { FrontSide, BackSide } from "react-flippy";

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
      </div>
    ) : (
      <div className="card_back" onMouseLeave={this.flipImageLawyer}>
        <h4>
          {lawyer.full_name} is specialised in {lawyer.field}
        </h4>
        <br />
        Rating:
        <StarRatings
          rating={this.props.lawyer.rating}
          starRatedColor="orange"
          changeRating={this.changeRating}
          numberOfStars={5}
          name="rating"
          starDimension="20px"
          starSpacing="15px"
        />
        <br />
        <button className="buttonNavar" onClick={() => selectLawyer(lawyer)}>
          View Details
        </button>
      </div>
    );
  };

  render() {
    const { lawyer, selectLawyer } = this.props;
    // debugger;
    return (
      <div id="pic_wrapper" className="lawyer_list_card">
        <div>{this.renderImageLawyer(lawyer, selectLawyer)}</div>
      </div>
    );
  }
}

export default Lawyer;
