import { Grid, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
import UserCard from './UserCard';
import Divider from '@mui/material/Divider';

const useStyles = makeStyles({
    gridContainer: {
        paddingLeft: "20px",
        paddingRight: "20px"
    }
})

const UserCardlist = (props) => {
    const classes = useStyles();
    const {employee} = props.state;
    console.log('Card STATE',employee);
    return (
        <Box>
            <Typography variant="h2" sx={{m: 3}}>
                HR Management List
            </Typography>
            <Divider sx={{m: 3}}/>

            {/* <TextField
                id="outlined-name"
                label="Name"
                size="small"
                sx={{mb:2,ml:3}}
            /> */}

            <Grid container spacing={4} className={classes.gridContainer}>
                {employee.map((emp) => {
                            return (
                                <Grid item xs={12} sm={6} md={4} lg={3}>
                                    <UserCard employee={emp} key={emp.id} />
                                </Grid>  
                            )
                        }
                        
                    )}
                
            </Grid>
        </Box>
        
    );
}

export default UserCardlist;
