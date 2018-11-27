import React from "react"

class Footer extends React.Component{
    render(){
        return <div className = "footer">
                <div className = "footerText">
                    <p>&copy; 2018 Dawid Czarnecki</p>
                </div>
                <div className = "footerSocials">
                    <ul>
                        <li><a href={"https://www.linkedin.com/in/dawidczarnecki/"}>
                            <i className="fab fa-linkedin"></i></a></li>
                        <li><a href={"https://github.com/TaRaNTuLaH"}>
                            <i className="fab fa-github-square"></i></a></li>
                    </ul>
                </div>
        </div>
    }
}
export default Footer