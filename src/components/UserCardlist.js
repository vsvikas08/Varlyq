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

function UserCardlist() {
    const classes = useStyles();
    return (
        <Grid container spacing={4} className={classes.gridContainer}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <UserCard />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <UserCard />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <UserCard />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <UserCard />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <UserCard />
            </Grid>
        </Grid>
    );
}

export default UserCardlist;
