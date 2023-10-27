// import {debugging} from '../../App.js';

import "./Home.css";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper'

function Home() {

  return (
    <div id='home' className='home-content' style={{ paddingTop: '25px' }}>
      <Box sx={{ p: 2, borderRadius: 8 }}>
        <Paper elevation={3} sx={{ padding: 2 }}>
          <h1 className="about-me">About Me</h1>
            <p>
              Hi! My name is Malcolm Saltzman and I'm a Computer Science major and
              a Mathematics and Business minor at the University of 
              Nebraska-Lincoln. I built this website to improve my technical skills
              and document what I have going on in my life.
            </p>
            <p></p>
        </Paper>
      </Box>
    </div>
  );
}

export default Home;