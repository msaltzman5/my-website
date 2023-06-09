//import { green } from "@mui/material/colors";
import "./Name.css";
import { Box, AppBar, Typography } from "@mui/material";

function Name() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Typography variant="h2"
                    component="div"
                    sx={{ flexGrow: 1,
                    textAlign:"center",
                    padding: "36px" }}>
                    Malcolm Saltzman's Website
                </Typography>
            </AppBar>
        </Box>
    )
}

export default Name;