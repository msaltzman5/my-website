//import { Link as RouterLink } from 'react-router-dom';
import { useEffect, useState } from "react";
import { green } from "@mui/material/colors";
import "./NavigationBar.css";
import { Box, AppBar, Toolbar, Button } from "@mui/material";
import {Link as ScrollLink} from "react-scroll"

export default function NavigationBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 150);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position={isScrolled ? "fixed" : "relative"}>
        <Toolbar sx={{ background: green }}>
          <div className="navigation-bar-links">
            <ScrollLink to="home" smooth={true} duration={1000} offset={-75}>
              <Button color="inherit" underline="none" sx={{"&:hover": {color: "orange"}}}>Home</Button>
            </ScrollLink>
            <ScrollLink to="work-experiences" smooth={true} duration={1000} offset={-75}>
              <Button color="inherit" underline="none" sx={{"&:hover": {color: "orange"}}}>Work Experiences</Button>
            </ScrollLink>
            <ScrollLink to="class-projects" smooth={true} duration={1000} offset={-75}>
              <Button color="inherit"  underline="none" sx={{"&:hover": {color: "orange"}}}>Class Projects</Button>
            </ScrollLink>
            <ScrollLink to="extracurriculars" smooth={true} duration={1000} offset={-75}>
              <Button color="inherit" underline="none" sx={{"&:hover": {color: "orange"}}}>Extracurriculars</Button>
            </ScrollLink>
            <ScrollLink to="family-and-friends" smooth={true} duration={1000} offset={-75}>
              <Button color="inherit" underline="none" sx={{"&:hover": {color: "orange"}}} scroll="smooth">Family And Friends</Button>
            </ScrollLink>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  )
}