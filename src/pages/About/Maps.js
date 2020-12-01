import { Component } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class Maps extends Component {
    
    render(){

        const mapStyles = {
            width: '100%',
            height: '100%',
          };
        return(
            <Map
                google={this.props.google}
                zoom={16}
                style={mapStyles}
                initialCenter={{ lat: -7.1441249335995485, lng: 111.59201386831602}} 
            >
                <Marker position={{ lat: -7.1441249335995485, lng: 111.59201386831602}} />
            </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyDJ9lxiJXhR90Yw1n0LMin7f6ld22QkrYs')
  })(Maps)


