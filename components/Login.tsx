"use client";
import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link, Divider } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Swal from 'sweetalert2';
import { useRouter } from "next/navigation";


const Login = ({handleSignup}:any) => {
    const paperStyle={padding :20,width:300, margin:"0 auto",marginTop: 27 }
    const [username,setUsername] =React.useState<String>("");
    const [password,setPassword] =React.useState<String>("");
    const router = useRouter();

    const handleSubmit=() => {
        localStorage.setItem("username",username.toString());
        localStorage.setItem("password",password.toString());
        console.log("username: "+username);
        console.log("password: "+password);

        console.log("username: "+localStorage.getItem("signuser"));
        console.log("password: "+localStorage.getItem("signpassword"));

        if(username=="" ){
            showEmptyAlert("username");
        }else if(password==""){
            showEmptyAlert("password");
        }else if(username==="john" && password ==="1234"){
            router.push("/home");

        }else if(username===localStorage.getItem("signuser")&&password===localStorage.getItem("signpassword")){
            router.push("/home");
        }
        else
            showAlert();
    };

    const avatarStyle={background: "linear-gradient(to top left, #00ffff 0%, #6666ff 100%)"}
    const btnstyle={margin:'8px 0',background: "linear-gradient(to top left, #00ffff 0%, #6666ff 100%)"}

    function showAlert() {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Wrong username or password"
          });
      }

      function showEmptyAlert(field:String) {
        Swal.fire({
            icon: "info",
            title: "Incorrect "+field,
            text: "Please enter correct "+field
          });
      }
    return(
        <Grid item  xs={12} sm={4.5} md={6}>
            <Paper  style={paperStyle}>
                <Grid >
                     <Avatar style={avatarStyle}><LoginIcon /></Avatar>
                     
                    <h2>Sign In</h2>
                </Grid>
                <Divider sx={{mt:2}}/>
                <TextField size="small" label='Username' placeholder='Enter username' fullWidth required onChange={(event)=>{setUsername(event.target.value)}}/>
                <Divider sx={{mt:2}}/>
                <TextField size="small" label='Password' placeholder='Enter password' type='password' fullWidth required onChange={(event)=>{setPassword(event.target.value)}}/>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth onClick={handleSubmit}>Sign in</Button>
                <Typography >
                     <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
                <Typography > Do you have an account ?
                    <Button onClick={handleSignup} >
                    Sign Up 
                </Button>
                </Typography>
            </Paper>
        </Grid>
    );
};

export default Login;
