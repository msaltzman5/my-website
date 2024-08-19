import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

// Importing components
import NavigationBar from './Components/NavigationBar/NavigationBar';
import Home from './Components/Home/Home';
import TechnicalExperience from './Components/TechnicalExperience/TechnicalExperience';
import Extracurriculars from './Components/Hobbies/Hobbies';
import FamilyAndFriends from './Components/FamilyAndFriends/FamilyAndFriends';
import Footer from './Components/Footer/Footer';
import Valentine from './Components/Valentine/Valentine';

function App() {
  const components = [
    <Home />,
    <TechnicalExperience />,
    <Extracurriculars />,
    <FamilyAndFriends />,
    <Footer />
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % components.length);
    } else if (e.key === 'ArrowLeft') {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + components.length) % components.length);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div id="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <div>
                <NavigationBar />
                <div className="main-content">
                  <button className='nav-button' onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + components.length) % components.length)}>
                    &#10094;
                  </button>
                  {components[currentIndex]}
                  <button className='nav-button' onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % components.length)}>
                    &#10095;
                  </button>
                </div>
                <div className="navigation-buttons">
                </div>
              </div>
            }
          />
          <Route path="/valentine" element={<Valentine />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
