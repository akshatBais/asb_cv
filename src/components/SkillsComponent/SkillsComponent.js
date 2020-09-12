import React from 'react';
import '../SkillsComponent/SkillsComponent.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
    linearBar: {
        height: "5px",
        width: "100%"
    },
    secondaryHeading: {
        color: "white",
        width: "100%"
    },
    accordian: {
        backgroundColor: "#151A1D"
    },
    expandIcon: {
        padding: "0px",
        color: "white",

    }
});

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

    constructor(props) {
        super(props);
        this.state = {
            isExpanded: 0,
            primarySkills: [
                {
                    skill: "nodejs",
                    proficiency : 80,
                    description: "3.5 years of experience in building enterprise and various applications using nodejs",
                    imagePath: require(baseUrl + "nodejs.png")
                },
                {
                    skill: "Java",
                    proficiency : 70,
                    description: "Started my journey with java , still continuing java for KhelPlay Rummy gaming app",
                    imagePath: require(baseUrl + "java.png")
                },
                {
                    skill: "Angular",
                    proficiency : 75,
                    description: "Version 7,8 and 9. Have built enterprise applications and worked on multiple projects for personal clients",
                    imagePath: require(baseUrl + "angular.svg")
                },
                {
                    skill: "Javascript",
                    proficiency : 80,
                    description: "I am biased towards it and is my first love in programming.",
                    imagePath: require(baseUrl + "js.svg")
                },
                {
                    skill: "docker",
                    proficiency : 65,
                    description: "Dealt with making docker images, deploying applications in containers ",
                    imagePath: require(baseUrl + "docker.png")
                }
                
            
                ]
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (panel) => (event, isExpanded) => {
        // console.log(panel)
        this.setState({isExpanded : isExpanded ? panel : false})
    };
 
    render() {
        const {classes} = this.props;

        return (
            <div id="skills" className="skills-component">
                <div className="skills-summary">
                        <div className="programming-skills">
                            <div className="primary-skills">
                                <div className="skills-title">Primary Skills</div>
                                    <ul>
                                    {this.state.primarySkills.map((value,index) => {
                                        return  <Accordion classes={{root : classes.accordian}} expanded={this.state.isExpanded === index} onChange={this.handleChange(index)}>
                                        <AccordionSummary expandIcon={<ExpandMoreIcon />} classes={{ expandIcon:classes.expandIcon}} >
                                        <Typography >
                                            <div className="ps-name-image">
                                                <img className="skill-img" src={value.imagePath} />
                                            </div></Typography>
                                        <Typography className={classes.secondaryHeading}> 
                                            <div className="ps-name-progress">
                                                <LinearProgress classes={{root:classes.linearBar}}
                                                variant="determinate" value={value.proficiency}  />
                                            </div>
                                        </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                        <Typography>
                                            {value.skill} : {value.description}
                                        </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    })}
                                   
                                        {/* <li className="ps-name">
                                            <div className="ps-name-image">
                                                <img className="skill-img" src={require(baseUrl + "nodejs.png")} />
                                            </div>
                                            <div className="ps-name-progress">
                                                <LinearProgress classes={{root:classes.linearBar}} 
                                                variant="determinate" value={80}  />
                                            </div>
                                        </li> */}
                                        {/* <li className="ps-name">
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
                                        </li> */}
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
                                    <p>Firebase</p>
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



export default withStyles(styles)(SkillsComponent);