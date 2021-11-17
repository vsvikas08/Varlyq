import { List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import { Box, style } from "@mui/system";
import Divider from '@mui/material/Divider';
import React, {useState} from "react";


const Sidebar = (props) => {
    const [selectedIndex] = React.useState(5);
    const [isHover, setIsHovering] = useState(false);
    const {hovering, notHovering} = props;

    const handleMouseOver = () => {
        setIsHovering(true);
        // console.log("Hovering in...");
        hovering();
    }
    const handleMouseOut = () => {
        setIsHovering(false);
        // console.log("Hovering out...");
        // notHovering();
    }
    
    return (
        <Box sx={{width: '100%', maxWidth: 360 }}>
            <nav aria-label="main mailbox folders">
                <List sx={{mt: 3}}>
                <ListItem disablePadding>
                    <ListItemButton>
                    <ListItemText sx={{textAlign: 'center',color: '#fff'}} primary="SILARRA" />
                    </ListItemButton>
                </ListItem>
                </List>
            </nav>
            <Divider />
            <nav aria-label="secondary mailbox folders">
                <List>
                <ListItem disablePadding>
                    <ListItemButton selected={selectedIndex === 0}>
                    <ListItemText sx={{textAlign: 'center',color: '#fff'}} primary="My Info" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton selected={selectedIndex === 1}>
                    <ListItemText sx={{textAlign: 'center',color: '#fff'}} primary="Blogs" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton selected={selectedIndex === 2}>
                    <ListItemText sx={{textAlign: 'center',color: '#fff'}} primary="General Info." />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton selected={selectedIndex === 3}>
                    <ListItemText sx={{textAlign: 'center',color: '#fff'} } primary="Team" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut} selected={selectedIndex === 4}> 
                    <ListItemText sx={{textAlign: 'center',color: '#fff'}} style={{fontFamily: 'times'}} primary="HR Management" />
                    </ListItemButton>
                </ListItem>
                </List>
                {/* {isHover && console.log("Hovering in....")} */}
            </nav>
        </Box>
    );
}

export default Sidebar;
