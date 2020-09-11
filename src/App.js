import React from 'react';
import './App.css';
import { Divider } from '@material-ui/core';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainComponent from './components/MainComponent/MainComponent';
import SkillsComponent from './components/SkillsComponent/SkillsComponent';
import ContactComponent from './components/ContactComponent/ContactComponent';
import WorkExperience from './components/WorkExperienceComponent/WorkExperience';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import { makeStyles } from '@material-ui/core/styles';
import ProjectsComponent from './components/ProjectsComponent/ProjectsComponent';


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "50%"
  }
}));
function App() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleModalOpen = () => {
    // console.log("clicked")
    setOpen(!open);
  }


  return (
    <div className="profile">
        <Header handleModalOpen={handleModalOpen} />
        <Modal open={open} className={classes.modal} BackdropComponent={Backdrop} BackdropProps={{ timeout: 150,}} onClose={handleModalOpen}>
          <Fade in={open}>

          <div className={classes.paper}>
            <ContactComponent />
          </div>
        </Fade>
        </Modal>
        
        <div className="profile-body">
          <MainComponent />
          <Divider />
          <ProjectsComponent />
          <Divider />
          <SkillsComponent />
          <Divider />
          <ContactComponent />
          {/* <div className="contact-component">
            <ContactComponent />
          </div> */}
        </div>
     
      <Footer />
    </div >
  )
}

export default App;
