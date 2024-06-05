// import {debugging} from '../../App.js';

import "./Home.css";
import Me from '../../Data/Me.jpg';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';

function Home() {

  return (
    <div id='home' className='home-content'>
      <Box id="home-box" sx={{ p: 2, borderRadius: 4, bgcolor: '#D3D3D3', display: "flex" }}>
        {/* <Paper elevation={3} className="component-box"> */}
        <div className="left-about-me">
          <h1 className="about-me">About Me</h1>
          <p>
            Hi! My name is Malcolm Saltzman and I'm a Computer Science major and
            a Mathematics and Business minor at the University of 
            Nebraska-Lincoln. I built this website to improve my technical skills
            and document what I have going on in my life. 
          </p>
          <p>
            When I'm not working on
            school work, I love to playing sports (bowling, basketball, football, etc.),
            working out, and hanging with my friends and family. Browse through this
            website to learn more about me!
          </p>
        </div>
        <div className="right-about-me">
          <img src={Me} alt="Sorry, I'm not loading" className="me"/>
        </div>
        {/* </Paper> */}
      </Box>
    </div>
  );
}

export default Home;