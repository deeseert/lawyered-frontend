import React, { Component } from "react";
// import { Icon, Label, Menu, Table } from "semantic-ui-react";
import Availability from "./Availability";

class LawyerDetails extends Component {
  state = {
    hidden: true,
    lawyerAvailabilities: []
  };

  componentDidMount() {
    fetch(
      `http://localhost:3000/lawyers/${this.props.myLawyer.id}/availabilities`
    )
      .then(resp => resp.json())
      .then(data => this.setState({ lawyerAvailabilities: data }));
  }

  showAvailabilities = () => {
    this.setState({ hidden: !this.state.hidden });
  };
  renderAvailabilities = () => {
    return this.state.hidden ? null : (
      <Availability
        showAvailabilities={this.showAvailabilities}
        lawyerAvailabilities={this.state.lawyerAvailabilities}
        clientId={this.props.clientId}
        myLawyer={this.props.myLawyer}
        row_id={this.props.row_id}
      />
    );
  };

  render() {
    console.log("this is availab:", this.state.lawyerAvailabilities);
    return (
      <div>
        {this.renderAvailabilities()}
        <img src={this.props.myLawyer.image} alt="" />
        <div>{this.props.myLawyer.full_name}</div>
        <h1>Description</h1>
        <p>{this.props.myLawyer.description}</p>
        <button>Contact Me</button>
        <button onClick={() => this.showAvailabilities()}>
          View Availabilities
        </button>
      </div>
    );
  }
}

export default LawyerDetails;

// this.props.seeAvailabilitiesLawyer(this.props.myLawyer.id);
