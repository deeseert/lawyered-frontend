import React, { Component } from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import API from "../API";

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

  deleteAppointment = appointment => {
    const oldAppointments = this.state.appointments;
    const newAppointments = oldAppointments.filter(
      appointmentBooked => appointmentBooked.id !== appointment.id
    );
    this.setState({ appointments: newAppointments });
    this.destroyer(appointment.id);
  };

  destroyer = async id => {
    const resp = await fetch(`http://localhost:3000/appointments/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    });
    return await resp.json();
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

        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <CustomTableCell>Time</CustomTableCell>
                <CustomTableCell>Duration</CustomTableCell>
                <CustomTableCell align="right">Day</CustomTableCell>
                <CustomTableCell align="right">Availability</CustomTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {appointments.map(appointment => {
                return (
                  <TableRow key={appointment.id}>
                    <CustomTableCell component="th" scope="row">
                      {appointment.time}
                    </CustomTableCell>
                    <CustomTableCell align="right">
                      {appointment.duration} hour
                    </CustomTableCell>
                    <CustomTableCell align="right">
                      {appointment.day}
                    </CustomTableCell>
                    <CustomTableCell align="right">
                      <button
                        onClick={() => this.deleteAppointment(appointment)}
                      >
                        Delete Appointment
                      </button>
                    </CustomTableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};
const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  },
  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
});
const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 16
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

export default withStyles(styles)(Dashboard);
