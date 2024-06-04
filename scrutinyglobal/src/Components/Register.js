import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import logo from "../logo_sg.png";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Grid,
  InputLabel,
  CardMedia,
  CardActions,
  Box,
} from "@mui/material";
import "./Login.css";
import AuthPage from "./AuthPage";
import { CustomTextField } from "./Parts/CustomTextField";

const Register = () => {
  const navigate = useNavigate();
  const [formStep, setFormStep] = useState(0);
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [number, setNumber] = useState("");
  const [loading, setLoading] = useState(false);

  const onChangeName = (event) => {
    event.preventDefault();
    setName(event.target.value);
    setId(13);
  };
  console.log("formStep :>> ", formStep);

  const onChangeNumber = (event) => {
    event.preventDefault();
    setNumber(event.target.value);
  };

  const onChangePassword = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const onChangeConfirmPassword = (event) => {
    event.preventDefault();
    setConfirmPassword(event.target.value);
  };

  const onChangeUsername = (event) => {
    event.preventDefault();
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    // const uniqueId = uuid();
    // const smallId = uniqueId.slice(0,8);
    // setId(smallId);

    // RegisterDataSetup(id,name,number,username,password);
    const data = {
      id: id,
      name: name,
      username: username,
      password: password,
      number: number,
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

    axios.post("http://localhost:8080/auth/signup", data);
  };

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

  const renderFormContent = () => {
    switch (formStep) {
      case 0:
        return (
          <>
            <CustomTextField
              name="name"
              type="text"
              value={name}
              className="arimo-input-label"
              label="Name"
              sx={{ mt: 2, fontWeight: 550, fontSize: "2.5vh" }}
              onChange={onChangeName}
              required
            />
            <CustomTextField
              name="number"
              type="text"
              value={number}
              className="arimo-input-label"
              label="Number"
              sx={{ mt: 2, fontWeight: 550, fontSize: "2.5vh" }}
              onChange={onChangeNumber}
              required
            />
            <CustomTextField
              name="email"
              type="text"
              value={username}
              className="arimo-input-label"
              label="Email"
              sx={{ mt: 2, fontWeight: 550, fontSize: "2.5vh" }}
              onChange={onChangeUsername}
              required
            />
            <Grid>
              <CustomTextField
                name="password"
                type="password"
                value={password}
                className="arimo-input-label"
                label="Password"
                sx={{ mt: 2, fontWeight: 550, fontSize: "2.5vh" }}
                onChange={onChangePassword}
                required
              />
              <CustomTextField
                name="confirmPassword"
                type="password"
                value={confirmPassword}
                className="arimo-input-label"
                label="Confirm Password"
                sx={{ mt: 2, fontWeight: 550, fontSize: "2.5vh" }}
                onChange={onChangeConfirmPassword}
                required
              />
            </Grid>
            <Box display="flex" justifyContent="right" alignItems="center">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                onClick={setFormStep(formStep + 1)}
                sx={{
                  // Responsive width
                  width: { xs: "80%", sm: "60%", md: "40%" },
                  borderRadius: "10px",
                  boxShadow: "3px 3px 6px 0px #0cdaff",
                  "&:hover": {
                    boxShadow: "4px 4px 9px 0px #1976d2",
                  },
                  border: "1px solid white",
                  background: "rgb(83,89,231)",
                  background:
                    "linear-gradient(274deg, rgba(83,89,231,1) 0%, rgba(12,218,255,1) 100%)",
                }}
              >
                <Typography
                  variant="body1"
                  fontWeight="bold"
                  style={{ fontSize: "18px" }}
                >
                  Next
                </Typography>
              </Button>
            </Box>
          </>
        );
      case 1:
        return (
          <>
            <CustomTextField
              name="birthdate"
              type="text"
              value={name}
              className="arimo-input-label"
              label="Birth Date"
              sx={{ mt: 2, fontWeight: 550, fontSize: "2.5vh" }}
              onChange={onChangeName}
              required
            />
            <CustomTextField
              name="number"
              type="text"
              value={number}
              className="arimo-input-label"
              label="Number"
              sx={{ mt: 2, fontWeight: 550, fontSize: "2.5vh" }}
              onChange={onChangeNumber}
              required
            />
            <CustomTextField
              name="email"
              type="text"
              value={username}
              className="arimo-input-label"
              label="Email"
              sx={{ mt: 2, fontWeight: 550, fontSize: "2.5vh" }}
              onChange={onChangeUsername}
              required
            />
            <Grid>
              <CustomTextField
                name="password"
                type="password"
                value={password}
                className="arimo-input-label"
                label="Password"
                sx={{ mt: 2, fontWeight: 550, fontSize: "2.5vh" }}
                onChange={onChangePassword}
                required
              />
              <CustomTextField
                name="confirmPassword"
                type="password"
                value={confirmPassword}
                className="arimo-input-label"
                label="Confirm Password"
                sx={{ mt: 2, fontWeight: 550, fontSize: "2.5vh" }}
                onChange={onChangeConfirmPassword}
                required
              />
            </Grid>
            <Box display="flex" justifyContent="right" alignItems="center">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{
                  // Responsive width
                  width: { xs: "80%", sm: "60%", md: "40%" },
                  borderRadius: "10px",
                  boxShadow: "3px 3px 6px 0px #0cdaff",
                  "&:hover": {
                    boxShadow: "4px 4px 9px 0px #1976d2",
                  },
                  border: "1px solid white",
                  background: "rgb(83,89,231)",
                  background:
                    "linear-gradient(274deg, rgba(83,89,231,1) 0%, rgba(12,218,255,1) 100%)",
                }}
              >
                <Typography
                  variant="body1"
                  fontWeight="bold"
                  style={{ fontSize: "18px" }}
                >
                  Next
                </Typography>
              </Button>
            </Box>
          </>
        );
    }
  };

  const content = (
    <Card
      style={{
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderTopLeftRadius: "10%",
        borderBottomLeftRadius: "10%",
        height: "100%",
        position: "relative",
      }}
    >
      <CardContent>
        <Typography
          className="vollkorn-Login"
          sx={{ fontWeight: "700", fontSize: "4vh", mt: 1 }}
          style={{ fontFamily: "Vollkorn ,serif" }}
        >
          Register
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        image={logo}
        sx={{
          width: "10vh",
          position: "absolute",
          right: "1vh",
          top: "1vh",
        }}
      />
      <CardContent sx={{ mx: 13, mb: 1 }}>
        <form onSubmit={handleSubmit}>{renderFormContent()}</form>
      </CardContent>
      <CardActions className="arimo-input-label" style={{ fontSize: "2vh" }}>
        {"Already a member?"}
        <Link
          to="/login"
          style={{
            textDecoration: "none",
            fontWeight: "bold",
            color: "#0cdaff",
            cursor: "pointer",
          }}
        >
          {" "}
          Sign in here
        </Link>
      </CardActions>
    </Card>
  );

  return <AuthPage content={content} />;
};

export default Register;
