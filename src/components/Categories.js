import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import { withRouter } from "react-router-dom";

import "../App.css";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 150,
    width: 270
  }
});

class Categories extends React.Component {
  state = {
    spacing: "32",
    cardValue: ""
  };

  render() {
    const { classes } = this.props;
    const { spacing } = this.state;
    const instrArray = [
      "Fintech",
      "Intellectual Property",
      "Art Law",
      "Competition Law",
      "Tech Law",
      "Startup Law"
    ];
    const instrCss = ["Pi", "Vi", "Ob", "Gui", "Flu", "Dru"];

    return (
      <div className="categories">
        <h1 id="cath1">Browse categories:</h1>
        <Grid
          justify="center"
          container
          className={classes.root}
          spacing={16}
        >
          <Grid item xs={8}>
            <Grid
              id="myCategories"
              container
              className="test"
              justify="center"
              spacing={Number(spacing)}
            >
              {[0, 1, 2, 3, 4, 5].map((value, i) => (
                <Grid key={value} item>
                  <Paper
                    key={instrArray[i]}
                    onClick={this.props.handleCardValue}
                    id={instrCss[i]}
                    className={classes.paper}
                  >
                    <h2 className="category" id={instrArray[i]}>
                      {instrArray[i]}
                    </h2>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(Categories));
