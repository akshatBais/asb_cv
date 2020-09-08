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
      boxShadow: '0 1px 5px 2px #88F9FC',
      color: 'white',
      height: 48,
      padding: '0 30px'
    },
    flexContainer : {
        justifyContent: 'center'
    }
  })
class ProjectsComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isDialogVisible: false
        }
    }

    render() {
        // const classes = useStyles();
        const {classes} = this.props;
        return (
            <section id="projects">
                <div className="projects-section">
                    <div className="projects-summary">
                    {/* {{root:classes.root, flexContainer:classes.flexContainer}} */}
                    <Tabs value={3} classes={{root:classes.root, flexContainer:classes.flexContainer}}  aria-label="simple tabs">
                        <Tab label="Item One"  />
                        <Tab label="Item Two" />
                        <Tab label="Item Three" />
                    </Tabs>
                    </div>
                </div>
            </section>
        )

    }


}

export default withStyles(styles)(ProjectsComponent);