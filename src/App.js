import React from 'react';
import './App.css';
import { Divider } from '@material-ui/core';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainComponent from './components/MainComponent/MainComponent';
import SkillsComponent from './components/SkillsComponent/SkillsComponent';
import ContactComponent from './components/ContactComponent/ContactComponent';
import WorkExperience from './components/WorkExperienceComponent/WorkExperience';


function App() {
  return (
    <div className="profile">
        <Header />
        <div className="profile-body">
        <MainComponent />
        <Divider />
        <WorkExperience />
        <Divider />
        <SkillsComponent />
        <Divider />
        <ContactComponent />
        </div>
     
      <Footer />
    </div >
  )
}

export default App;
