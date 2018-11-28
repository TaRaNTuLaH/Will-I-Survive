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
            console.log("test");
        }
        if(this.props.temperature > 0){
            console.log("more than 0");
        }
        if(this.props.weather === "Drizzle"){
            console.log("okay");
        }
        if(this.props.aPressure >= 1000 && this.props.aPressure <= 1018){
            console.log("ALRIGHT");
        }
        return(
            <div  className = "weatherInformationBox">
                <div className = "weatherInformationHead">Informations</div>
                <div className = "weatherInformations">
                    <p>Weather: {this.props.weather}</p>
                    <p>Temperature: {this.props.temperature}</p>
                    <p>Humidity: {this.props.humidity}</p>
                    <p>Atmospheric Pressure: {this.props.aPressure}</p>
                    <button onClick = {this.handleClick} className = "weatherInfoBtn getCurrPos">get current position</button>
                    <button onClick = {this.props.getWeatherInfo} className = "weatherInfoBtn getInf">get informations</button>
                </div>
            </div>
        )
    }
}

export default Information