import React, { Component } from "react";

class LawyerDetails extends Component {
  // componentDidMount() {
  //   fetch(`http://localhost:3000/lawyers/${this.props.selectedLawyer.id}`).then(resp => resp.json())
  //   }

  render() {
    // debugger;
    return (
      <div>
        <h1>OK NOW IT'S WORKING!</h1>
        <div className="ui cards">
          <div className="card">
            <div className="image">
              <img
                className="myImg"
                src={this.props.myLawyer.image}
                alt=""
              />
            </div>
            <div className="content">
              <div className="header">
                {this.props.myLawyer.full_name}
              </div>
              <h1>Description</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Commodi provident mollitia, repellendus laudantium voluptate
                dolores delectus itaque est aliquam, obcaecati esse distinctio,
                quas reprehenderit nostrum placeat temporibus natus doloremque
                doloribus!
              </p>
              <button>Contact Me</button>
              <button>Book appointment</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LawyerDetails;
