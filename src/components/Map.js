import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import LawyerMarker from "./LawyerMarker";

const Map = withScriptjs(
  withGoogleMap(props => {
    const markers = props.lawyers.map(lawyer => (
      <LawyerMarker
        key={lawyer.id}
        lawyer={lawyer}
        location={{
          lat: parseFloat(lawyer.latitude),
          lng: parseFloat(lawyer.longitude)
        }}
      />
    ));

    return (
      <GoogleMap defaultZoom={11} center={{ lat: 51.5366, lng: -0.1058 }}>
        {markers}
      </GoogleMap>
    );
  })
);

export default Map;
