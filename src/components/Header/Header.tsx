import * as React from 'react';
import './Header.css';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


function Header() {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        background: 'white',
        boxShadow: 'none'
      },
      toolBarProps: {
        justifyContent: 'center'
      },
      sectionDesktop: {
        display: 'none',
        justifyContent : 'center',
        [theme.breakpoints.up('md')]: {
          display: 'flex',
        }
      },
      sectionMobile: {
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.up('md')]: {
          display: 'flex',
        },
      }
    })
  );
  const classes = useStyles();



  return (
    <AppBar position="sticky" classes={{ root: classes.root }}>
      <div className={classes.sectionDesktop} >
        <Toolbar classes={{ root: classes.toolBarProps }}>
          <ul id="navigation-menu">
            <li><a href="#">Home</a></li>
            <li><a href="#experience"> Work Experience</a></li>
            <li><a href="#projects"> Projects</a></li>
            <li><a href="#projects"> Contact</a></li>
          </ul>
        </Toolbar>
      </div>
      <div className={classes.sectionMobile}>
        <Toolbar>
          sdfskdfsdfdsfdsfadddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        </Toolbar>
      </div>

    </AppBar>
  );
}
export default Header;