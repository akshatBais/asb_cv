import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import './ProjectsComponent.css';
import AllProjectsComponent from './AllProjectsComponent/AllProjectsComponent';
import FullStackProjectsComponent from './FullStackProjectsComponent/FullStackProjectsComponent';



const styles = theme => ({
    root: {
      textAlign: 'center'
    },
    flexContainer : {
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    indicator: {
        [theme.breakpoints.down('sm')]: {
            display: "none",
          }
    },
    rootTab : {
        color: "white",
        fontWeight : "bold",
        '&:hover' : {
            color: "grey",
            borderBottom: 'solid 1px red',
            [theme.breakpoints.down('sm')]: {
                '&:hover' : {
                    color: "white",
                    borderBottom: 'solid 1px red',
                }
              },
        },
        minWidth: "0px",
        marginRight: "20px"
    }
  })
class ProjectsComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tabValue: 0,
        }

        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(e,val) {
        console.log({e,val})
        this.setState({tabValue : val})
    }


    render() {
        // const classes = useStyles();
        const {classes} = this.props;
  
          
        return (
            <section id="projects">
                <div className="projects-section">
                    <div className="projects-summary">
                        <div className="projects-summary-tab">
                            <Tabs value={this.state.tabValue}  onChange={this.handleChange} 
                            classes={{root:classes.root, flexContainer:classes.flexContainer,
                                    indicator: classes.indicator}}  
                            aria-label="simple tabs">
                                <Tab classes={{root : classes.rootTab}} label="All"  />
                                <Tab classes={{root : classes.rootTab}} label="Full Stack" />
                                 <Tab classes={{root : classes.rootTab}} label="Others" />
                                {/* <Tab classes={{root : classes.rootTab}} label="" /> */}
                            </Tabs>
                        </div>
                        <div className="projects-summary-details">
                            
                            <AllProjectsComponent isHidden={this.state.tabValue} />
                            {/* <FullStackProjectsComponent isHidden={this.state.tabValue} /> */}
                        
                        </div>
                    </div>
                  </div>
            </section>
        )

    }


}

export default withStyles(styles)(ProjectsComponent);