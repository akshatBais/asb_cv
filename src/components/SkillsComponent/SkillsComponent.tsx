import React from 'react';
import '../SkillsComponent/SkillsComponent.css';
// import node from '../../images/nodejs.png';
import imagesLoader from './skillsImages';
const baseUrl = "./skills-images/";
// skillItems;
function imagePathBuilder() {
    var skillItems: any = [];
    imagesLoader.forEach((image, index) => {
        var imagePath = baseUrl + image;
        skillItems.push(<li key={index}><img src={require(imagePath)} /></li>);
        // return <li key={index}><img src={imagePath} /></li>;
    })
    return skillItems;
}
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
                    {/* <br></br> */}
                    <h2>Primary Skills</h2>
                    <ul>
                        <li>
                        {/* {imagePathBuilder()} */}
                            {/* <div style={{width:"image width px",fontSize:"80%" , textAlign:"center"}}> */}
                            <img className="skill-img" src={require(baseUrl + "angular.svg")} />
                            {/* angular */}
                            {/* </div> */}
                        </li>
                        <li><img className="skill-img" src={require(baseUrl + "nodejs.png")} /></li>
                        <li><img className="skill-img" src={require(baseUrl + "java.jpg")} /></li>
                        <li><img className="skill-img" src={require(baseUrl + "js.svg")} /></li>
                        <li><img className="skill-img" src={require(baseUrl + "docker.png")} /></li>
                    </ul>
                    <h2>Secondary Skills</h2>
                    <ul>
                        <li><img className="skill-img" src={require(baseUrl + "elk.png")} /></li>
                        <li><img className="skill-img" src={require(baseUrl + "react.png")} /></li>
                        <li>C++</li>
                    </ul>
                </div>
            </div>
        )
    }

}

export default SkillsComponent;