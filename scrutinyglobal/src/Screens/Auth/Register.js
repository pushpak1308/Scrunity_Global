import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { CardActions } from "@mui/material";
import "./Style.css";
import AuthPage from "./AuthPage";
import StepForm from "./StepForm";
import CustomModal from "../../MuiComponents/MuiModal/Index";
import OtpModal from "../../Components/OtpModal/Index";

const Register = () => {
  const navigate = useNavigate();
  const [formStep, setFormStep] = useState(0);
  const [id, setId] = useState(0);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [otp, setOtp] = useState("");
  const [verifyMethod, setVerifyMethod] = useState("email");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    number: "",
    countryCode: "",
    dob: "",
    country: "",
    state: "",
    city: "",
    zipcode: "",
    profession: "",
    accountType: "",
    monthlySalary: "",
  });

  const onChangeHandlers = {
    onChangeName: (e) => {
      setFormData({ ...formData, name: e.target.value });
      setId(13);
    },
    onChangeNumber: (e) => setFormData({ ...formData, number: e.target.value }),
    onChangeUsername: (e) =>
      setFormData({ ...formData, email: e.target.value }),
    onChangePassword: (e) =>
      setFormData({ ...formData, password: e.target.value }),
    onChangeConfirmPassword: (e) =>
      setFormData({ ...formData, confirmPassword: e.target.value }),
    onChangeBirthdate: (e) =>
      setFormData({ ...formData, dob: e.target.value }),
    onChangeAddress: (e) =>
      setFormData({ ...formData, address: e.target.value }),
    onChangeCity: (e) => setFormData({ ...formData, city: e.target.value }),
    onChangeState: (e) => setFormData({ ...formData, state: e.target.value }),
    onChangeZipcode: (e) =>
      setFormData({ ...formData, zipcode: e.target.value }),
    onChangeCountry: (e) =>
      setFormData({ ...formData, country: e.target.value }),
    onChangeProfession: (e) =>
      setFormData({ ...formData, profession: e.target.value }),
    onChangeAccountType: (e) =>
      setFormData({ ...formData, accountType: e.target.value }),
    onChangeMonthlySalary: (e) =>
      setFormData({ ...formData, monthlySalary: e.target.value }),
  };

  const onChange = () => {
    
  }

  const onChangeOTP = (otp) => {
    setOtp(otp);
  };

  const handleSubmit = () => {
    setLoading(true);
    console.log("submit");
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

    const userData = formData;
    fetch('http://localhost:8080/ScrutinyGlobal/saveRegisterUser',{
        // mode: 'no-cors',
        method : 'POST',
        headers : {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
    })
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
    setShow2(true);
    handleSubmit();
  };

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
    setVerifyMethod((prev) => (prev === "email" ? "phone" : "email"));
  };

  const handleGotToWaitingScreen = () => {
    navigate("/waiting-screen");
  };

  const form = (
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
  );
  const additionalComponent = (
    <>
      <OtpModal
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
        buttonPrimaryText="Continue"
        handleModalButtonClick={handleGotToWaitingScreen}
      />
    </>
  );

  return (
    <AuthPage
      form={form}
      heading={"Register"}
      cardActionLinkText={"Sign in here"}
      cardActionLinkTo={"login"}
      cardActionText={"Already a member?"}
      additionalComponent={additionalComponent}
    />
  );
};

export default Register;
