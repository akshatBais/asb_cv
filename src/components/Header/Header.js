import * as React from 'react';
import './Header.css';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { IconButton, Typography, Drawer, ListItem, List, Divider } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

function Header() {
  const drawerWidth = 240;
  const [open, setOpen] = React.useState(false);
  const useStyles = makeStyles((theme) =>
    createStyles({
      root: {
        background: 'white',
        boxShadow: 'none',
        [theme.breakpoints.down('sm')]: {
          height: '5vh',
        },
      },
      toolBarProps: {
        minHeight: '50px',
        justifyContent: 'center'
      },
      sectionDesktop: {
        display: 'none',
        justifyContent: 'center',
        [theme.breakpoints.up('sm')]: {
          display: 'flex',
        }
      },
      sectionMobile: {
        color: 'black',
        height: '50px',
        [theme.breakpoints.down('sm')]: {
          display: 'flex',
        },
        [theme.breakpoints.up('sm')]: {
          display: 'none',
        }
      },
      menuButtonProps: {
        // minHeight: '50px',
        color: 'blue'
      },
      drawer: {
        [theme.breakpoints.up('sm')]: {
          width: drawerWidth,
          flexShrink: 0,
        }
      },
      drawerPaper: {
        width: drawerWidth
      },
      dwarerItems: {
        marginTop: '50px'
      }
    })
  );
  const classes = useStyles();

  const handleDrawerOpen = () => {
    setOpen(!open);
  }

  const handleDrawerClose = () => {
    setOpen(false);
  }



  return (
    // <div>
    <AppBar position="sticky" classes={{ root: classes.root }}>
      <div className={classes.sectionDesktop} >
        <Toolbar classes={{ root: classes.toolBarProps }}>
          <ul id="navigation-menu">
            <li><a href="#">Home</a></li>
            <li><a href="#experience"> Work Experience</a></li>
            {/* <li><a href="#projects"> Projects</a></li> */}
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact"> Contact</a></li>
          </ul>
        </Toolbar>
      </div>
      <div className={classes.sectionMobile}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen}>
            <MenuIcon classes={{root: classes.menuButtonProps}}/>
          </IconButton>
          {/* <Typography>
              Please help yourself through drawer to navigate
          </Typography> */}
        </Toolbar>
      </div>
      <Drawer variant="temporary" anchor='left' open={open} className={classes.drawer} classes={{
        paper: classes.drawerPaper,
      }} ModalProps={{ onBackdropClick: handleDrawerClose }}>
        <div className="drawer-items">
          <div>
            {/* <img src */}So you are on mobile ? tab ? <br></br>
            Try the pc version as well.
          </div>
          <div className={classes.dwarerItems}>
            <Divider />
            <List><a href="#" onClick={handleDrawerClose}>Home</a></List>
            <Divider />
            <List><a href="#experience" onClick={handleDrawerClose}> Work Experience</a></List>
            <Divider />
            <List><a href="#skills" onClick={handleDrawerClose}>Skills</a></List>
            <Divider />
            <List><a href="#contact" onClick={handleDrawerClose}>Contact</a></List>
            
          </div>
        </div>
      </Drawer>

    </AppBar >



  );
}
export default Header;