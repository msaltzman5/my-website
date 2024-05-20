import "./TechnicalExperience.css";
import Box from '@mui/material/Box';
import resume from '../../Data/Resume - Malcolm Saltzman.pdf'

function TechnicalExperience() {
  return (
    <div id='technical-experience' className='technical-experience-content'>
      <Box id="technical-experience-box" sx={{ p: 2, borderRadius: 4, bgcolor: '#FFC1C3', display: "flex" }}>
        <div className="left-about-me-tech">
          <h1 className="technical-experience-heading">Technical Experience</h1>
          <h1 className="job-experience-heading">Job Experience</h1>
          <p className="info">All of my relevant experiences can be found on my <a href={resume} target="_blank" rel="noreferrer">resume</a>,
            but I will go further in depth in this section.
          </p>
          <div className="MyRacePass-content">
            <h2>MyRacePass</h2>
            <p>
              I just finished my internship at <a href="https://www.myracepass.com/" target="_blank" rel="noreferrer">MyRacePass</a> where I
              was a software developer intern. I really enjoyed working there and I am so appreciative of the opportunity they gave me.
              My main priorities included maintaining the code base, researching and developing new features, and overall contributing to the
              team where ever they need me. My favorite projects I worked on where implementing a feature for customers to text their tickets
              to their phone number and creating a V1 of <a href="https://www.myracepass.com/latest-news/article/152609/myracepass-changes-the-game-again-with-mrp-audio" target="_blank" rel="noreferrer">MRP Audio</a>.
            </p>
          </div>
          <div className="hyland-software-content">
            <h2>Hyland Software</h2>
            <p>
              My first internship was with <a href="https://www.hyland.com/en" target="_blank" rel="noreferrer">Hyland Software</a>. They are a company that makes enterprise
              management software for various different types of companies, such as healthcare, insurance, or government contractors. Here,
              me and the other interns monitored an internal-facing application where we found solutions for issues our
              clients were having. If bugs were found or the issue needed to be escalated, we would pass our ticket on to the full-time employees.
            </p>
          </div>
          <div className="other-experiences-content">
            <h1 className="other-experiences-heading">Other Experiences</h1>
            <h2>Scoular - Design Studio</h2>
            <p>
              This past school-year, I was fortunate enough to be selected to represent the UNL Raikes School Design Studio as an Associate. My company sponsor was <a href="https://www.scoular.com/" target="_blank" rel="noreferrer">Scoular</a>,
              an agriculture logistics compnay. We were assigned the task of streamlining the communication between Scoular's employees and it's customers by developing
              an intuative web application. To do this, we made a PowerPages application where customers could input their desired delivery schedule and easily recieve
              feedback from Scoular instead of constantly having to text, email, or call Scoular employees to confirm delivery changes. 
            </p>
          </div>
        </div>
      </Box>
    </div>
  );
}

export default TechnicalExperience;