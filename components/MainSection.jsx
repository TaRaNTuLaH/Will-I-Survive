import React from "react"
import Information from "./Information.jsx"
import MapPicture from "./Map.jsx"

class MainSection extends React.Component{
    render(){
        return <div className = "mainSection">
            <Information/>
            <MapPicture/>
        </div>
    }
}

export default MainSection