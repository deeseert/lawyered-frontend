import React from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import API from "../API";

class SignInForm extends React.Component {
  state = {
    username: "",
    password: ""
  };

  // Sign in form-event
  handleSubmit = () => {
    console.log("submit worked");
    API.signin(this.state).then(data => {
      if (data.error) {
        alert(`Didn't work!: ${data.error}`);
      } else {
        // if it gets here, th user is authenticated!
        this.props.signin(this.state.username, data.token);
        //this stores the id of the user in the localStorage and you can use it for authenticate the user every time after the login
      }
    });
  };

  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  render() {
    const { username, password } = this.state;
    const { handleChange, handleSubmit } = this;

    return (
      <div>
        <TextField
          id="usernameInput"
          label="Username"
          value={username}
          onChange={handleChange}
          margin="normal"
          name="username"
        />
        <br />
        <TextField
          id="passwordInput"
          label="Password"
          value={password}
          onChange={handleChange}
          margin="normal"
          name="password"
          type="password"
        />
        <br />
        <Button onClick={handleSubmit} variant="contained" color="primary">
          SUBMIT
        </Button>
      </div>
    );
  }
}

export default SignInForm;
