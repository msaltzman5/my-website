//import { Link as RouterLink } from 'react-router-dom';
// import { useEffect, useState } from "react";
import "./NavigationBar.css";
import { Box, AppBar, Toolbar, Button } from "@mui/material";
import { Link as ScrollLink } from "react-scroll"

export default function NavigationBar() {

  return (
    <div className="navigation-bar-wrapper">
      <ul className="navigation-bar">
        <div className="name-link">
          <ScrollLink id="name-link" to="home" smooth={true} duration={1000} offset={-48}>
            Malcolm Saltzman
          </ScrollLink>
        </div>
        <div className="navigation-bar-links">
          <li>
            <ScrollLink id="name-link" to="home" smooth={true} duration={1000} offset={-48}>
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="technical-experience" smooth={true} duration={1000} offset={-48}>
              Technical Experience
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="hobbies" smooth={true} duration={1000} offset={-48}>
              Hobbies
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="family-and-friends" smooth={true} duration={1000} offset={-48}>
              Family & Friends
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="footer" smooth={true} duration={1000} offset={-48}>
              Contact
            </ScrollLink>
          </li>
        </div>
      </ul>
    </div>
  );
}