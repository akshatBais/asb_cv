import * as React from 'react';
import "../MainComponent/MainComponent.css"
import { Button } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import axios from 'axios';
import download from 'downloadjs';
import Grid from '@material-ui/core/Grid';
import { withStyles } from "@material-ui/core/styles";
import InfoIcon from '@material-ui/icons/Info';

class MainComponent extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: 'AKSHAT',
            middleName: 'SINGH',
            lastName: 'BAIS',
            designation : 'Full Stack Developer',
            brief : 'Passionate about technology and building applications that help people experience everyday life more easier',
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
        }).then((res) => {
            this.setState({ loading: false });
            const blob = new Blob([res.data], { type: "application/pdf" })
            download(blob, 'akshat_bais_cv.pdf');
        }).catch(err => {
            this.setState({ loading: false });
            console.log("Error Occurred while downloafing")
        }).finally(() => {
            this.setState({ loading: false });

        })
    }

    render() {
        return (
            <section id="#">
                <div className="parent-column">
                    <div className="main-component">
                        <div className="profile-summary">
                          
                            <div className="profile-picture-name-designation-section">
                                <div className="profile-picture-section">
                                    <img className="profile-picture" src={require("../../images/asb.jpg")} alt="" />
                                    <div className="download-cv">
                                        <Button size="small" variant="outlined" color="primary" disabled={this.state.loading} onClick={this.downloadCv}>
                                            <GetAppIcon />
                                            {(this.state.loading) ? 'Downloading...' : ' Download CV'}
                                        </Button>
                                    </div>
                                </div>
                                <div className="profile-name-designation-section">
                                    <div className="profile-name-section">
                                        <div className="profile-name-first">{this.state.name}</div>
                                        <div className="profile-name-middle">{this.state.middleName}</div>
                                        <div className="profile-name-last">{this.state.lastName}</div>
                                        {/* <a className="profile-aboout-me" href="#experience"><InfoIcon  /></a> */}

                                    </div>
                                    <div className="profile-designation-section">
                                            {this.state.designation}
                                    </div>
                                    <div className="profile-brief-section">
                                        {this.state.brief}
                                    </div>
                                    <div className="download-cv-small">
                                        <Button size="small" variant="outlined" color="primary" disabled={this.state.loading} onClick={this.downloadCv}>
                                            <GetAppIcon />
                                            {(this.state.loading) ? 'Downloading...' : ' Download CV'}
                                        </Button>
                                    </div>
                                </div>
                              
                            </div>
                            
                            {/* <div className="body">Technology Enthusiast....
                          Demonstrated hand-on with several technologies both on front-end and back-end side. Love coding, developing logics and algorithms.
                          Apart from development I enjoy reading books.You can scroll down to know more about me or download my CV.
                      </div> */}
                            
                        </div>
                    </div>

                </div >
            </section>
        )
    }
}

export default MainComponent;