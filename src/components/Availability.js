import React from "react";

import API from "../API";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

class SimpleTable extends React.Component {
  state = {
    lawyer_id: "",
    row_id: 0
  };

  postAppointment = availabilityRow => {
    console.log("Appointment booked");
    return fetch("http://localhost:3000/appointments", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        client_id: this.props.clientId,
        availability_id: availabilityRow.id
      })
    }).then(resp => resp.json());
  };

  render() {
    const { classes } = this.props;
    return (
      <Paper
        id="mammeta"
        className={classes.root}
        onClick={this.props.showAvailabilities}
      >
        <Table
          id="soreta"
          className={classes.table}
          onClick={e => e.stopPropagation()}
        >
          <TableHead>
            <TableRow>
              <CustomTableCell>Time</CustomTableCell>
              <CustomTableCell align="left">Duration</CustomTableCell>
              <CustomTableCell align="right">Day</CustomTableCell>
              <CustomTableCell align="right">Availability</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.lawyerAvailabilities.map(availabilityRow => {
              console.log("availability of lawyer:", availabilityRow);
              return (
                <TableRow key={availabilityRow.id}>
                  <CustomTableCell component="th" scope="row">
                    {availabilityRow.time}
                  </CustomTableCell>
                  <CustomTableCell align="right">
                    {availabilityRow.duration} hour
                  </CustomTableCell>
                  <CustomTableCell align="right">
                    {availabilityRow.day}
                  </CustomTableCell>
                  <CustomTableCell align="right">
                    {availabilityRow.booked ? "Unavailable" : "Available"}{" "}
                    {availabilityRow.booked ? (
                      ""
                    ) : (
                      <button
                        onClick={() => this.postAppointment(availabilityRow)}
                      >
                        Book Appointment
                      </button>
                    )}
                  </CustomTableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}
SimpleTable.propTypes = {
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

export default withStyles(styles)(SimpleTable);
