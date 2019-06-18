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
      <Flippy
        flipOnHover={true} // default false
        flipOnClick={false} // default false
        flipDirection="horizontal" // horizontal or vertical
        ref={r => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
        // if you pass isFlipped prop component will be controlled component.
        // and other props, which will go to div
        style={{ width: "350px", height: "350px" }} /// these are optional style, it is not necessary
      >
        <FrontSide
          style={{
            backgroundColor: "#FFFFFF",
            margin: "5px"
          }}
        >
          RICK
          <div>
            <div className="image">
              <img style={{ width: "100%" }} src={lawyer.image} alt="" />
            </div>
            <div className="content">
              <div>{lawyer.full_name}</div>
            </div>
          </div>
        </FrontSide>
        <BackSide style={{ backgroundColor: "#FFFFFF" }}>
          ROCKS
          <StarRatings
            rating={this.props.lawyer.rating}
            starRatedColor="orange"
            changeRating={this.changeRating}
            numberOfStars={5}
            name="rating"
            starDimension="20px"
            starSpacing="15px"
          />
          <div>
            <button onClick={() => selectLawyer(lawyer)}>View Details</button>
          </div>
        </BackSide>
      </Flippy>
    );
  }
}

export default Lawyer;
