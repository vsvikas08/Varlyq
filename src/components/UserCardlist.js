import { Button, FormControl, Grid, IconButton, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
import UserCard from './UserCard';
import Divider from '@mui/material/Divider';
import { useState } from 'react';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';

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
        <Box style={{backgroundColor: '#fff', marginRight: '2em', marginBottom: '2em' }} sx={{borderRadius: 15}}>
            <IconButton onClick={handleNotHovering} sx={{fontSize: 'small' ,float: 'right', mr: 4, mt: 2}}>
                <CloseSharpIcon />
            </IconButton>
            <Typography variant="h4" sx={{m: 3,pt: 2}}>
                HR Management List
            </Typography>
            <Divider sx={{m: 2}}/>

            <TextField
                id="search"
                label="Name"
                size="small"
                sx={{mb:2,ml:3,mr: 4}}
                onChange={(event)=>{
                    setSearchTerm(event.target.value)
                }}
            />
            <Box sx={{float: 'right'}}>
            <FormControl sx={{ mb: 2, minWidth: 120 }}>
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
            <FormControl sx={{fmb: 2,ml: 4, minWidth: 120 }}>
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
            <Grid container spacing={4} className={classes.gridContainer}>
                {employee.filter((val)=>{
                    if(searchTerm === ""){
                        return val
                    }else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                        return val
                    }
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
