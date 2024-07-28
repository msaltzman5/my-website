import "./TechnicalExperience.css";
// import Box from '@mui/material/Box';
import resume from '../../Data/TechnicalExperience/Resume - Malcolm Saltzman.pdf'
import mrplogo from '../../Data/TechnicalExperience/mrp-logo.png';
import hylandlogo from '../../Data/TechnicalExperience/hyland-logo.png'
import scoularlogo from '../../Data/TechnicalExperience/scoular-logo.avif'
import Vision21 from '../../Data/TechnicalExperience/21Vision.png'

function TechnicalExperience() {
  return (
    <div id='technical-experience' className='content technical-experience-content'>
      {/* <Box id="technical-experience-box" sx={{ p: 2, borderRadius: 4, bgcolor: '#FFC1C3', display: "flex" }}> */}
      <div>
        <h1 className="technical-experience-heading">Technical Experience</h1>
        <h1 className="job-experience-heading">Job Experience</h1>
        <p className="info">All of my relevant experiences can be found on my <a href={resume} target="_blank" rel="noreferrer">resume</a>,
          but I will go further in depth in this section.
        </p>
        <div className="MyRacePass-content display-flex-content">
          <div className="left-content">
            <h2>MyRacePass</h2>
            <p>
              I just finished my internship at <a href="https://www.myracepass.com/" target="_blank" rel="noreferrer">MyRacePass</a>, where I
              was a Software Developer Intern. I really enjoyed working there and I am so appreciative of the opportunity they gave me.
              My main priorities included maintaining the code base, researching and developing new features, and overall contributing to the
              team where ever they needed me. My favorite projects I worked on where implementing a feature for customers to text their tickets
              to their phone number and creating a V1 of <a href="https://www.myracepass.com/latest-news/article/152609/myracepass-changes-the-game-again-with-mrp-audio" target="_blank" rel="noreferrer">MRP Audio</a>.
            </p>
          </div>
          <div className="right-content">
            <img src={mrplogo} alt="Sorry, I'm not loading" className="logo" />
          </div>
        </div>
        <div className="hyland-software-content display-flex-content">
          <div className="left-content">
            <h2>Hyland Software</h2>
            <p>
              My first internship was with <a href="https://www.hyland.com/en" target="_blank" rel="noreferrer">Hyland Software</a> where I was
              Cloud Support Analyst Intern. Hyland makes enterprise
              management software on the cloud for various different types of companies, such as healthcare, insurance, or government contractors. Here,
              me and the other interns monitored an internal-facing application where we found solutions for issues our
              clients were having. If bugs were found or the issue needed to be escalated, we would pass our ticket on to the full-time analysts.
            </p>
          </div>
          <div className="right-content">
            <img src={hylandlogo} alt="Sorry, I'm not loading" className="logo" id="hyland-logo" />
          </div>
        </div>
        <div className="projects-content">
          <h1 className="projects-heading">Projects</h1>
          <div className="scoular-content display-flex-content">
            <div className="left-content">
              <h2>Scoular - Design Studio</h2>
              <p>
                This past school-year, I was fortunate enough to be selected to represent the UNL Raikes School Design Studio as an Associate. My company sponsor was <a href="https://www.scoular.com/" target="_blank" rel="noreferrer">Scoular</a>,
                an agriculture logistics compnay. We were assigned the task of streamlining the communication between Scoular's employees and it's customers by developing
                an intuative web application. To do this, we made a PowerPages application where customers could input their desired delivery schedule and easily recieve
                feedback from Scoular instead of constantly having to text, email, or call Scoular employees to confirm delivery changes.
              </p>
              <p>
                Additionally, my group wrote an honors thesis regarding our project and I will link that when it becomes publically available.
              </p>
            </div>
            <div className="right-content">
              <img src={scoularlogo} alt="Sorry, I am not loading" className="logo" />
            </div>
          </div>
        </div>
        <div id="personal-projects" className="personal-projects-content">
          <h1 id="personal-projects-heading" className="personal-projects-heading">Personal Projects</h1>
          <div className="21-vision-content display-flex-content">
            <div className="left-content">
              <h2><a href="https://github.com/benjaminkcook/21Vision" target="_blank" rel="noreferrer">21 Vision</a> - <a href="https://unlcornhacks.com/" target="_blank" rel="noreferrer">CornHacks</a></h2>
              <p>
                The prompt for 2024 was "Beat the Odds". We had to do a project dealing with data analytics and/or risk assessment. We ended up to creating a camera extension that could be used to "count cards" at a blackjack table.
                We developed a machine learning model using <a href="https://www.v7labs.com/blog/yolo-object-detection" target="_blank" rel="noreferrer">Yolo</a> and <a href="https://universe.roboflow.com/" target="_blank" rel="noreferrer">Roboflow</a> that
                could recognize each individual card when shown to a camera.
                We had the "count" follow standard card-counting rules and the running count was updated based on the cards shown on the table.
              </p>
              <p>
                That was the scope of our hack-a-thon, but if we had more time. We would have developed a model that could analyze all previously dealt cards, current cards, and give the best possible move given the situation.
              </p>
            </div>
            <div className="right-content">
              <img src={Vision21} alt="Sorry, I am not loading" className="logo" />
            </div>
          </div>
        </div>
      </div>
      {/* </Box> */}
    </div>
  );
}

export default TechnicalExperience;