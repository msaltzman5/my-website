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
            {/* <p>
              I've been surrounded by technology my entire life. My dad is an Information
              Technology professional and would often have me shadow him when he worked on the
              weekends. I got fairly familiarized with Windows XP OS and would maintain, work on,
              and update the computers when my dad needed.
            </p>
            <p>
              However, you're proabaly not here to read about how I got introduced to computers.
              The next main chapter in my "professional" life was taking a college intro to computer
              science in high school and I'm going to be real, it was really difficult for me. This 
              was the first time I was exposed to any of this material and having an online course
              without live lectures (only recorded) was difficult. I enjoyed the course, but at the
              end, I had decided computer science was not for me.
            </p>
            <p>
              After that, I took some college psych to see if that was maybe what I wanted to go 
              into, but that was not the case at all. So I took college biology, writing, and public
              speaking to get some intro courses out of the way and didn't really know what I wanted
              to do in college.
            </p>
            <p>
              Sure enough, I declared that I wanted to study computer science and to tell you the truth,
              I had no idea why. It sounded just like the right answer for me (who always understood 
              math and science easier than most subjects). I entered college as a computer science freshman
              not knowing exactly what to expect.
            </p> */}
            <p className="info">All of my relevant experiences can be found on my <a href={resume} target="_blank" rel="noreferrer">resume</a>,
              but I will go further in depth in this section.
            </p>
            <div className="MyRacePass-content">
              <h2>MyRacePass</h2>
              <p className="MyRacePass-p">
                Currently, I'm working part-time as a software developer intern at <a href="https://www.myracepass.com/" target="_blank" rel="noreferrer">MyRacePass</a>.
                I really enjoy working there and I am so appreciative of them to offer me a position even though 
                I didn't have any "on-job" development experience. My main priorities include maintaining the code base,
                researching and developing new features, and overall contributing to the team where ever they need me.
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