import React from "react";
import { Marker } from "react-google-maps";
import hammer from "../pictureComponents/lawyer-logo.png";

const TeacherMarker = props => {
  return <Marker position={props.location} icon={hammer} />;
};

export default TeacherMarker;
