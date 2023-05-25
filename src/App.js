import React from 'react';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import './App.css';

// Import your page components
import Home from './Components/Home/Home.js';
import Work from './Components/Work/Work.js';
import NavigationBar from "./Components/NavigationBar/NavigationBar.js";

// import Class from './Components/Class/Class.js';
// import Extracurricular from './Components/Extracurricular/Extracurricular.js';
// import FamilyAndFriends from './Components/FamilyAndFriends/FamilyAndFriends.js';


function App() {
 return (
  <BrowserRouter>
      <NavigationBar />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
        path="/work"
        element={<Work/>}
        />
      </Routes>
    </BrowserRouter>
 )
}

// function App() {
//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route path="/work" component={Work} />
//         <Route path="/class" component={Class} />
//         <Route path="/extracurricular" component={Extracurricular} />
//         <Route path="/familyandfriends" component={FamilyAndFriends} />
//       </Switch>
//     </Router>
//   );
// }

export default App;
