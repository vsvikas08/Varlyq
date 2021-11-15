import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import UserCard from './UserCard';

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
    );
}

export default UserCardlist;
