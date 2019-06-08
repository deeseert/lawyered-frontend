import React, { Component } from "react";

class Signin extends Component {
  handleSubmit = event => {
    event.preventDefault();
    // debugger;
    console.log(event.target.name);
    // console.log(this.inputNode1.value);
    // console.log( this.inputNode2.value );
    const formData = new FormData();
    formData.append("username", this.inputNode1.value);
    formData.append("password", this.inputNode2.value);

    fetch("http://localhost:3000/tokens", { method: "POST", body: formData })
      .then(resp => resp.json())
      .then(
        resp => (
          console.log(resp.jwt), window.localStorage.setItem("jwt", resp.jwt)
        )
      )
      .then(() => this.props.history.push("/welcome"))
      .catch(function(error) {
        console.log("there is an error:", error.message);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username</label> <br />
          <input
            type="username"
            id="username"
            name="username"
            ref={node => {
              this.inputNode1 = node;
            }}
          />{" "}
          <br />
          <label htmlFor="password">Password</label> <br />
          <input
            type="password"
            id="password"
            name="password"
            ref={node => {
              this.inputNode2 = node;
            }}
          />{" "}
          <br />
          <input type="submit" value="Sign In" />
        </form>
      </div>
    );
  }
}

export default Signin;
