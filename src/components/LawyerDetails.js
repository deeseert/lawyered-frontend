import React, { Component } from "react";
// import { Icon, Label, Menu, Table } from "semantic-ui-react";
import Availability from "./Availability";

class LawyerDetails extends Component {
  state = {
    lawyerAvailabilities: []
  };

  componentDidMount() {
    fetch(
      `http://localhost:3000/lawyers/${this.props.myLawyer.id}/availabilities`
    )
      .then(resp => resp.json())
      .then(data => this.setState({ lawyerAvailabilities: data }));
  }

  render() {
    console.log("this is availab:", this.state.lawyerAvailabilities);
    return (
      <div>
        <Availability
          lawyerAvailabilities={this.state.lawyerAvailabilities}
          clientId={this.props.clientId}
          // myLawyer={this.props.myLawyer}
        />
        <div className="ui cards">
          <div className="card">
            <div className="image">
              <img className="myImg" src={this.props.myLawyer.image} alt="" />
            </div>
            <div className="content">
              <div className="header">{this.props.myLawyer.full_name}</div>
              <h1>Description</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Commodi provident mollitia, repellendus laudantium voluptate
                dolores delectus itaque est aliquam, obcaecati esse distinctio,
                quas reprehenderit nostrum placeat temporibus natus doloremque
                doloribus!
              </p>
              <button>Contact Me</button>
              <button
                onClick={() =>
                  this.props.seeAvailabilitiesLawyer(this.props.myLawyer.id)
                }
              >
                View Availabilities
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LawyerDetails;
