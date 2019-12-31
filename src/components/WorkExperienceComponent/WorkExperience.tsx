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
                            <ul>
                                <li>Developed <b>Search Engine</b> using node and mongo capable of searching partial and full text</li>
                                <li>Enterprise Single Sign On : Authenticating Viacom18 users using ldap and passport on node.</li>
                                <li>Developed a generic pop-up module using Angular 7</li>
                            </ul>
                        {/* </div> */}
                    </div>

                    <div className="experience-items">
                        <div className="company-data"><div className="company-logo">Logo </div><div className="company-name"><b><h3>Tata Consultancy Services</h3></b></div></div>
                        <div><span><i>From September 2016 - To : Jan, 2019</i></span></div>
                        <ul>
                            <li>sddasdadadadasdjh khdkajdhaksjdh akdjhask jdhaskd sajdklajd lkdjlkasjd alskdjasl kdj
                            dkajdlkasjdlas kdjla asd laskjd asl </li>
                            <li>sddasdadadadasdjh khdkajdhaksjdh akdjhask jdhaskd sajdklajd lkdjlkasjd alskdjasl kdj
                            dkajdlkasjdlas kdjla asd laskjd asl </li>
                            <li>sddasdadadadasdjh khdkajdhaksjdh akdjhask jdhaskd sajdklajd lkdjlkasjd alskdjasl kdj
                            dkajdlkasjdlas kdjla asd laskjd asl </li>
                        </ul>
                    </div>
                </div>

            </section >
        )
    }
}

export default WorkExperience;