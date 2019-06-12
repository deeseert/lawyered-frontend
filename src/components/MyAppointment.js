import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
// import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

class MyAppointment extends React.Component {
  state = {
    lawyer_id: "",
    row_id: ""
  };

  render() {
    const { classes, appointment } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableBody>
            <TableRow key={appointment.id}>
              <CustomTableCell component="th" scope="row">
                {appointment.time}
              </CustomTableCell>
              <CustomTableCell align="right">
                {appointment.duration} minutes
              </CustomTableCell>
              <CustomTableCell align="right">{appointment.day}</CustomTableCell>
              <CustomTableCell align="right">
                <button
                  onClick={() => this.props.deleteAppointment(appointment)}
                >
                  Delete Appointment
                </button>
              </CustomTableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    );
  }
}
MyAppointment.propTypes = {
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

export default withStyles(styles)(MyAppointment);
