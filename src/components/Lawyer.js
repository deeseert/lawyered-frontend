import React, { Component } from "react";
import { Card } from "semantic-ui-react";

class Lawyer extends Component {
  state = {
    front: true
  };

  flipImageLawyer = () => {
    this.setState({ front: !this.state.front });
  };

  renderImageLawyer = lawyer => {
    return this.state.front ? (
      <img src={lawyer.image} alt="" onMouseEnter={this.flipImageLawyer} />
    ) : (
      <h1 onMouseLeave={this.flipImageLawyer}>This is the back</h1>
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
