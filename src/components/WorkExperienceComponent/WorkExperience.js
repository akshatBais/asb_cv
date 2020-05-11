import React from 'react';
import workExperience from './work-exp';
import './WorkExperience.css'
import {  Divider } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';

class WorkExperience extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            workExperience: {}
        }
    }

    componentWillMount() {
        this.setState({ workExperience: workExperience });
    }

    render() {

        console.log(this.state.workExperience);
        return (

            <section id="experience" className="experience">
                <Divider />
                <div className="experience-start">
                    <div className="experience-items">
                        <div className="company-data"><div className="company-logo"> <img className="company-logo" src={require("./images/v18.webp")} alt="" /> </div><div className="company-name"><b><h3></h3></b></div></div>
                        <div><span><i >From : Jan, 2019 - To : Dec, 2019</i></span></div>
                        <br></br>
                        <div>
                            <ul>
                                <li className="list-items"><strong><u>Project : Enterprise Single Sign on :</u></strong></li>
                                <div>
                                    <li className="list-items">A generic Enterprise SSO for all Viacom18 applications. Authenticating users using <strong>Passport with LDAP</strong>
                                        and securing/authorizing the APIs using <strong>JWT</strong> tokens</li>
                                </div>
                                <div>
                                    <li className="list-items"><b><u>Project : Search Engine + Filter section : </u></b> using <strong>node, mongo and Angular </strong>
                                        capable of searching partial and full text</li>
                                </div>
                                
                                <li className="list-items"><strong><u>Project : Setting up ELK stack</u></strong> : Deploying elasticsearch , logstash and kibana via docker containers and communicating using ssl and displaying application
                                 logs attaching docker volumes for better visibility of development logs for developers. Also creating data visualization dashboards for monitoring maximum searched keyword and other user activities</li>
                                <li className="list-items">Developed a generic <strong>pop-up module</strong> using Angular 7. Used for showing Success, Warning and Error messages</li>
                            </ul>
                        </div>

                        {/* </div> */}
                    </div>

                    <div className="experience-items">
                        <div className="company-data"><div className="company-logo"><img className="company-logo" src={require("./images/tcs.svg.png")} alt="" /> </div><div className="company-name"><b><h3></h3></b></div></div>
                        <div><span><i>From September 2016 - To : Jan, 2019</i></span></div>
                        <br></br>
                        <ul>
                            <li className="list-items">Responsible for building a <strong>monitoring engine</strong> for Lending Domain</li>
                            <li className="list-items">Making <strong>REST Services, controllers</strong> and process components for business logics using <strong> Java , Spring</strong></li>
                            <br></br>
                            <li className="list-items"><strong><u>Global Error Handler and Logs for Audit Purpose</u></strong></li>
                            <li className="list-items">As a part of this component, made directives in Angular which can be used in any application for logging
                                user actions.
                            </li>
                            <br></br>
                            <li className="list-items">Designing the database, writing queries and triggers using SQL/PLSQL. Writing <strong>Junit Test cases</strong>.
                            Build using Jenkins and using fortify for detecting security patches</li>
                            <div>
                            <li className="list-items">Served as <strong>Junior Business Analyst</strong> in Netherlands</li>

                            </div>
                        </ul>
                    </div>
                </div>

            </section >
        )
    }
}

export default WorkExperience;