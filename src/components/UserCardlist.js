import { Button, FormControl, Grid, IconButton, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
import UserCard from './UserCard';
import Divider from '@mui/material/Divider';
import { useState } from 'react';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

const useStyles = makeStyles({
    gridContainer: {
        paddingLeft: "20px",
        paddingRight: "20px"
    }
})

const UserCardlist = (props) => {
    const classes = useStyles();
    const {employee} = props.state;
    const {notHovering} = props;
    // console.log('Card STATE',employee);
    
    const handleNotHovering = () => {
        // console.log("Clicked");
        notHovering();
    }

    const [searchTerm,setSearchTerm] = useState("");
    return (
        <Box style={{backgroundColor: '#fff', marginRight: '1em', marginBottom: '1em' }} sx={{borderRadius: 15}}>
            <Box sx={{float: 'right',mr: 4, mt: 1, pt: 2}}>
                <IconButton sx={{fontSize: 'large', pr: 1}}>
                    <NotificationsOutlinedIcon/>
                </IconButton>
                <IconButton sx={{fontSize: 'large',pr: 2}} style={{backgroundColor: 'transparent'}}>
                    Nirav Kumar<KeyboardArrowDownSharpIcon />
                </IconButton>
                
                <IconButton onClick={handleNotHovering} sx={{fontSize: 'small'}}>
                    
                    <CloseSharpIcon />
                </IconButton>
            </Box>
            
            <Typography variant="h4" sx={{mt: 2,ml: 3,pt: 2}}>
                HR Management List
            </Typography>
            <Divider sx={{m: 1}}/>

            <TextField
                id="search"
                label="Name"
                size="small"
                sx={{ml:3,mr: 4}}
                onChange={(event)=>{
                    setSearchTerm(event.target.value)
                }}
            />
            <Box sx={{float: 'right'}}>
            <FormControl sx={{  minWidth: 120 }}>
                <InputLabel id="demo-simple-select-helper-label">All</InputLabel>
                <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                label="All"
                size="small"
                >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem >Ten</MenuItem>
                <MenuItem >Twenty</MenuItem>
                <MenuItem >Thirty</MenuItem>
                </Select>
            </FormControl>
            <FormControl sx={{ml: 4, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-helper-label">Default</InputLabel>
                <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                label="All"
                size="small"
                >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem >Ten</MenuItem>
                <MenuItem >Twenty</MenuItem>
                <MenuItem >Thirty</MenuItem>
                </Select>
            </FormControl>
            <Button sx={{float: 'right', mr: 3,ml: 3}} variant="contained">Add Employee</Button>
            </Box>
            <Grid sx={{minHeight: 600}} container spacing={4} className={classes.gridContainer}>
                {employee.slice(0,8).filter((val)=>{
                    // if(searchTerm === ""){
                    //     return val
                    // }else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                    //     return val
                    // }
                    return val.name.toLowerCase().includes(searchTerm.toLowerCase())
                     }).map((emp,index) => {
                            // console.log('index ',emp.id);
                            return (
                                <Grid key={emp.id} item xs={12} sm={6} md={4} lg={3}>
                                    <UserCard employee={emp} />
                                </Grid> 
                            )
                    }
                        
                )}
        
            </Grid>
        </Box>
        
    );
}

export default UserCardlist;
