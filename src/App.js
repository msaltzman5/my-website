import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

// Importing components
import Home from './Components/Home/Home';
import Name from './Components/Name/Name';
import Work from './Components/WorkExperiences/WorkExperiences';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import Class from './Components/ClassProjects/ClassProjects';
import Extracurriculars from './Components/Extracurriculars/Extracurriculars';
import FamilyAndFriends from './Components/FamilyAndFriends/FamilyAndFriends';

function App() {
  return (
    <BrowserRouter>

      <Name />

      <NavigationBar />

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/workexperiences" element={<Work/>}/>
        <Route path="/classprojects" element={<Class/>} />
        <Route path="/extracurriculars" element={<Extracurriculars/>} />
        <Route path="/familyandfriends" element={<FamilyAndFriends/>} />
      </Routes>

    </BrowserRouter>
  )
}

export default App;
