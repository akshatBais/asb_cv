import * as React from 'react';
import './Header.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


function Header() {
  const useStyles = makeStyles({
    root: {
      background: 'white',
      boxShadow: 'none'
    },
    toolBarProps: {
      justifyContent: 'center'
    }
  });
  const classes = useStyles();


  return (
    <AppBar position="sticky" classes={{ root: classes.root }}>
      <Toolbar classes={{ root: classes.toolBarProps }}>
        <ul id="navigation-menu">
          <li><a href="#">Home</a></li>
          <li><a href="#experience"> Work Experience</a></li>
          <li><a href="#projects"> Projects</a></li>
          <li><a href="#projects"> Contact</a></li>
        </ul>
      </Toolbar>
    </AppBar>
  );
}
export default Header;