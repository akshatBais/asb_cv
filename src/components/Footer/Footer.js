import * as React from 'react';
import { Toolbar, BottomNavigation, makeStyles, Theme, createStyles } from '@material-ui/core';
import './Footer.css';
// import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import CopyrightIcon from '@material-ui/icons/Copyright';

function Footer() {

const useStyles = makeStyles(() => 
    createStyles({
        stickToBottom: {
            background: '#24292E',
            width: '100%',
            position: 'fixed',
            bottom: 0,
            // height: "30px"
        },
        homeIcon : {
            color: "#88F9FC",
            margin : "0 10px",
            transform : "scale(1.1)",
            fontSize : "large",
            '&:hover': {
              transform : "scale(2.2)"
            }
          },
          toolBarProps: {
            minHeight: '40px',
            justifyContent : "space-between"
          },
    })
);
 const classes = useStyles();
return (

    <BottomNavigation className={classes.stickToBottom}>
        <Toolbar classes={{ root: classes.toolBarProps }}>
        <ul className="footer-properties">
            <li className="footer-links"><CopyrightIcon classes={{root: classes.homeIcon }} /><span>Akshat Singh Bais</span></li>
            <li className="footer-links-twitter"><a href="https://in.linkedin.com/in/akshat-bais-588976157"><TwitterIcon classes={{root : classes.homeIcon }} /></a></li>
          </ul>
        </Toolbar>
    </BottomNavigation>
    
);

}

export default Footer;