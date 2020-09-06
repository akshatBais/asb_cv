import React from 'react';
import '../SkillsComponent/SkillsComponent.css';
import PropTypes from 'prop-types';
import imagesLoader from './skillsImages';
import SpeedIcon from '@material-ui/icons/Speed';
import GroupIcon from '@material-ui/icons/Group';
import AssessmentIcon from '@material-ui/icons/Assessment';
import SettingsInputComponentIcon from '@material-ui/icons/SettingsInputComponent';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const baseUrl = "./skills-images/";
const imageMap = {
    60 : 'react.png',
    70: 'mongo.png',
    68:'mysql.png',
    62:'firebase.png'
}
function CircularProgressWithLabel(props) {
    return (
      <Box position="relative" display="inline-flex">
        <CircularProgress variant="static" {...props} />
        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
            <div>
            <img className="skill-img" src={require(`./skills-images/${imageMap[props.value]}`)} />
            </div>
            <div>
            
            </div>
            <br></br>
         
        </Box>
      </Box>
    );
  }
  
  CircularProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate and static variants.
     * Value between 0 and 100.
     */
    value: PropTypes.number.isRequired,
  };
class SkillsComponent extends React.Component {
    componentWillMount() {
    }

    componentDidMount() {
        // console.log("Did mount");
    }

    componentWillUnmount() {
        // console.log("About to unmount")
    }

    render() {
        // const {classes} = this.props;

        return (
            <div id="skills" className="skills-component">
                <div className="skills-summary">
                        <div className="programming-skills">
                            <div className="primary-skills">
                                <div className="skills-title">Primary Skills</div>
                                    <ul>
                                        <li className="ps-name">
                                            <div className="ps-name-image">
                                                <img className="skill-img" src={require(baseUrl + "nodejs.png")} />
                                            </div>
                                            <div className="ps-name-progress">
                                                <LinearProgress variant="determinate" value={80}  />
                                            </div>
                                        </li>
                                        <li className="ps-name">
                                            <div className="ps-name-image">
                                                <img className="skill-img" src={require(baseUrl + "java.png")} />
                                            </div>
                                            <div className="ps-name-progress">
                                                <LinearProgress variant="determinate" value={65}  />
                                            </div>
                                        </li>
                                        <li className="ps-name">
                                        <div className="ps-name-image">
                                                <img className="skill-img" src={require(baseUrl + "angular.svg")} />
                                            </div>
                                            <div className="ps-name-progress">
                                                <LinearProgress variant="determinate" value={70} />
                                            </div>
                                        </li>
                                        <li className="ps-name">
                                        <div className="ps-name-image">
                                                <img className="skill-img" src={require(baseUrl + "js.svg")} />
                                            </div>
                                            <div className="ps-name-progress">
                                                <LinearProgress variant="determinate" value={85} />
                                            </div>
                                        </li>
                                        <li className="ps-name">
                                        <div className="ps-name-image">
                                                <img className="skill-img" src={require(baseUrl + "docker.png")} />
                                            </div>
                                            <div className="ps-name-progress">
                                                <LinearProgress variant="determinate" value={65}  />
                                            </div>
                                        </li>
                                    </ul>
                            </div>
                            <div className="secondary-skills">
                                <div className="skills-title">Secondary Skills</div>
                                <ul className="ss-list-ul">
                                    <li className="ss-name"><img className="skill-img" src={require(baseUrl + "elk.png")} /></li>
                                    <li className="ss-name"><img className="skill-img" src={require(baseUrl + "react.png")} /></li>
                                </ul>
                            </div>
                       
                        </div>
                        <div className="intermediate-skills">
                            <div className="skills-title">Other Skills</div>
                            <div className="is-section">
                                <div class="is-name">
                                    <p>React</p>
                                    <CircularProgressWithLabel  value={60} />
                                    <p>60%</p>
                                </div>
                                
                                <div class="is-name">
                                    <p>Mongo DB</p>
                                    <CircularProgressWithLabel value={70} />
                                    <p>70%</p>

                                </div>
                                
                                <div class="is-name" >
                                    <p>MySql</p>
                                    <CircularProgressWithLabel value={68} />
                                    <p>71%</p>

                                </div>
                                
                                <div class="is-name">
                                    <p>Google Firebase</p>
                                    <CircularProgressWithLabel value={62} />
                                    <p>62%</p>
                                </div>
                            </div>
                          </div>
                </div>
            </div>
        )
    }

}



export default SkillsComponent;