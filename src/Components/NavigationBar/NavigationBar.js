import { Link } from 'react-router-dom';
import { green } from "@mui/material/colors";
import "./NavigationBar.css";
import { Box, AppBar, Toolbar, Typography } from "@mui/material";

export default function NavigationBar() {
  return (
    <nav>
        <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/work">Work Experinces</Link>
        </li>
        <li>
          <Link to="/class">Class projects</Link>
        </li>
        </ul>
    </nav>
    // <Box sx={{ flexGrow: 1 }}>
    //   <AppBar position="static">
    //     <Toolbar sx={{ background: green }}>
    //       <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
    //         Card Game Capstone Group 6
    //       </Typography>
    //       <div className="navigation-bar-links">
    //         <Link color="inherit" href="/" underline="none">Home</Link>
    //         <Link color="inherit" href="/work" underline="none">Solitaire</Link>
    //       </div>
    //     </Toolbar>
    //   </AppBar>
    // </Box>
  )
}