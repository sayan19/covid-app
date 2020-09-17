import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,  // Hides or shows the InfoWindow
    activeMarker: {},          // Shows the active marker upon click
    selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
  };
  
  onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });

onClose = props => {
  if (this.state.showingInfoWindow) {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
    });
  }
};
render() {
  let markers = [ // Just an example this should probably be in your state or props. 
    {
      name: "Agganis Arena Lobby",
      position: { lat: 42.3521945, lng: -71.1198853 }
    },
    {
      name: "808 Gallery",
      position: { lat: 42.3500037, lng: -71.1138761 }
    },
    {
      name: "Rajen Kilachand Center for Integrated Life Sciences & Engineering",
      position: { lat: 42.3490862, lng: -71.1036838 }
    },
    {
      name: "BU Medical Campus, Room R107",
      position: { lat: 42.3364013, lng: -71.0745967 }
    }
  ];
  return (
    <Map
    google={this.props.google}
    zoom={14}
    style={mapStyles}
    initialCenter={{ lat: 42.3495073, lng: -71.1070262 }}
  >
    {markers.map((marker, index) => (
      <Marker
        key={index} // Need to be unique
        onClick={this.onMarkerClick}
        name={marker.name}
        position={marker.position}
      />
    ))}
    <InfoWindow
      marker={this.state.activeMarker}
      visible={this.state.showingInfoWindow}
      onClose={this.onClose}
    >
      <div>
        <h4>{this.state.selectedPlace.name}</h4>
      </div>
    </InfoWindow>
  </Map>
  );
}
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyASGFDRR6Pmvn1vaS_ZVFZHmIH0r0np_BM'
})(MapContainer);