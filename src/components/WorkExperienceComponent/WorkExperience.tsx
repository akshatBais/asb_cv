import React from 'react';
import workExperience from './work-exp';
import './WorkExperience.css'
import { CircularProgress, Box, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

interface WorkExperienceInterface {
    workExperience: Object
}


class WorkExperience extends React.Component<{}, WorkExperienceInterface> {

    constructor(props: any) {
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
                        <div className="company-data"><div className="company-logo">Logo </div><div className="company-name"><b><h3>Viacom18</h3></b></div></div>
                        <div><span><i>From : Jan, 2019 - To : Dec, 2019</i></span></div>
                        <br></br>
                        <div>
                            <ul>
                                <li><strong><u>Project : Enterprise Single Sign on :</u></strong></li>
                                <div>
                                    <li>A generic Enterprise SSO for all Viacom18 applications. Authenticating users using <strong>Passport with LDAP</strong>
                                        and securing/authorizing the APIs using <strong>JWT</strong> tokens</li>
                                </div>
                                <div>
                                    <li>Developed <b><u>Search Engine + Filter section</u></b> using <strong>node, mongo and Angular </strong>
                                        capable of searching partial and full text</li>
                                </div>
                                <br></br>
                                <li><strong>Enterprise Single Sign On</strong> : Authenticating Viacom18 users using ldap and passport on node.</li>
                                <li>Developed a generic <strong>pop-up module</strong> using Angular 7</li>
                            </ul>
                        </div>

                        {/* </div> */}
                    </div>

                    <div className="experience-items">
                        <div className="company-data"><div className="company-logo">Logo </div><div className="company-name"><b><h3>Tata Consultancy Services</h3></b></div></div>
                        <div><span><i>From September 2016 - To : Jan, 2019</i></span></div>
                        <br></br>
                        <ul>
                            <li>Responsible for building a <strong>monitoring engine</strong> for Lending Domain</li>
                            <li>Making <strong>REST Services, controllers</strong> and process components for business logics using <strong> Java , Spring</strong></li>
                            <br></br>
                            <li><strong><u>Global Error Handler and Logs for Audit Purpose</u></strong></li>
                            <li>As a part of this component, made directives in Angular which can be used in any application for logging
                                user actions.
                            </li>
                            <br></br>
                            <li>Designing the database, writing queries and triggers using SQL/PLSQL. Writing <strong>Junit Test cases</strong>.
                            Build using Jenkins and using fortify for detecting security patches</li>
                            <br></br>
                            <li>Served as Junior Business Analyst in Netherlands</li>
                        </ul>
                    </div>
                </div>

            </section >
        )
    }
}

export default WorkExperience;