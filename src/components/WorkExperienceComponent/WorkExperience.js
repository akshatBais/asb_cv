import React from 'react';
import workExperience from './work-exp';
import './WorkExperience.css'
import {  Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

class WorkExperience extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            datDiff: [],
            seconds: 0,
            workExperience: {}
        }
    }

    componentWillMount() {
        this.setState({ workExperience: workExperience });
        this.dateAgo("2016-09-22");
    }

    dateAgo(date) {
        var startDate = new Date(date);
        var diffDate = new Date(new Date() - startDate);
        this.setState({ datDiff : [(diffDate.toISOString().slice(0, 4) - 1970) ,
            diffDate.getMonth() , (diffDate.getDate()-1) , (diffDate.getMinutes()) ]});
    }

    render() {
        console.log(this.state.workExperience);
        return (

            <section id="experience">
                <Divider />
                <div className="experience-start">
                    {/* <div className="experience-items-list">
                        <div className="experience-time-section">
                            <div className="experience-of">
                                Working Since
                            </div>
                            <div className="experience-time">
                                <div className="time-part">{this.state.datDiff[0]}</div>
                                <div className="time-period">Years</div>
                                <div className="time-part">{this.state.datDiff[1]}</div>
                                <div className="time-period">Months</div>
                                <div className="time-part">{this.state.datDiff[2]}</div>
                                <div className="time-period">Days</div>
                                <div className="time-part">{this.state.datDiff[3]}</div>
                                <div className="time-period">Minutes</div>
                            </div>
                        </div>
                        <div className="experience-org-section">
                            <div className="experience-items">
                                <div className="company-data"><div className="company-logo"> <img className="company-logo" src={require("./images/v18.webp")} alt="" /> </div><div className="company-name"><b><h3></h3></b></div></div>
                                <div><span><i >From : Jan, 2019 - To : Dec, 2019</i></span></div>
                            </div>

                            <div className="experience-items">
                            <div className="company-data"><div className="company-logo"><img className="company-logo" src={require("./images/tcs.svg.png")} alt="" /> </div><div className="company-name"><b><h3></h3></b></div></div>
                            <div><span><i>From September 2016 - To : Jan, 2019</i></span></div>
                        </div>
                      
                    </div>
                    </div> */}
                 </div>

            </section >
        )
    }
}

export default WorkExperience;