import React from "react"

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
}

class Information extends React.Component{
    handleClick = () => {
        getLocation();
    };

    render(){
        if(this.props.humidity >= 40 && this.props.humidity <= 81){

        }
        if(this.props.temperature > -4){

        }
        if(this.props.weather === "Clear"){

        }
        if(this.props.aPressure >= 1000 && this.props.aPressure <= 1018){

        }
        return(
            <div  className = "weatherInformationBox">
                <div className = "weatherInformationHead">Informations</div>
                <div className = "weatherInformations">
                    <p>Weather: {this.props.weather}</p>
                    <div className = "result weather"> </div>
                    <p>Temperature: {this.props.temperature}</p>
                    <div className = "result temperature"> </div>
                    <p>Humidity: {this.props.humidity}</p>
                    <div className = "result humiditiy"> </div>
                    <p>Atmospheric Pressure: {this.props.aPressure}</p>
                    <div className = "result aPressure"> </div>
                    <button onClick = {this.handleClick} className = "weatherInfoBtn getCurrPos">get current position</button>
                    <button onClick = {this.props.getWeatherInfo} className = "weatherInfoBtn getInf">get informations</button>
                </div>
            </div>
        )
    }
}

export default Information