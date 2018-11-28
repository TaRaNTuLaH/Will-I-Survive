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
        const api_call = await fetch (`https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}`);
        const data = await api_call.json();
        console.log(data);
        this.setState({
            temperature: data.main.temp,
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
            <MapPicture/>
        </div>
    }
}

export default MainSection