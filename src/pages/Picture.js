import React, { Component } from "react";
import "../App.css";

import { Container, Segment } from "semantic-ui-react";

// Heads up!
// Don't forget to setyp required CSS!
import "pure-react-carousel/dist/react-carousel.es.css";

import ImageCarousel from "../components/ImageCarousel";


class Picture extends Component {

  render() {
    return (
      <Container style={{ margin: 20, maxHeight: "100%" }}>
        <Segment attached="bottom">
          <ImageCarousel />
        </Segment>
      </Container>
    );
  }
}

export default Picture;
