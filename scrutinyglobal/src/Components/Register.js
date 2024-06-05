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
import { CustomDropdown } from "./Parts/CustomDropDown";

const Register = () => {
  const navigate = useNavigate();
  const [formStep, setFormStep] = useState(0);
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [number, setNumber] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [country, setCountry] = useState("");
  const [educationLevel, setEducationLevel] = useState("");
  const [accountType, setAccountType] = useState("");
  const [monthlySalary, setMonthlySalary] = useState("");
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

  const onChangeBirthdate = (event) => {
    event.preventDefault();
    setBirthdate(event.target.value);
  };

  const onChangeAddress = (event) => {
    event.preventDefault();
    setAddress(event.target.value);
  };
  const onChangeCity = (event) => {
    event.preventDefault();
    setCity(event.target.value);
  };
  const onChangeState = (event) => {
    event.preventDefault();
    setState(event.target.value);
  };
  const onChangeZipcode = (event) => {
    event.preventDefault();
    setZipcode(event.target.value);
  };
  const onChangeCountry = (event) => {
    event.preventDefault();
    setCountry(event.target.value);
  };
  const onChangeEducationLevel = (event) => {
    event.preventDefault();
    setEducationLevel(event.target.value);
  };
  const onChangeAccountType = (event) => {
    event.preventDefault();
    setAccountType(event.target.value);
  };
  const onChangeMonthlySalary = (event) => {
    event.preventDefault();
    setMonthlySalary(event.target.value);
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

  const incrementFormStep = () => {
    const newStep = formStep + 1;
    setFormStep(newStep);
  };
  const decrementFormStep = () => {
    const newStep = formStep - 1;
    setFormStep(newStep);
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
              sx={{ mt: 1, fontWeight: 550, fontSize: "2.5vh" }}
              onChange={onChangeName}
              required
            />
            <CustomTextField
              name="number"
              type="text"
              value={number}
              className="arimo-input-label"
              label="Number"
              sx={{ mt: 1, fontWeight: 550, fontSize: "2.5vh" }}
              onChange={onChangeNumber}
              required
            />
            <CustomTextField
              name="email"
              type="text"
              value={username}
              className="arimo-input-label"
              label="Email"
              sx={{ mt: 1, fontWeight: 550, fontSize: "2.5vh" }}
              onChange={onChangeUsername}
              required
            />
            <Grid container spacing={5}>
              <Grid item xs={6}>
                <CustomTextField
                  name="password"
                  type="password"
                  value={password}
                  className="arimo-input-label"
                  label="Password"
                  sx={{ mt: 1, fontWeight: 550, fontSize: "2.5vh" }}
                  onChange={onChangePassword}
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <CustomTextField
                  name="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  className="arimo-input-label"
                  label="Confirm Password"
                  sx={{ mt: 1, fontWeight: 550, fontSize: "2.5vh" }}
                  onChange={onChangeConfirmPassword}
                  required
                />
              </Grid>
            </Grid>
            <Box display="flex" justifyContent="right" alignItems="center">
              <Button
                type="button"
                variant="contained"
                color="primary"
                onClick={() => {
                  incrementFormStep();
                }}
                sx={{
                  // Responsive widths
                  width: { xs: "60%", sm: "40%", md: "20%" },
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
                  style={{ fontSize: "16px" }}
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
              type="date"
              value={birthdate}
              className="arimo-input-label"
              label="Birth Date"
              sx={{ mt: 1, fontWeight: 550, fontSize: "2.5vh" }}
              onChange={onChangeBirthdate}
              required
            />
            <CustomTextField
              name="address"
              type="text"
              value={address}
              className="arimo-input-label"
              label="Address"
              sx={{ mt: 1, fontWeight: 550, fontSize: "2.5vh" }}
              onChange={onChangeAddress}
              required
            />

            <Grid container spacing={2}>
              <Grid item xs={6}>
                <CustomDropdown
                  name="city"
                  value={city}
                  onChange={onChangeCity}
                  options={["New York", "Los Angeles", "Chicago"]} // Example options
                  label="City"
                  className="arimo-input-label"
                  sx={{ mt: 1, fontWeight: 550, fontSize: "2.5vh" }}
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <CustomDropdown
                  name="state"
                  value={state}
                  onChange={onChangeState}
                  options={["California", "New York", "Texas"]} // Example options
                  label="State/Province"
                  className="arimo-input-label"
                  sx={{ mt: 1, fontWeight: 550, fontSize: "2.5vh" }}
                  required
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <CustomTextField
                  name="zipcode"
                  type="text"
                  value={zipcode}
                  className="arimo-input-label"
                  label="Zip Code"
                  sx={{ mt: 1, fontWeight: 550, fontSize: "2.5vh" }}
                  onChange={onChangeZipcode}
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <CustomDropdown
                  name="country"
                  value={country}
                  onChange={onChangeCountry}
                  options={["USA", "Canada", "UK"]} // Example options
                  label="Country"
                  className="arimo-input-label"
                  sx={{ mt: 1, fontWeight: 550, fontSize: "2.5vh" }}
                  required
                />
              </Grid>
            </Grid>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mt={2}
            >
              <Button
                type="button"
                variant="contained"
                color="primary"
                onClick={() => decrementFormStep()}
                sx={{
                  borderRadius: "10px",
                  boxShadow: "3px 3px 6px 0px #0cdaff",
                  "&:hover": {
                    boxShadow: "4px 4px 9px 0px #1976d2",
                  },
                  border: "1px solid white",
                  background:
                    "linear-gradient(274deg, rgba(83,89,231,1) 0%, rgba(12,218,255,1) 100%)",
                }}
              >
                <Typography
                  variant="body1"
                  fontWeight="bold"
                  style={{ fontSize: "16px" }}
                >
                  Previous
                </Typography>
              </Button>
              <Button
                type="button"
                variant="contained"
                color="primary"
                onClick={() => incrementFormStep()}
                sx={{
                  borderRadius: "10px",
                  boxShadow: "3px 3px 6px 0px #0cdaff",
                  "&:hover": {
                    boxShadow: "4px 4px 9px 0px #1976d2",
                  },
                  border: "1px solid white",
                  background:
                    "linear-gradient(274deg, rgba(83,89,231,1) 0%, rgba(12,218,255,1) 100%)",
                }}
              >
                <Typography
                  variant="body1"
                  fontWeight="bold"
                  style={{ fontSize: "16px" }}
                >
                  Next
                </Typography>
              </Button>
            </Box>
          </>
        );
      case 2:
        return (
          <>
            <CustomDropdown
              name="educationLevel"
              value={educationLevel}
              onChange={onChangeEducationLevel}
              options={["B.Tech", "BCA", "Law"]} // Example options
              label="Education Level"
              className="arimo-input-label"
              sx={{ mt: 1, fontWeight: 550, fontSize: "2.5vh" }}
              required
            />
            <CustomTextField
              name="accountType"
              type="text"
              value={accountType}
              className="arimo-input-label"
              label="Account Type"
              sx={{ mt: 1, fontWeight: 550, fontSize: "2.5vh" }}
              onChange={onChangeAccountType}
              required
            />
            <CustomTextField
              name="monthlySalary"
              type="text"
              value={monthlySalary}
              className="arimo-input-label"
              label="Monthly Salary"
              sx={{ mt: 1, fontWeight: 550, fontSize: "2.5vh" }}
              onChange={onChangeMonthlySalary}
              required
            />
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mt={2}
            >
              <Button
                type="button"
                variant="contained"
                color="primary"
                onClick={() => decrementFormStep()}
                sx={{
                  borderRadius: "10px",
                  boxShadow: "3px 3px 6px 0px #0cdaff",
                  "&:hover": {
                    boxShadow: "4px 4px 9px 0px #1976d2",
                  },
                  border: "1px solid white",
                  background:
                    "linear-gradient(274deg, rgba(83,89,231,1) 0%, rgba(12,218,255,1) 100%)",
                }}
              >
                <Typography
                  variant="body1"
                  fontWeight="bold"
                  style={{ fontSize: "16px" }}
                >
                  Previous
                </Typography>
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{
                  borderRadius: "10px",
                  boxShadow: "3px 3px 6px 0px #0cdaff",
                  "&:hover": {
                    boxShadow: "4px 4px 9px 0px #1976d2",
                  },
                  border: "1px solid white",
                  background:
                    "linear-gradient(274deg, rgba(83,89,231,1) 0%, rgba(12,218,255,1) 100%)",
                }}
              >
                <Typography
                  variant="body1"
                  fontWeight="bold"
                  style={{ fontSize: "16px" }}
                >
                  Save
                </Typography>
              </Button>
            </Box>
          </>
        );
      default:
        return null;
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
      <CardContent sx={{ mx: { xs: 5, sm: 7, md: 13 }, mb: 1 }}>
        <form onSubmit={handleSubmit}>{renderFormContent()}</form>
      </CardContent>
      <CardActions
        className="arimo-input-label"
        sx={{ mb: 1 }}
        style={{
          justifyContent: "center",
          alignItems: "center",
          fontSize: "2vh",
        }}
      >
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
