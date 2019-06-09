// import React from "react";
// import PropTypes from "prop-types";
// import { withStyles } from "@material-ui/core/styles";
// import classnames from "classnames";
// import Card from "@material-ui/core/Card";
// import CardHeader from "@material-ui/core/CardHeader";
// import CardContent from "@material-ui/core/CardContent";
// import CardActions from "@material-ui/core/CardActions";
// import Collapse from "@material-ui/core/Collapse";
// import Avatar from "@material-ui/core/Avatar";
// import IconButton from "@material-ui/core/IconButton";
// import Typography from "@material-ui/core/Typography";
// import red from "@material-ui/core/colors/red";
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import ShareIcon from "@material-ui/icons/Share";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import MoreVertIcon from "@material-ui/icons/MoreVert";

// const styles = theme => ({
//   card: {
//     maxWidth: 400
//   },
//   actions: {
//     display: "flex"
//   },
//   expand: {
//     transform: "rotate(0deg)",
//     transition: theme.transitions.create("transform", {
//       duration: theme.transitions.duration.shortest
//     }),
//     marginLeft: "auto",
//     [theme.breakpoints.up("sm")]: {
//       marginRight: -8
//     }
//   },
//   expandOpen: {
//     transform: "rotate(180deg)"
//   },
//   avatar: {
//     backgroundColor: red[500]
//   }
// });

// class Item extends React.Component {
//   state = { expanded: false };

//   handleExpandClick = () => {
//     this.setState(state => ({ expanded: !state.expanded }));
//   };

//   render() {
//     const { classes, item } = this.props;

//     return (
//       <Card style={{ margin: "10px" }} className={classes.card}>
//         <CardHeader
//           avatar={
//             <Avatar aria-label="Recipe" className={classes.avatar}>
//               {item.name[0].toUpperCase()}
//             </Avatar>
//           }
//           action={
//             <IconButton>
//               <MoreVertIcon />
//             </IconButton>
//           }
//           title={item.name}
//           subheader="September 14, 2016"
//         />
//         <CardActions className={classes.actions} disableActionSpacing>
//           <IconButton aria-label="Add to favorites">
//             <FavoriteIcon />
//           </IconButton>
//           <IconButton aria-label="Share">
//             <ShareIcon />
//           </IconButton>
//           <IconButton
//             className={classnames(classes.expand, {
//               [classes.expandOpen]: this.state.expanded
//             })}
//             onClick={this.handleExpandClick}
//             aria-expanded={this.state.expanded}
//             aria-label="Show more"
//           >
//             <ExpandMoreIcon />
//           </IconButton>
//         </CardActions>
//         <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
//           <CardContent>
//             <Typography paragraph variant="body2">
//               {item.description}
//             </Typography>
//           </CardContent>
//         </Collapse>
//       </Card>
//     );
//   }
// }

// Item.propTypes = {
//   classes: PropTypes.object.isRequired
// };

// export default withStyles(styles)(Item);
