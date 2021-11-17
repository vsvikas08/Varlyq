import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardMedia, Chip, IconButton } from '@mui/material';
import { MoreVert } from '@mui/icons-material';
import { Box } from '@mui/system';


const UserCard = (props) => {
    // console.log(props.employee.id);
    const {name,email} = props.employee;
    const {catchPhrase} = props.employee.company;
    // console.log('Company ',props.employee.company.catchPhrase);
    // console.log(catchPhrase);
    return (
        <Box >
            <Card sx={{ minWidth: 200 }} style={{borderRadius: 25}}>
                
                <IconButton sx={{float: 'right',mt: 1,mr: 1}} aria-label="settings">
                    <MoreVert />
                </IconButton>
                    
                <CardMedia
                        // component="img"
                        style={{height: 120, width: 150, marginLeft: 'auto', marginRight: 'auto', marginTop: '1em'}}
                        image="https://cdn3.vectorstock.com/i/1000x1000/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg/1000x1080"
                />
                <CardContent sx={{textAlign: 'center'}} style={{marginLeft: 'auto',marginRight: 'auto'}}>
                    <Typography  variant="h6" component="div">
                        {name}
                    </Typography>
                    <Chip  label={catchPhrase} style={{backgroundColor: '#b2ebf2'}}/>
                    <Typography sx={{ mt: 1.5}} color="text.secondary">
                        {email}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
        
    
    );
  }
  
  export default UserCard;
  