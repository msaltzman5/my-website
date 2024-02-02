import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

// Importing components
// import Name from './Components/Name/Name';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import Home from './Components/Home/Home';
import TechnicalExperience from './Components/TechnicalExperience/TechnicalExperience';
import Extracurriculars from './Components/Extracurriculars/Extracurriculars';
import FamilyAndFriends from './Components/FamilyAndFriends/FamilyAndFriends';
import Valentine from './Components/Valentine/Valentine';

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
      <BrowserRouter>
        <Routes>
          <Route path="/" exact Component={ContentWrapper}/>
          <Route path="/valentine" element={<Valentine/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const ContentWrapper = () => {
  return (
    <div>
      <NavigationBar/>
      <div className="content">
        <Home/>
        <TechnicalExperience/>
        <Extracurriculars/>
        <FamilyAndFriends/>
      </div>
    </div>
  );
}


export default App;
