import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { borderRadius, Box } from "@mui/system";
import Divider from '@mui/material/Divider';
import React from "react";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    hover : {
        backgroundColor: '#fff',
        color: '#009688',
        borderRadius: '1em 0 0 1em'
    },
    notHover: {
        color: '#fff'
    },
    roundLeft : {
        borderRadius: '0 1em 0 0'
    }
})
var hoverIndex = -1;
const Sidebar = (props) => {
    const classes = useStyles();
    const [selectedIndex] = React.useState(5);
    const {hovering} = props;
    // const {hoverIndex,handleHoverIndex} = props;
    

    const handleMouseOver = (index) => {
        
        if(index != 4){
            return;
        }
        hoverIndex = index;
        // console.log("Hovering in...");
        console.log("Hover index .. ",hoverIndex);
        hovering();
    }
    const handleMouseOut = () => {
        hoverIndex = -1;
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
                <List sx={{ml: 1}}>
                <ListItem className={hoverIndex===0 ? classes.hover: classes.notHover} disablePadding>
                    <ListItemButton onMouseEnter={()=>handleMouseOver(0)} selected={selectedIndex === 0}>
                    <ListItemText sx={{textAlign: 'center',color: '#fff'}} primary="My Info" />
                    </ListItemButton>
                </ListItem>
                <ListItem className={hoverIndex===1 ? classes.hover: classes.notHover} disablePadding>
                    <ListItemButton onMouseEnter={()=>handleMouseOver(1)} onMouseLeave={handleMouseOut} selected={selectedIndex === 1}>
                    <ListItemText sx={{textAlign: 'center',color: '#fff'}} primary="Blogs" />
                    </ListItemButton>
                </ListItem>
                <ListItem className={hoverIndex===2 ? classes.hover: classes.notHover} disablePadding>
                    <ListItemButton onMouseEnter={()=>handleMouseOver(2)} onMouseLeave={handleMouseOut} selected={selectedIndex === 2}>
                    <ListItemText sx={{textAlign: 'center',color: '#fff'}} primary="General Info." />
                    </ListItemButton>
                </ListItem>
                <ListItem className={hoverIndex===3 ? classes.hover: classes.notHover} disablePadding>
                    <ListItemButton onMouseEnter={()=>handleMouseOver(3)} onMouseLeave={handleMouseOut} selected={selectedIndex === 3}>
                    <ListItemText sx={{textAlign: 'center',color: '#fff'} } primary="Team" />
                    </ListItemButton>
                </ListItem>
                <ListItem className={hoverIndex===4 ? classes.hover: classes.notHover} disablePadding>
                    <ListItemButton onMouseEnter={()=>handleMouseOver(4)} onMouseLeave={handleMouseOut} selected={selectedIndex === 4}> 
                    <ListItemText sx={{textAlign: 'center'}} style={{fontFamily: 'times'}} primary="HR Management" />
                    </ListItemButton>
                </ListItem>
                </List>
                {/* {isHover && console.log("Hovering in....")} */}
            </nav>
        </Box>
    );
}

export default Sidebar;
