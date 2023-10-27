// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

// Importing components
// import Name from './Components/Name/Name';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import Home from './Components/Home/Home';
import TechnicalExperience from './Components/TechnicalExperience/TechnicalExperience';
import Extracurriculars from './Components/Extracurriculars/Extracurriculars';
import FamilyAndFriends from './Components/FamilyAndFriends/FamilyAndFriends';

export function debugging() {
  let p = []
  for(let i = 0; i<30; i++) {
    p.push(<p>p {i+1}</p>)
  }
  
  return p
}

function App() {
  return (
    <div id="App">
      {/* <Name/> */}
      <NavigationBar/>
      <div className="content">
        <Home/>
        <TechnicalExperience/>
        <Extracurriculars/>
        <FamilyAndFriends/>
      </div>

      {/* <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/workexperiences" element={<Work/>}/>
        <Route path="/classprojects" element={<Class/>} />
        <Route path="/extracurriculars" element={<Extracurriculars/>} />
        <Route path="/familyandfriends" element={<FamilyAndFriends/>} />
      </Routes> */}

    </div>
  )
}

export default App;
