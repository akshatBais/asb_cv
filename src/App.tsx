import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainComponent from './components/MainComponent/MainComponent';
import SkillsComponent from './components/SkillsComponent/SkillsComponent';
import WorkExperience from './components/WorkExperienceComponent/WorkExperience';
import ProjectsComponent from './components/ProjectsComponent/ProjectsComponent';
import ToDoComponent from './components/ToDoComponent/ToDoComponent';
import { Divider } from '@material-ui/core';
import ContactComponent from './components/ContactComponent/ContactComponent';
require('require-context/register');

const App: React.FC = () => {
  return (
      <div className="profile">
        <Header />
      <div className="profile-body">
        <MainComponent />
        {/* <SkillsComponent /> */}
        <Divider />
        <WorkExperience />
        <Divider />
        {/* <ProjectsComponent /> */}
        <SkillsComponent />
        <Divider />
        <ContactComponent />
        
      </div>
      <Footer />
    </div >

  );
}

export default App;
