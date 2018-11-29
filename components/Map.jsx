import React from "react"
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import Leaflet from 'leaflet/dist/leaflet.css'


class MapPicture extends React.Component{

    render(){
        const position = [this.props.lat, this.props.lng];
        return <Map className = "mapPicture"
                    center={position} zoom={10} >
            <TileLayer
                attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={position}> </Marker>
        </Map>

    }
}

export default MapPicture
