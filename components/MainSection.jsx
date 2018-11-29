import React from "react"
import Information from "./Information.jsx"
import MapPicture from "./Map.jsx"

const API_KEY = process.env.API_KEY;

class MainSection extends React.Component{

    state ={
        temperature: null,
        humidity: null,
        aPressure: null,
        weather: null,
    };

    getWeatherInfo = async (e) => {
        e.preventDefault();
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${this.props.lat}&lon=${this.props.lng}&appid=${API_KEY}`);
        const data = await api_call.json();
        console.log(data);
        this.setState({
            temperature: (data.main.temp - 273).toPrecision(3),
            humidity: data.main.humidity,
            aPressure: data.main.pressure,
            weather: data.weather[0].main
        })
    };

    render(){
        return <div className = "mainSection">
            <Information getWeatherInfo = {this.getWeatherInfo}
                         temperature = {this.state.temperature}
                         humidity = {this.state.humidity}
                         aPressure = {this.state.aPressure}
                         weather = {this.state.weather}
            />
            <MapPicture lat = {this.props.lat} lng = {this.props.lng}/>
        </div>
    }
}

export default MainSection