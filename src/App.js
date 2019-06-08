import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
//withRouter is Higher Order Component used to provide App.js with props. Then you need to "export default withRouter(App)"

import HomePage from "./pages/HomePage";
import Header from "./pages/Header";
import SignInForm from "./pages/SignInForm";
// import Inventory from "./pages/Inventory";
import Dashboard from "./pages/Dashboard";

import API from "./API";

import "./App.css";

class App extends Component {
  state = {
    username: ""
  };

  signin = (username, token) => {
    this.setState({ username }, () => {
      localStorage.setItem("token", token);
      this.props.history.push("/dashboard");
    });
  };

  signout = () => {
    // When you sign out, clear the username from state
    this.setState({ username: "" });
    // And clear the localStorage too
    localStorage.removeItem("token");
    // localStorage.removeItem("jwt");
  };

  // The validate stuff needs to happen when the page loads, so when the component mounts:
  componentDidMount() {
    API.validate().then(data => {
      if (data.error) {
        // App now has history and other props thanks to withRouter
        this.props.history.push("/signin");
      } else {
        this.signin(data.username, localStorage.getItem("token"));
      }
    });
  }

  // signin = (username, token) => {
  //   localStorage.setItem("token", token);
  //   this.setState({ username }, () => {
  //     this.props.history.push("/inventory");
  //   });
  // };

  // signout = () => {
  //   this.setState({ username: "" });
  //   localStorage.removeItem("token");
  // };

  // componentDidMount() {
  //   API.validate().then(data => {
  //     if (data.error) {
  //       this.props.history.push("/signin");
  //     } else {
  //       this.signin(data.username, localStorage.getItem("token"));
  //     }
  //   });
  // }

  render() {
    const { signin, signout } = this;
    const { username } = this.state;

    return (
      <div className="App">
        <Header username={username} signout={signout} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            path="/signin"
            component={props => <SignInForm {...props} signin={signin} />}
          />
          <Route
            path="/dashboard"
            component={props => <Dashboard {...props} username={username} />}
          />
          <Route component={() => <h1>Page not found.</h1>} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
