import * as React from 'react';
import { Toolbar, BottomNavigation, makeStyles, Theme, createStyles } from '@material-ui/core';
import './Footer.css';
// import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import CopyrightIcon from '@material-ui/icons/Copyright';
import LanguageIcon from '@material-ui/icons/LanguageRounded'
import {footerStyles} from '../style/footer';

function Footer() {

const useStyles = makeStyles(() => footerStyles());
const classes = useStyles();
return (

    <BottomNavigation className={classes.stickToBottom}>
        <Toolbar classes={{ root: classes.toolBarProps }}>
        <ul className="footer-properties">
            <li className="footer-links"><CopyrightIcon classes={{root: classes.homeIcon }} viewBox="2 2 20 20" /><span>2020 akshatsinghbais</span></li>
            <li className="footer-links"><LanguageIcon classes={{root: classes.homeIcon }} viewBox="2 2 20 20" /><span>foodLife&Tech</span></li>
            <li className="footer-links-twitter"><a href="https://in.linkedin.com/in/akshat-bais-588976157"><TwitterIcon classes={{root : classes.homeIcon }} viewBox="2 2 20 20"/></a></li>
          </ul>
        </Toolbar>
    </BottomNavigation>
    
);

}

export default Footer;