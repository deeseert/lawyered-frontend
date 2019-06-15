import React from "react";
import { Marker } from "react-google-maps";

const MyMarker = props => {
  return <Marker position={props.location} />;
};

export default MyMarker;
