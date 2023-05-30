import { useEffect, useState } from "react";
import { green } from "@mui/material/colors";
import "./NavigationBar.css";
import { Box, AppBar, Toolbar, Link } from "@mui/material";

export default function NavigationBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
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
            <Link color="inherit" href="/" underline="none" sx={{"&:hover": {color: "orange"}}}>Home</Link>
            <Link color="inherit" href="/workexperiences" underline="none" sx={{"&:hover": {color: "orange"}}}>Work Experiences</Link>
            <Link color="inherit" href="/classprojects" underline="none" sx={{"&:hover": {color: "orange"}}}>Class Projects</Link>
            <Link color="inherit" href="/extracurriculars" underline="none" sx={{"&:hover": {color: "orange"}}}>Extracurriculars</Link>
            <Link color="inherit" href="/familyandfriends" underline="none" sx={{"&:hover": {color: "orange"}}}>Family And Friends</Link>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  )
}