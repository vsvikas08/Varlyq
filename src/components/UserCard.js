import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardHeader, CardMedia, Chip, IconButton } from '@mui/material';
import { MoreVert } from '@mui/icons-material';



const UserCard = (props) => {
    const {name,email} = props.employee;
    const {catchPhrase} = props.employee.company;
    // console.log('Company ',props.employee.company.catchPhrase);
    // console.log(catchPhrase);
    return (
        <Card sx={{ minWidth: 200 }}>
            <CardHeader
                action={
                <IconButton aria-label="settings">
                    <MoreVert />
                </IconButton>
                }
            />
            <CardMedia
                    component="img"
                    height="200"
                    image="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
            />
            <CardContent>
                <Typography sx={{textAlign: 'center'}} variant="h6" component="div">
                    {name}
                </Typography>
                <Chip  label={catchPhrase} color="primary" variant="outlined" />
                <Typography sx={{ mb: 1.5, textAlign:'center'}} color="text.secondary">
                    {email}
                </Typography>
            </CardContent>
        </Card>
    
    );
  }
  
  export default UserCard;
  