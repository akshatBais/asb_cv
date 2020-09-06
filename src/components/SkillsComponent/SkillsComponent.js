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
const styles = {

  circularProgress : {
      size : "400"
  }
};
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
          <Typography variant="caption" component="div" color="white">{`${Math.round(
            props.value,
          )}%`}</Typography>
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
        const {classes} = this.props;

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
                                                <LinearProgress variant="static" value={25}  />
                                            </div>
                                        </li>
                                        <li className="ps-name">
                                        <div className="ps-name-image">
                                                <img className="skill-img" src={require(baseUrl + "java.png")} />
                                            </div>
                                            <div className="ps-name-progress">
                                                <LinearProgress variant="static" value={25}  />
                                            </div>
                                        </li>
                                        <li className="ps-name">
                                        <div className="ps-name-image">
                                                <img className="skill-img" src={require(baseUrl + "angular.svg")} />
                                            </div>
                                            <div className="ps-name-progress">
                                                <LinearProgress variant="static" value={5} />
                                            </div>
                                        </li>
                                        <li className="ps-name">
                                        <div className="ps-name-image">
                                                <img className="skill-img" src={require(baseUrl + "js.svg")} />
                                            </div>
                                            <div className="ps-name-progress">
                                                <LinearProgress variant="static" value={25} />
                                            </div>
                                        </li>
                                        <li className="ps-name">
                                        <div className="ps-name-image">
                                                <img className="skill-img" src={require(baseUrl + "docker.png")} />
                                            </div>
                                            <div className="ps-name-progress">
                                                <LinearProgress variant="static" value={25}  />
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
                                    {/* <h2>React</h2> */}
                                    <CircularProgressWithLabel  value={60} />
                                    <p>React</p>
                                </div>
                                
                                <div class="is-name">
                                    {/* <h2>Mongo DB</h2> */}
                                    <CircularProgressWithLabel value={70} />
                                    <p>Mongo DB</p>

                                </div>
                                
                                <div class="is-name" >
                                    {/* <h2>is-name 3</h2> */}
                                    <CircularProgressWithLabel value={70} />
                                    <p>MySql</p>

                                </div>
                                
                                <div class="is-name">
                                    {/* <h2>Firebase DB</h2> */}
                                    <CircularProgressWithLabel value={40} />
                                    <p>Application Servers</p>
                                </div>
                            </div>
                            {/* <div className="is-section">
                                <div className="is-name"><CircularProgressWithLabel value={25}/></div>
                                <div className="is-name"><CircularProgress /></div>
                                <div className="is-name"><CircularProgress /></div>
                                <div className="is-name"><CircularProgress /></div>
                                <div className="is-name"><CircularProgress /></div>
                            </div> */}
                          </div>
                </div>
            </div>
        )
    }

}

SkillsComponent.prototypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SkillsComponent);