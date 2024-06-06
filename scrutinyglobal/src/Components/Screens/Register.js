import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../logo_sg.png";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  CardMedia,
  CardActions,
  Box,
} from "@mui/material";
import "./Login.css";
import AuthPage from "./Parts/AuthPage";
import StepForm from "./Parts/StepForm";
import CustomModal from "../MuiComponents/CustomModal";


const Register = () => {
  const navigate = useNavigate();
  const [formStep, setFormStep] = useState(0);
  const [id, setId] = useState(0);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [otp, setOtp] = useState('');
  const [verifyMethod, setVerifyMethod] = useState('email');

  const [formData, setFormData] = useState({
    name: "",
    number: "",
    username: "",
    password: "",
    confirmPassword: "",
    birthdate: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    educationLevel: "",
    accountType: "",
    monthlySalary: "",
  });

  const onChangeHandlers = {
    onChangeName: (e) => { setFormData({ ...formData, name: e.target.value }); setId(13); },
    onChangeNumber: (e) => setFormData({ ...formData, number: e.target.value }),
    onChangeUsername: (e) => setFormData({ ...formData, username: e.target.value }),
    onChangePassword: (e) => setFormData({ ...formData, password: e.target.value }),
    onChangeConfirmPassword: (e) => setFormData({ ...formData, confirmPassword: e.target.value }),
    onChangeBirthdate: (e) => setFormData({ ...formData, birthdate: e.target.value }),
    onChangeAddress: (e) => setFormData({ ...formData, address: e.target.value }),
    onChangeCity: (e) => setFormData({ ...formData, city: e.target.value }),
    onChangeState: (e) => setFormData({ ...formData, state: e.target.value }),
    onChangeZipcode: (e) => setFormData({ ...formData, zipcode: e.target.value }),
    onChangeCountry: (e) => setFormData({ ...formData, country: e.target.value }),
    onChangeEducationLevel: (e) => setFormData({ ...formData, educationLevel: e.target.value }),
    onChangeAccountType: (e) => setFormData({ ...formData, accountType: e.target.value }),
    onChangeMonthlySalary: (e) => setFormData({ ...formData, monthlySalary: e.target.value }),
  };

  const onChangeOTP = (otp) => {
    setOtp(otp);
  };

  const handleSubmit = () => {

    setLoading(true);
    console.log('submit')
    // const uniqueId = uuid();
    // const smallId = uniqueId.slice(0,8);
    // setId(smallId);

    // RegisterDataSetup(id,name,number,username,password);
    // const data = {
    //   id: id,
    //   name: name,
    //   username: username,
    //   password: password,
    //   number: number,
    // };

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

    // axios.post("http://localhost:8080/auth/signup", data);
  };

  const incrementFormStep = () => {
    const newStep = formStep + 1;
    setFormStep(newStep);
  };
  const decrementFormStep = () => {
    const newStep = formStep - 1;
    setFormStep(newStep);
  };
  const handleModalButtonClick = () => {
    setShow2(true)
    handleSubmit();
  }

  const handleClose = () => {
    setShow(false);
    setShow2(false);
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
  const handleToggleMethod = () => {
    setVerifyMethod((prev) => (prev === 'email' ? 'phone' : 'email'));
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
      <CardContent sx={{ mx: { xs: 3, sm: 7, md: 13 }, mb: 1 }}>
        <form onSubmit={handleSubmit}>
          <StepForm
            formStep={formStep}
            formData={formData}
            onChangeHandlers={onChangeHandlers}
            incrementFormStep={incrementFormStep}
            decrementFormStep={decrementFormStep}
            setShow={setShow}
          />
        </form>

        {/* <OtpModal show={show} handleClose={handleClose} otp={otp} onChangeOTP={onChangeOTP} verifyMethod={verifyMethod} handleToggleMethod={handleToggleMethod} handleModalButtonClick={handleModalButtonClick} />

          <SuccessModal showSuccess={show2} handleCloseSuccess={handleClose} heading={"Registration Successful 🎉"} button={"Continue"} /> */}
        <CustomModal
          show={show}
          handleClose={handleClose}
          heading={verifyMethod === "email" ? "Verify Email" : "Verify Number"}
          content={
            verifyMethod === "email"
              ? "We have sent you a code on forexample001@gmail.com"
              : "We have sent you a code on 87632XXXXX"
          }
          otpProps={{
            otp: otp,
            onChangeOTP: onChangeOTP,
            verifyMethod: verifyMethod,
            handleToggleMethod: handleToggleMethod,
          }}
          handleModalButtonClick={handleModalButtonClick}
          buttonText="Verify"
        />

        <CustomModal
          show={show2}
          handleClose={handleClose}
          heading="Registration Successful 🎉"
          // content="You have successfully registered."
          buttonText="Continue"
          buttonAction={() => {
            console.log("Navigating to login");
          }}
        />
      </CardContent>
      <CardActions
        className="arimo-input-label"
        sx={{ m: 2, width: "100%" }}
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
