import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { CardHeader, CardMedia, Chip } from '@mui/material';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);
const useStyles = makeStyles({
    chipContainer: {
        
      }
})

function UserCard() {
    const classes = useStyles();
    return (
        <Card sx={{ minWidth: 200 }}>
            <CardMedia
                    component="img"
                    height="200"
                    image="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
            />
            <CardContent>
                <Typography sx={{textAlign: 'center'}} variant="h6" component="div">
                    Vikas Kumar
                </Typography>
                <Chip  label="UI Designer" color="primary" variant="outlined" />
                <Typography sx={{ mb: 1.5 },{textAlign:'center'}} color="text.secondary">
                    vikas3517@gmail.com
                </Typography>
            </CardContent>
            {/* <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions> */}
        </Card>
    
    );
  }
  
  export default UserCard;
  