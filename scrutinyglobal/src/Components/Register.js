import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import backgroundImage from "../background.jpg";
import logo from "../logo_sg.png";
// import { uuid } from "uuidv4";
import { Card, CardContent, Typography, TextField, Button, Grid, InputLabel, CardMedia } from '@mui/material';

const Register = () => {
    
    const navigate = useNavigate();

    const [id,setId] = useState(0);
    const [name,setName] = useState("");
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const [number, setNumber] = useState("");
    const [loading,setLoading] = useState(false);



    const onChangeName = (event) => {
        event.preventDefault();
        setName(event.target.value);
        setId(13);
    }

    const onChangeNumber = (event) => {
        event.preventDefault();
        setNumber(event.target.value);
    }

    const onChangePassword = (event) => {
        event.preventDefault();
        setPassword(event.target.value);
    }

    const onChangeConfirmPassword = (event) => {
        event.preventDefault();
        setConfirmPassword(event.target.value);
    }

    const onChangeUsername = (event) => {
        event.preventDefault();
        setUsername(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);
        // const uniqueId = uuid();
        // const smallId = uniqueId.slice(0,8);
        // setId(smallId);
        
        // RegisterDataSetup(id,name,number,username,password);
        const data = {
            "id": id,
            "name": name,
            "username": username,
            "password": password,
            "number": number
        };

        // const userData = ;
        // fetch('http://localhost:8080/auth/signup',{
        //     // mode: 'no-cors',
        //     method : 'POST',
        //     headers : {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(data)
        // })
        // .then(response => response.json())
        // .then(data => console.log('User created:', data))
        // .catch(error => console.error('Error creating user:', error));
        // navigate("/login");

        axios.post('http://localhost:8080/auth/signup',data);
    }

    // const setUserData = (id,name,number,username,password) => 
    // {
    //     const data = {
    //         id: id,
    //         name: name,
    //         username: username,
    //         password: password,
    //         number: number
    //     };

    //     const userData = {
    //         method : 'POST',
    //         headers : {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(data)
    //     };
    //     fetch('http//localhost:8080/auth/signup',userData)
    //     .then(response => response.json())
    //     .then(data => console.log('User created:', data))
    //     .catch(error => console.error('Error creating user:', error));
    // }

    return(
        <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh', backgroundImage: 'url('+ backgroundImage +')' }}>
      <Grid item xs={10} sm={6} md={4}>
        <Card sx={{px:2,backgroundColor : "#161616",opacity: 0.9}}>
        <CardMedia image = {require("../logo_sg.png")} style={{height:0}} />
          <CardContent>
            <Typography sx={{fontSize:"20px",textAlign:"center"}}>         
              Sign In
            </Typography>
            <form onSubmit={handleSubmit}>
            <InputLabel htmlFor="name" sx={{fontSize:"18px" , color:"#FFFFFF" , fontFamily:"Arimo"}}>Name*</InputLabel>
              <TextField
                name="name"
                value={name}
                onChange={onChangeName}
                fullWidth
                margin="normal"
                size="small"
                InputProps={{
                    style: {
                        backgroundColor:"#D6E6EF",
                        borderRadius:"10px"    
                    },
                }}
                sx={{color : "#DDDCDC", opacity: 0.11}}
                required
              />
              <InputLabel htmlFor="username"  sx={{fontSize:"18px", color:"#FFFFFF"}}>Email*</InputLabel>
              <TextField
                
                type="email"
                name="username"
                value={username}
                onChange={onChangeUsername}
                margin="normal"
                size="small"
                InputProps={{
                    style: {
                        backgroundColor:"#D6E6EF",
                        borderRadius:"10px"
                    }
                }}
                sx={{color : "#DDDCDC", opacity: 0.11}}
                required
              />
              <Button>Verify</Button>
              <InputLabel htmlFor="number"  sx={{fontSize:"18px", color:"#FFFFFF"}}>Number</InputLabel>
              <TextField
                
                name="number"
                value={number}
                onChange={onChangeNumber}
                margin="normal"
                size="small"
                InputProps={{
                    style: {
                        backgroundColor:"#D6E6EF",
                        borderRadius:"10px"
                    }
                }}
                sx={{color : "#DDDCDC", opacity: 0.11}}
                required
              />
              <Button>Verify</Button>
              
              <InputLabel htmlFor="password"  sx={{fontSize:"18px", color:"#FFFFFF"}}>Password*</InputLabel>
              <TextField
                
                type="password"
                name="password"
                value={password}
                onChange={onChangePassword}
                fullWidth
                margin="normal"
                size="small"
                InputProps={{
                    style: {
                        backgroundColor:"#D6E6EF",
                        borderRadius:"10px"
                    }
                }}
                sx={{color : "#DDDCDC", opacity: 0.11}}
                required
              />
              <InputLabel htmlFor="confirmPassword"  sx={{fontSize:"18px", color:"#FFFFFF"}}>Confirm Password*</InputLabel>
              <TextField
                
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={onChangeConfirmPassword}
                fullWidth
                margin="normal"
                size="small"
                InputProps={{
                    style: {
                        backgroundColor:"#D6E6EF",
                        borderRadius:"10px"
                    }
                }}
                sx={{color : "#DDDCDC", opacity: 0.11}}
                required    
              />
              <Button type="submit" margin="1px" justifyContent="center" alignItems="center" variant="contained" sx={{mt:1}}>
                Sign Up
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
    );
}

export default Register;