// import React, { Component } from "react";
// import GoogleMapReact from "google-map-react";
// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// class MapContainer extends Component {
//   static defaultProps = {
//     center: { lat: 40.744679, lng: -73.948542 },
//     zoom: 11
//   };
//   render() {
//     return (
//       <div>
//         <div className="google-map">
//           <GoogleMapReact
//             defaultCenter={this.props.center}
//             defaultZoom={this.props.zoom}
//           >
//             <AnyReactComponent
//               lat={40.747331}
//               lng={-73.851744}
//               text={"Where's Waldo?"}
//             />
//           </GoogleMapReact>
//         </div>
//         <div>
//           <h1>Hi I'm from the map container</h1>
//         </div>
//       </div>
//     );
//   }
// }

// export default MapContainer;

import React from "react";
import Map from "./Map";

const mapContainer = props => {
  return (
    <Map
      // geolocation={props.geolocation}
      lawyers={props.lawyers}
      googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCqJW5IyRXAkcV37nYVYK3t80iKTgPtPXg&v=3.exp&libraries=geometry,drawing,places`}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `100%`, width: `100%` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  );
};

export default mapContainer;
