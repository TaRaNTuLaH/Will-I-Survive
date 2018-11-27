import React from "react"
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import Leaflet from 'leaflet/dist/leaflet.css'

class MapPicture extends React.Component{
    state = {
        lat: 51.1107811,
        lng: 17.016858,
        zoom: 10,
    };

    render(){
        const position = [this.state.lat, this.state.lng];
        return <Map className = "mapPicture"
                    center={position} zoom={this.state.zoom} >
            <TileLayer
                attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </Map>
    }
}

export default MapPicture
