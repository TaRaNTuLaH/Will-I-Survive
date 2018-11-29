import React from 'react'
import ReactDOM from 'react-dom'
import Header from "../components/Header.jsx"
import "./main.scss"
import MainSection from "../components/MainSection.jsx"
import Footer from "../components/Footer.jsx"
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import Leaflet from 'leaflet/dist/leaflet.css'
import "babel-polyfill"



class App extends React.Component{

    constructor() {
        super();

        this.state = {
            latitude: '',
            longitude: '',
        };

        this.getMyLocation = this.getMyLocation.bind(this)
    }
    componentDidMount() {
        this.getMyLocation()
    }

    getMyLocation() {
        const location = window.navigator && window.navigator.geolocation;

        if (location) {
            location.getCurrentPosition((position) => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                })
            }, (error) => {
                this.setState({ latitude: 'err-latitude', longitude: 'err-longitude' })
            })
        }

    }

    render() {
        const { latitude, longitude } = this.state;
        return(
        <div>
            <Header/>
            <MainSection lat = {latitude} lng ={longitude}/>
            <Footer />
        </div>)

    }
}

document.addEventListener('DOMContentLoaded',function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    )
});