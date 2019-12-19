import * as React from 'react';
import './Header.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

// import HomeIcon from '@material-ui/icons/Home';
// const ScrollLink = Scroll.ScrollLink
// import MenuIcon from '@material-ui/icons/Menu';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Header() {
  const useStyles = makeStyles({
    root: {
      background: 'white',
      boxShadow: 'none'
    },
    toolBarProps : {
      justifyContent: 'center'
    },
    buttonProperties: {
      // backgroundColor : '#2e3192',
      color: 'black',
      textAlign: "right"
    }
  });
  const classes = useStyles();

  function downloadCv() {
    console.log("downloading cb")
  }

  return (
    <AppBar position="sticky" classes={{ root: classes.root }}>
      <Toolbar classes={{root: classes.toolBarProps}}>
        {/* <div className="menu-column-1"> */}
          <ul id="navigation-menu">
            <li><a href="#">Home</a></li>
            {/* <li><a href="#about"> Skills</a></li> */}
            <li><a href="#experience"> Work Experience</a></li>
            <li><a href="#projects"> Projects</a></li>
            <li><a href="#projects"> Contact</a></li>
          </ul>
        {/* </div> */}
     
      </Toolbar>
    </AppBar>
  );
}
export default Header;