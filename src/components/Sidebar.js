import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Box } from "@mui/system";
import Divider from '@mui/material/Divider';
import React from "react";



function Sidebar(){
    const [selectedIndex] = React.useState(4);

    
    return (
        <Box sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <nav aria-label="main mailbox folders">
                <List>
                <ListItem disablePadding>
                    <ListItemButton>
                    <ListItemText sx={{textAlign: 'center'}} primary="SILARRA" />
                    </ListItemButton>
                </ListItem>
                </List>
            </nav>
            <Divider />
            <nav aria-label="secondary mailbox folders">
                <List>
                <ListItem disablePadding>
                    <ListItemButton selected={selectedIndex === 0}>
                    <ListItemText sx={{textAlign: 'center'}} primary="My Info" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton selected={selectedIndex === 1}>
                    <ListItemText sx={{textAlign: 'center'}} primary="Blogs" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton selected={selectedIndex === 2}>
                    <ListItemText sx={{textAlign: 'center'}} primary="General Info." />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton selected={selectedIndex === 3}>
                    <ListItemText sx={{textAlign: 'center'}} primary="Team" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton selected={selectedIndex === 4}> 
                    <ListItemText sx={{textAlign: 'center'}} primary="HR Management" />
                    </ListItemButton>
                </ListItem>
                
                </List>
            </nav>
        </Box>
    );
}

export default Sidebar;
