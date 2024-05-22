//import { debugging } from '../../App.js'
import "./Hobbies.css";
import Box from '@mui/material/Box';
import { Link as ScrollLink } from "react-scroll"

function Hobbies() {
  return (
    <div id='hobbies' className='hobbies-content'>
      <Box id="hobbies-box" sx={{ p: 2, borderRadius: 4, bgcolor: '#8AE4EF', display: "flex" }}>
        <div className="left-hobbies">
          <h1 className="hobbies-heading">Hobbies</h1>
          <p>
            When I'm not in school, working, or spending time with loved ones, I'm interested in more hobbies than I would like to admit.
            Here, I'll go over my favorite hobbies.
          </p>
          <div className="bowling-content">
            <h1 className="bowling-heading">Bowling</h1>
            <p>
              This is the hobby I'm most involved in. I'm the previous Tresurer and current Vice President of the Bowling Club at UNL. We practice
              two times a week and travel to about 15 tournements throughout the school-year. I also occasionally sub in leagues with my friends.
            </p>
            <p>
              This past year was a successful year for our club. We won a tournement and placed top 3 in a few others. We qualified to particpate in
              Sectionals which was held in Dallas, TX this year. This whole year was such a fun experience and look forward to improving in the next.
            </p>
          </div>
          <div className="basketball-content">
            <h1 className="basketball-heading">Basketball</h1>
            <p>
              I've played basketball for my entire life and it was the first sport I fell in love with. I also played football and baseball throughout
              high school, but I've always liked basketball more. I try playing as often as I can with a busy schedule, but that ends up being about once
              every two weeks. Peep my <a href="http://www.hudl.com/video/3/10453688/60026ec8d21ac70060c786b9" target="_blank" rel="noreferrer">junior season basketball "highlights"</a>.
            </p>
          </div>
          <div className="coding-content">
            <h1 className="coding-heading">Coding</h1>
            <p> 
              I also like to use and improve my programming skills outside school and work. I've found that I really just love the 
              problem solving, building, and creative aspects of programming. I've done a
              few <ScrollLink id="personal-projects-link" to="personal-projects" smooth={true} duration={1000} offset={-75}>projects</ScrollLink> on
              my own as well as with my friends during hackathons
              like <ScrollLink id="cornhacks-link" to="21-vision" smooth={true} duration={1000} offset={-75}>CornHacks</ScrollLink>. I also 
              particpate in online activities such as Leetcode and <a href="https://adventofcode.com/" target="_blank" rel="noreferrer">Advent of Code</a> for fun.
            </p>
          </div>
        </div>
      </Box>
    </div>
  )
}

export default Hobbies;