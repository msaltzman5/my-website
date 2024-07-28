// import {debugging} from '../../App.js';

import "./Home.css";
import Me from '../../Data/Me2.jpg';
// import Box from '@mui/material/Box';

function Home() {
  return (
    <div id='home' className='content home-content'>
      {/* <Box id="home-box" sx={{ p: 2, borderRadius: 4, bgcolor: '#D3D3D3', display: "flex" }}> */}
        <div className="left-about-me">
          <h1 className="about-me">About Me</h1>
          <p>
            Hi! My name is Malcolm Saltzman and I'm a student at the University of Nebraska-Lincoln.
            I'm majoring in Computer Science and minoring in Business. I built this website to improve
            my technical skills and document what I have going on in my life. To preface, I'm mostly
            a "backend" developer, so I'm aware of how &#127775;beautiful&#127775; this website is.
            I really just wanted to get this out there so people could learn a little bit more about me.
          </p>
          <p>
            Here is an quick speel about myself: When I'm not working on
            school work, I love playing sports (bowling, basketball, tennis, football, etc.),
            working out, and hanging with my friends and family. In the future, I want to work as full-time
            software engineer, travel the world, and marry my girlfriend of 5 years (pictured - ADD LINK HERE).
             
          </p>
          <p>
            Browse through this website to learn more about me!
          </p>
        </div>
        <div className="right-about-me">
          <img src={Me} alt="Sorry, I'm not loading" className="me"/>
        </div>
      {/* </Box> */}
    </div>
  );
}

export default Home;