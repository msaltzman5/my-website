//import { Link } from 'react-router-dom';
import { green } from "@mui/material/colors";
import "./NavigationBar.css";
import { Box, AppBar, Toolbar, Typography, Link } from "@mui/material";

export default function NavigationBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ background: green }}>
          <div className="navigation-bar-links">
            <Link color="inherit" href="/" underline="none">Home</Link>
            <Link color="inherit" href="/workexperiences" underline="none">Work Experiences</Link>
            <Link color="inherit" href="/classprojects" underline="none">Class Projects</Link>
            <Link color="inherit" href="/extracurriculars" underline="none">Extracurriculars</Link>
            <Link color="inherit" href="/familyandfriends" underline="none">Family And Friends</Link>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  )
}