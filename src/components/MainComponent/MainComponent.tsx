import * as React from 'react';
import "../MainComponent/MainComponent.css"
import { Button } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import axios from 'axios';
import download from 'downloadjs';
// const baseUrl = "./skills-images/";

interface MainInterface {
    loading: boolean
}

class MainComponent extends React.Component<{}, MainInterface> {

    constructor(props: any) {
        super(props);
        this.state = {
            loading: false
        }
        this.downloadCv = this.downloadCv.bind(this);
    }


    downloadCv() {
        console.log("downloading cv");
        this.setState({ loading: true });
        axios("https://akshat-profile-node.herokuapp.com/download/akshatcv", {
            method: 'GET',
            responseType: 'blob'
        }).then((res: any) => {
            this.setState({ loading: false });
            const blob = new Blob([res.data], { type: "application/pdf" })
            download(blob, 'akshat_bais_cv.pdf');
            // const fileURL = URL.createObjectURL(blob);
            //Open the URL on new Window
            // window.open(fileURL);
        })
    }

    render() {
        return (
            <section id="#">
                <div className="parent-column">

                    <div className="main-component">
                        <div className="profile-summary">
                            <img className="profile-picture" src={require("../../images/asb.jpg")} alt="" />
                            <h3 className="body">Hey !!<br></br> This is Akshat Singh Bais</h3>
                            <h4 className="body"> &#60; Full Stack Engineer /></h4>
                            <div className="body">Technology Enthusiast.
                          Demonstrated hand-on with several technologies both on front-end and back-end side. Love coding, developing logics and algorithms.
                          Apart from development I enjoy reading books.You can scroll down to know more about me or download my CV.
                      </div>
                            <div className="download-cv">
                                <Button onClick={this.downloadCv}>
                                    <GetAppIcon />
                                    {(this.state.loading) ? 'Downloading...' : ' Download CV'}
                                </Button>
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
            </section>
        )
    }
}

export default MainComponent;