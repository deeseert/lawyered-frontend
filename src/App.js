import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
//withRouter is Higher Order Component used to provide App.js with props. Then you need to "export default withRouter(App)"

import HomePage from "./pages/HomePage";
import SignInForm from "./pages/SignInForm";
import SignUpForm from "./pages/SignUpForm";
import Dashboard from "./pages/Dashboard";
import NavBar from "./components/NavBar";
import LawyerList from "./components/LawyerList";
import LawyerDetails from "./components/LawyerDetails";

import API from "./API";

import "./App.css";

class App extends Component {
  state = {
    username: "",
    searchValue: "",
    cardValue: "",
    lawyers: [],
    selectedLawyer: null
  };

  handleSearch = event => {
    this.setState({ searchValue: event.target.value });
  };

  handleSubmit = () => {
    this.setState({ cardValue: this.state.searchValue });
    this.setState({ searchValue: "" });
    this.props.history.push("/lawyers");
  };

  addToMyDashboard = lawyer => {
    console.log("Add Lawyer to your dashboard successfully clicked!");
  };

  selectLawyer = lawyer => {
    console.log("lawyer selected");
    this.setState({ selectedLawyer: lawyer });
    this.props.history.push(`/lawyers/${lawyer.id}`);
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
          <Route
            exact
            path="/"
            component={props => (
              <HomePage
                {...props}
                test={this.state.searchValue}
                handleSearch={this.handleSearch}
                handleSubmit={this.handleSubmit}
              />
            )}
          />
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
                selectLawyer={this.selectLawyer}
                addToMyDashboard={this.addToMyDashboard}
                cardValue={this.state.cardValue}
              />
            )}
          />
          <Route
            exact
            path={`/lawyers/:id`}
            component={props => (
              <LawyerDetails
                {...props}
                selectedLawyer={this.state.selectedLawyer}
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
