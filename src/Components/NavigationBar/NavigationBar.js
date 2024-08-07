//import { Link as RouterLink } from 'react-router-dom';
// import { useEffect, useState } from "react";
import "./NavigationBar.css";
import { Box, AppBar, Toolbar, Button } from "@mui/material";
import { Link as ScrollLink } from "react-scroll"

export default function NavigationBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar className="toolbar">
          <div className="name-link">
            <ScrollLink id="name-link" to="home" smooth={true} duration={1000} offset={-60}>
              Malcolm Saltzman
            </ScrollLink>
          </div>
          <div className="navigation-bar-links">
            <ScrollLink to="home" smooth={true} duration={1000} offset={-75}>
              <Button color="inherit" underline="none" sx={{ "&:hover": { color: "orange" } }}>Home</Button>
            </ScrollLink>
            <ScrollLink to="technical-experience" smooth={true} duration={1000} offset={-60}>
              <Button color="inherit" underline="none" sx={{ "&:hover": { color: "orange" } }}>Technical Experience</Button>
            </ScrollLink>
            <ScrollLink to="hobbies" smooth={true} duration={1000} offset={-60}>
              <Button color="inherit" underline="none" sx={{ "&:hover": { color: "orange" } }}>Hobbies</Button>
            </ScrollLink>
            <ScrollLink to="family-and-friends" smooth={true} duration={1000} offset={-60}>
              <Button color="inherit" underline="none" sx={{ "&:hover": { color: "orange" } }} scroll="smooth">Family & Friends</Button>
            </ScrollLink>
            <ScrollLink to="footer" smooth={true} duration={1000} offset={-60}>
              <Button color="inherit" underline="none" sx={{ "&:hover": { color: "orange" } }} scroll="smooth">Contact</Button>
            </ScrollLink>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  )
}