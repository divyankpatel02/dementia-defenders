"use client";
import { Avatar, Button, Card, CardActionArea, CardContent, CardMedia, Grid, IconButton, Link, Paper } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';
import Login from "@/components/Login";
import Signup from "@/components/SignupPage";
import SwipeableTextMobileStepper from "@/components/SignupPage";
import Carousel from 'react-material-ui-carousel';

const StartPage = () => {
  const [login, setLogin] = React.useState(false);
  const [register, setRegister] = React.useState(false);

  const handleLogin=() => {
    setLogin(true);
    setRegister(false);
  };
  
  const handleSignup=() => {
    setRegister(true);
    setLogin(false);
  };
    
  const imageList = [
    {
      description: "",
      url: "info.jpg"
    },
    {
      description: "",
      url: "q1.jpg"
    },
    {
      description: "",
      url: "q2.jpg"
    },
    {
      description: "",
      url: "q3.jpg"
    },
    {
      description: "",
      url: "q4.jpg"
    }
]
      return (
    <Box sx={{ flexGrow: 1,height:'100vh', backgroundImage:'url(dementia.jpeg)',backgroundSize:'cover',backgroundPosition:'center'}} >
   
      <AppBar position="static" style={{background: "linear-gradient(to top left, #00ffff 0%, #6666ff 100%)"}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Grid container sx={{ flexGrow: 1 }}>
            <Grid>
              <Avatar src="dementialogo.jpeg"
              sx={{ width: 40, height: 40 }}>
              </Avatar>
              
            </Grid>
  
            <Grid>
              <Typography variant="h5" sx={{mt:1,ml:1}}>
                DEMENTIA DEFENDERS
              </Typography>
            </Grid>
          </Grid>
          </Typography>
          <Button  variant="contained" color="primary" onClick={handleLogin}>
            SignIn
          </Button>
          <Button variant="contained" color="primary" sx={{ m : 2}} onClick={handleSignup}>
            Register
          </Button>
          
        </Toolbar>
      </AppBar>
      <Grid container sx={{ flexGrow: 1 }}>
        <Grid item xs={12} sm={4.5} md={6} >
      <Carousel autoPlay duration={1} sx={{mt:3.5,ml:5,width: '100vh'}}  >
    
      
      {imageList.map( (item, i) => 
                    (
                       <Card key={i} >
                       
                         <CardMedia
                           component="img"
                           image={item.url}
                           key={i}
                           sx={{height: '62vh', width: '100%'}}
                         />
                     </Card>
                    ))}
    
      
        </Carousel>
        </Grid>
      {login && (<Login handleSignup={handleSignup}/>)}
      {register && (<Signup/>)}
      </Grid>
    </Box>
  );

}

export default StartPage
