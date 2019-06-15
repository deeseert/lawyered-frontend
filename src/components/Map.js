import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import LawyerMarker from "./LawyerMarker";
import MyMarker from "./MyMarker";

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

    // const myMarker = props.geolocation.map((value, index) => (
    //   <MyMarker
    //     key={index}
    //     location={{ lat: value.latitude, lng: value.longitude }}
    //   />
    // ));

    return (
      <GoogleMap defaultZoom={11} center={{ lat: 51.5366, lng: -0.1058 }}>
        {markers}
        {/* {myMarker} */}
      </GoogleMap>
    );
  })
);

export default Map;
