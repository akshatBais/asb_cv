import * as React from 'react';
import "../MainComponent/MainComponent.css"
import { Button } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import axios from 'axios';
import download from 'downloadjs';
import { withStyles } from "@material-ui/core/styles";
import InfoIcon from '@material-ui/icons/Info';

const styles = theme => ({
    root: {
        color: "red",
        border: "1px solid aqua",
        "&:hover" : {
            transform: "scale(1.1)",
            color : "#88F9FC"
        }
    },
    infoIcon: {
        float: "right",
        "&:hover": {
            cursor: "pointer",
            color: "aqua"
        }
    },
    outlinedPrimary: {
        color: "red"
    }
})

class MainComponent extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: 'AKSHAT',
            middleName: 'SINGH',
            lastName: 'BAIS',
            designation : 'Full Stack Developer',
            brief : 'Passionate about technology and building applications that help people experience everyday life more easier',
            loading: false,
            loadingLetter : false,
            isInfoModalOpen : false,
            anchor : null
        }
        this.downloadCv = this.downloadCv.bind(this);
        this.handleModal = this.handleModal.bind(this);
        this.downloadLetter = this.downloadLetter.bind(this);

    }

    /**
     * 
     */
    downloadLetter() {
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

    /**
     * Following method is called when a player clicks on download button.
     * It makes a call to an api and download the file in pdf format with the name provided in download method
     */
    downloadCv() {
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

    /**
     * Following method will open/close the modal/box 
     * which shows information about the website.
     */
    async handleModal(event) {
        debugger
        this.setState({isInfoModalOpen : !this.state.isInfoModalOpen , anchor : event.currentTarget});
    }

    render() {                                                                                                                                                                  
        const {classes} = this.props;

        return (
            <section id="#">
                <div className="parent-column">
                    <div className="main-component">
                        <div className="profile-summary">
                          
                            <div className="profile-picture-name-designation-section">
                                <div className="profile-picture-section">
                                    <img className="profile-picture" src={require("../../images/asb.jpg")} alt="" />
                                    <div className="download-cv">
                                        <div className="download-cv-item">
                                            {/* <img className="resume-picture" src={require("../../images/resume.png")} alt="" /> */}
                                            <Button style={{ minWidth : '110px'}} size="small" variant="outlined" color="primary" disabled={this.state.loading} onClick={this.downloadCv}>
                                                <GetAppIcon style={{fontSize : 'large'}}/>
                                                <div style={{fontSize : 'x-small'}}>{(this.state.loading) ? 'Downloading...' : ' Resume'}</div>
                                            </Button>
                                            
                                        </div>
                                        <div className="download-cv-item">
                                            <Button style={{ width : '150px'}} size="small" variant="outlined" color="primary" disabled={this.state.loadingLetter} onClick={this.downloadLetter}>
                                                <GetAppIcon style={{fontSize : 'large'}} />
                                                <div style={{fontSize : 'x-small'}}>{(this.state.loadingLetter) ? 'Downloading...' : ' Cover Letter'}</div>
                                            </Button>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="profile-name-designation-section">
                                    <div className="profile-name-section">
                                        <div className="profile-name-first">{this.state.name}</div>
                                        <div className="profile-name-middle">{this.state.middleName}</div>
                                        <div className="profile-name-last">{this.state.lastName}
                                        </div>
                                    <div>
                                </div>

                                    </div>
                                    <div className="profile-designation-section">
                                            {this.state.designation}
                                    </div>
                                    <div className="profile-brief-section">
                                        {this.state.brief}
                                    </div>

                                    <div className="download-cv-small">
                                        <div className='download-cv-item-sm'>
                                        <Button size="small" variant="outlined" color="primary" disabled={this.state.loading} onClick={this.downloadCv}>
                                            <GetAppIcon style={{fontSize : 'small'}}/>
                                            <div style={{fontSize : 'xx-small'}}>{(this.state.loading) ? 'Downloading...' : ' Download CV'}</div>
                                        </Button>
                                        </div>
                                        
                                        <div className='download-cv-item-sm'>
                                        <Button size="small" variant="outlined" color="primary" disabled={this.state.loading} onClick={this.downloadCv}>
                                            <GetAppIcon style={{fontSize : 'small'}}/>
                                            <div style={{fontSize : 'xx-small'}}>{(this.state.loading) ? 'Downloading...' : ' Cover Letter'}</div>
                                        </Button>
                                        </div>

                                    </div>
                                </div>
                              
                            </div>
                        </div>
                    </div>

                </div >
            </section>
        )
    }
}

export default withStyles(styles)(MainComponent);