import React, { Component } from "react";

import API from "../API";

import MyAppointment from "../components/MyAppointment";

class Dashboard extends Component {
  state = {
    appointments: []
  };

  style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flexWrap: "wrap"
  };

  componentDidMount() {
    if (!this.props.username) {
      this.props.history.push("/signin");
    } else {
      API.getDashboard().then(data => {
        if (data.error) {
          alert(data.error);
        } else {
          this.setState({ appointments: data });
        }
      });
    }
  }
  render() {
    const { appointments } = this.state;
    return (
      <div>
        <h3>Here's your Dashboard:</h3>
        {appointments.length === 0 && <p>Sorry, you don't have any items.</p>}
        {appointments.map(appointment => (
          <MyAppointment key={appointment.id} item={appointment} />
        ))}
      </div>
    );
  }
}

export default Dashboard;
