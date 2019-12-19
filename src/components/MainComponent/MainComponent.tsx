import * as React from 'react';
import "../MainComponent/MainComponent.css"
import { Button } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import axios from 'axios';
import download from 'downloadjs';
const baseUrl = "./skills-images/";

class MainComponent extends React.Component {

    componentWillMount() {
        
    }

    downloadCv() {
        console.log("downloading cv");
        axios.get("http://localhost:8000/download/akshatcv").then((res: any) => {
            const blob = new Blob([res.body])
            download(blob, 'akshat_bais_cv.pdf');
        })
    }

    render() {
        return (
            <div className="parent-column">
                {/* <div className="column1">
                    Primary Skills
                    <ul>
                        <li>
                            <img src={require(baseUrl + "angular.svg")} />
                        </li>
                        <li><img src={require(baseUrl + "nodejs.png")} /></li>
                        <li><img src={require(baseUrl + "java.jpg")} /></li>
                        <li><img src={require(baseUrl + "js.svg")} /></li>
                        <li><img src={require(baseUrl + "docker.png")} /></li>
                    </ul>
                </div> */}
                <div id="#" className="main-component">
                    <div className="profile-summary">
                        <img className="profile-picture" src={require("../../images/asb.jpg")} alt="" />
                        <h3 className="body">Hey !!<br></br> This is Akshat Singh Bais</h3>
                        <h4 className="body"> &#60; Full Stack Engineer /></h4>
                        <div className="body">Technology Enthusiast.
                      Demonstrated hand-on with several technologies both on front-end and back-end side. Love coding, developing logics and algorithms.
                      Apart from development I enjoy reading book.You can scroll down to know more about me or download my CV.
                      </div>
                        <div className="download-cv">
                            <Button onClick={this.downloadCv}><GetAppIcon /> Download CV</Button>
                        </div>
                    </div>
                </div>

                {/* <div className="column2">
                    asdasd
                </div> */}
                {/* <div className="column3">
                    Secondary Skils
                    <ul>
                        <li><img src={require(baseUrl + "react.png")} /></li>
                    </ul>
                </div> */}

            </div >
        )
    }
}

export default MainComponent;