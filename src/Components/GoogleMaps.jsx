import React, { Component } from 'react';

import {Map, InfoWindow, Marker, GoogleApiWrapper, MapContainer} from 'google-maps-react';

class GoogleMaps extends Component  {
  constructor(props) {
		super(props);
		this.state = {
     
    };
  }

 

  render(){
    return (     
      <>       
        <Map google={this.props.google} zoom={14}>
 
 <Marker onClick={this.onMarkerClick}
         name={'Current location'} />

 <InfoWindow onClose={this.onInfoWindowClose}>
 </InfoWindow>
</Map>
    </>
  );
}}

export default GoogleApiWrapper({
    apiKey: (AIzaSyBxojuoZE66FRHOPBhoIzZCnjzM2iqZz0Q)
  })(MapContainer)
