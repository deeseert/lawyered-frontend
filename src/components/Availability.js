// import React, { Component } from "react";
// import { Icon, Label, Menu, Table } from "semantic-ui-react";

// class Availability extends Component {
//   // state = {}
//   render() {
//     return (
//       <>
//       <Table celled>
//         <Table.Header>
//           <Table.Row>
//             <Table.HeaderCell>Header</Table.HeaderCell>
//             <Table.HeaderCell>Header</Table.HeaderCell>
//             <Table.HeaderCell>Header</Table.HeaderCell>
//           </Table.Row>
//         </Table.Header>

//         <Table.Body>
//           {this.props.lawyerAvailabilities.map(av =>{
//             return (
//             <Table.Row>
//               <Table.Cell>
//                 <Label ribbon>First</Label>
//               </Table.Cell>
//               <Table.Cell>Cell</Table.Cell>
//               <Table.Cell>Cell</Table.Cell>
//             </Table.Row>
//             <Table.Row>
//               <Table.Cell>Cell</Table.Cell>
//               <Table.Cell>Cell</Table.Cell>
//               <Table.Cell>Cell</Table.Cell>
//             </Table.Row>
//             <Table.Row>
//               <Table.Cell>Cell</Table.Cell>
//               <Table.Cell>Cell</Table.Cell>
//               <Table.Cell>Cell</Table.Cell>
//             </Table.Row>
//           )
//         })}
//         </Table.Body>
//       </Table>
//     );
//   }
// }

// export default Availability;

import React from "react";
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
    teacher_id: "",
    row_id: ""
  };

  postLesson = row => {
    return fetch("https://salty-hamlet-89842.herokuapp.com/api/v1/lessons", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        date: row.day,
        time: row.time,
        lawyer_id: row.teacher_id,
        client_id: this.props.studentIds,
        // availability_id: row.id
      })
    })
      .then(resp => resp.json())
      .then(this.props.callers);
  };

  // formattedDate = row => {
  //   let d = new Date(row.date);

  //   let month = String(d.getMonth() + 1);
  //   let day = String(d.getDate());
  //   const year = String(d.getFullYear());

  //   if (month.length < 2) month = "0" + month;
  //   if (day.length < 2) day = "0" + day;

  //   return `${day}/${month}/${year}`;
  // };

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <CustomTableCell>Time</CustomTableCell>
              <CustomTableCell>Duration</CustomTableCell>
              <CustomTableCell align="right">Day</CustomTableCell>
              <CustomTableCell align="right">Availability</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.lawyerAvailabilities.map(row => {
              return (
                <TableRow key={row.id}>
                  <CustomTableCell component="th" scope="row">
                    {row.time}
                  </CustomTableCell>
                  <CustomTableCell align="right">
                    {row.duration} minutes
                  </CustomTableCell>
                  <CustomTableCell align="right">{row.day}</CustomTableCell>
                  <CustomTableCell align="right">
                    {row.booked ? "Unavailable" : "Available"}{" "}
                    {row.booked ? (
                      ""
                    ) : (
                      <button onClick={() => this.postLesson(row)}>
                        Book a lesson
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
