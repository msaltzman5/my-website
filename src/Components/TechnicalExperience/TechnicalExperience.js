import "./TechnicalExperience.css";
import Box from '@mui/material/Box';
import resume from '../../Data/Resume - Malcolm Saltzman.pdf'

function TechnicalExperience() {
    return (
      <div id='technical-experience' className='technical-experience-content'>
        <Box id="technical-experience-box" sx={{ p: 2, borderRadius: 4, bgcolor: '#FFC1C3', display: "flex" }}>
          {/* <Paper elevation={3} className="component-box"> */}
          <div className="left-about-me-tech">
            <h1 className="technical-experience-heading">Technical Experience</h1>
            <p className="info">All of my relevant experiences can be found on my <a href={resume} target="_blank" rel="noreferrer">resume</a>,
              but I will go further in depth in this section.
            </p>
            <div className="MyRacePass-content">
              <h2>MyRacePass</h2>
              <p>
                I just finished my internship at <a href="https://www.myracepass.com/" target="_blank" rel="noreferrer">MyRacePass</a> where I
                was a software developer intern. I really enjoyed working there and I am so appreciative of them to give me this opportunity.
                My main priorities included maintaining the code base, researching and developing new features, and overall contributing to the
                team where ever they need me. My favorite projects I worked on where implementing a feature for customers to text their tickets
                to their phone number and creating a V1 of
                <a href="https://www.myracepass.com/latest-news/article/152609/myracepass-changes-the-game-again-with-mrp-audio" target="_blank" rel="noreferrer">MRP Audio</a>.
              </p>
            </div>
            <div className="hyland-software-content">
              <h2>Hyland Software</h2>
              <p>My first internship was with <a href="https://www.hyland.com/en" target="_blank" rel="noreferrer">Hyland Software</a>. They are a company that makes enterprise
                management software for various different types of companies, such as healthcare, insurance, or government contractors. Here,
                me and the other interns monitored an internal-facing application where we found solutions for issues our
                clients were having. If bugs were found or the issue needed to be escalated, we would pass our ticket on to the full-time employees.
              </p>
            </div>
          </div>
          {/* <div className="right-about-me-tech">
            <img src={Me} alt="Sorry, I'm not loading" className="me"/>
          </div> */}
          {/* </Paper> */}
        </Box>
      </div>
    );
}

export default TechnicalExperience;