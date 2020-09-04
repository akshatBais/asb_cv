import React from 'react';
import '../SkillsComponent/SkillsComponent.css';
// import node from '../../images/nodejs.png';
import imagesLoader from './skillsImages';
import SpeedIcon from '@material-ui/icons/Speed';
import GroupIcon from '@material-ui/icons/Group';
import AssessmentIcon from '@material-ui/icons/Assessment';
import SettingsInputComponentIcon from '@material-ui/icons/SettingsInputComponent';

const baseUrl = "./skills-images/";


// skillItems;
// function imagePathBuilder() {
//     var skillItems : [];
//     imagesLoader.forEach((image, index) => {
//         var imagePath = baseUrl + image;
//         skillItems.push(<li key={index}><img src={require(imagePath)} /></li>);
//         // return <li key={index}><img src={imagePath} /></li>;
//     })
//     return skillItems;
// }
class SkillsComponent extends React.Component {

    componentWillMount() {
    }

    componentDidMount() {
        console.log("Did mount");
    }

    componentWillUnmount() {
        console.log("About to unmount")
    }

    render() {
        return (
            <div id="skills" className="skills-component">
                <div className="skills-summary">
                        <div className="non-programming-skills">
                            <div><SettingsInputComponentIcon color="secondary"/></div>
                            <div><AssessmentIcon color="primary"/></div>
                            <div><GroupIcon /></div>
                            <div><SpeedIcon style={{ color: "green[500]" }}/></div>
                        </div>
                        <div className="programming-skills">
                            <div className="skills-title">Primary Skills</div>
                                <ul>
                                    <li><img className="skill-img" src={require(baseUrl + "angular.svg")} /></li>
                                    <li><img className="skill-img" src={require(baseUrl + "nodejs.png")} /></li>
                                    <li><img className="skill-img" src={require(baseUrl + "java.jpg")} /></li>
                                    <li><img className="skill-img" src={require(baseUrl + "js.svg")} /></li>
                                    <li><img className="skill-img" src={require(baseUrl + "docker.png")} /></li>
                                </ul>
                            <div className="skills-title">Secondary Skills</div>
                            <ul>
                                <li><img className="skill-img" src={require(baseUrl + "elk.png")} /></li>
                                <li><img className="skill-img" src={require(baseUrl + "react.png")} /></li>
                                <li>C++</li>
                            </ul>
                        </div>
                </div>
            </div>
        )
    }

}

export default SkillsComponent;