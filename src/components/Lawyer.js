import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import Rating from "react-rating";
import StarRatings from "react-star-ratings";

class Lawyer extends Component {
  state = {
    front: true,
    rating: 2.5
  };

  flipImageLawyer = () => {
    this.setState({ front: !this.state.front });
  };

  renderImageLawyer = lawyer => {
    return this.state.front ? (
      <img src={lawyer.image} alt="" onMouseEnter={this.flipImageLawyer} />
    ) : (
      <React.Fragment>
        <h1 onMouseLeave={this.flipImageLawyer}>This is the back</h1>
        <StarRatings
          rating={this.props.lawyer.rating}
          starRatedColor="orange"
          changeRating={this.changeRating}
          numberOfStars={5}
          name="rating"
          starDimension="20px"
          starSpacing="15px"
        />
      </React.Fragment>
    );
  };

  render() {
    const { lawyer, selectLawyer } = this.props;
    // debugger;
    return (
      <Card>
        <div className="image">{this.renderImageLawyer(lawyer)}</div>
        <div className="content">
          <div>{lawyer.full_name}</div>
        </div>
        <div>
          <button onClick={() => selectLawyer(lawyer)}>View Details</button>
        </div>
      </Card>
    );
  }
}

export default Lawyer;
