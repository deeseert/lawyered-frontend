import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
//withRouter is Higher Order Component used to provide App.js with props. Then you need to "export default withRouter(App)"

import HomePage from "./pages/HomePage";
import SignInForm from "./pages/SignInForm";
import SignUpForm from "./pages/SignUpForm";
import Dashboard from "./pages/Dashboard";
import NavBar from "./components/NavBar";
import LawyerList from "./components/LawyerList";

import API from "./API";

import "./App.css";

class App extends Component {
  state = {
    username: "",
    searchValue: "",
    lawyers: [],
    selectedLawyer: null
  };

  addToMyDashboard = lawyer => {
    console.log("Add Lawyer to your dashboard successfully clicked!");
  };

  selectLawyer = lawyer => {
    this.setState({ selectedLawyer: lawyer });
  };

  deselectLawyer = () => {
    this.setState({ selectedLawyer: null });
  };

  signin = (username, token) => {
    this.setState({ username }, () => {
      localStorage.setItem("token", token);
      this.props.history.push("/");
    });
  };

  signout = () => {
    // When you sign out, clear the username from state
    this.setState({ username: "" });
    // And clear the localStorage too
    localStorage.removeItem("token");
    // localStorage.removeItem("jwt");
    this.props.history.push("/signin");
  };

  // The validate stuff needs to happen when the page loads, so when the component mounts:
  componentDidMount() {
    API.validate().then(data => {
      if (data.error) {
        // App now has history and other props thanks to withRouter
        this.props.history.push("/signin");
      } else {
        this.signin(data.username, localStorage.getItem("token"));
        fetch("http://localhost:3000/lawyers")
          .then(resp => resp.json())
          .then(lawyers => this.setState({ lawyers }));
      }
    });
  }

  render() {
    const { signin, signout } = this;
    const { username, lawyers } = this.state;

    return (
      <div className="App">
        <NavBar username={username} signout={signout} />
        {/* <Header username={username} signout={signout} /> */}
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            path="/signin"
            component={props => (
              <SignInForm {...props} signin={signin} signout={signout} />
            )}
          />
          <Route
            exact
            path="/signup"
            component={props => <SignUpForm {...props} />}
          />
          <Route
            path="/dashboard"
            component={props => <Dashboard {...props} username={username} />}
          />
          <Route
            exact
            path="/lawyers"
            component={props => (
              <LawyerList
                {...props}
                lawyers={lawyers}
                selectedLawyer={this.selectedLawyer}
                addToMyDashboard={this.addToMyDashboard}
              />
            )}
          />
          <Route component={() => <h1>Page not found.</h1>} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
