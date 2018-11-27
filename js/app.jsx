import React from 'react'
import ReactDOM from 'react-dom'
import Header from "../components/Header.jsx"
import "./main.scss"
import MainSection from "../components/MainSection.jsx";
import Footer from "../components/Footer.jsx";

class App extends React.Component{
    render() {
        return(
        <div>
            <Header/>
            <MainSection/>
            <Footer/>
        </div>)

    }
}

document.addEventListener('DOMContentLoaded',function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    )
});