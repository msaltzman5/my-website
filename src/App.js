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
  return (
    <div id="App">
      {/* <Name/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" exact Component={ContentWrapper} />
          <Route path="/valentine" element={<Valentine />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const ContentWrapper = () => {
  return (
    <div>
      <NavigationBar />
      <div className="main-content">
        <Home />
        <TechnicalExperience />
        <Extracurriculars />
        <FamilyAndFriends />
        <Footer />
      </div>
    </div>
  );
}

export default App;
