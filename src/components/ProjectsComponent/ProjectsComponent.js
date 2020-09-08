import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import './ProjectsComponent.css';


const styles = theme => ({
    root: {
    //   background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      textAlign: 'center',
      border: 0,
      borderRadius: 2,
      overFlow: 'inherit',
      color: 'white',
      marginBotton: "30px"
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
            color: "grey"
        },
        '&.click': {
            textDecoration : "underline"
        }
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
                                <Tab classes={{root : classes.rootTab}} disableRipple={true} label="All"  />
                                <Tab classes={{root : classes.rootTab}} label="Backend" />
                                <Tab classes={{root : classes.rootTab}} label="Angular/React" />
                                <Tab classes={{root : classes.rootTab}} label="Full Stack" />
                            </Tabs>
                        </div>
                        <div classNAme="projects-summary-details">
                           
                        </div>
               
                    </div>
                  </div>
            </section>
        )

    }


}

export default withStyles(styles)(ProjectsComponent);