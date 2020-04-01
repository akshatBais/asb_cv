import * as React from 'react';
import { Toolbar, BottomNavigation, makeStyles, Theme, createStyles } from '@material-ui/core';
import './Footer.css';

function Footer() {

const useStyles = makeStyles(() => 
    createStyles({
        stickToBottom: {
            width: '100%',
            position: 'fixed',
            bottom: 0,
        }
    })
);
 const classes = useStyles();
return (

    <BottomNavigation className={classes.stickToBottom}>
        <Toolbar>
        <ul>
            <li><a href="https://github.com/akshatBais"><img className="profile-link-images" src={require("./images/gh.png")} alt=""></img></a></li>
            <li><a href="https://in.linkedin.com/in/akshat-bais-588976157"> <img className="profile-link-images" src={require("./images/li.webp")} alt=""></img></a></li>
            <li><a href="https://twitter.com/akshatsinghbais"><img className="profile-link-images" src={require("./images/t.webp")} alt=""></img></a></li>
          </ul>
        </Toolbar>
    </BottomNavigation>
    
);

}

export default Footer;