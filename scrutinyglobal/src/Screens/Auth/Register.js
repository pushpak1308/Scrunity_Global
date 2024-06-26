import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Style.css";
import AuthPage from "./AuthPage";
import StepForm from "./StepForm";
import CustomModal from "../../MuiComponents/MuiModal/Index";
import OtpModal from "../../Components/OtpModal/Index";
import { useSelector, useDispatch } from 'react-redux';
// import { updateValues } from '../../Store/Slice/userSlice';
import { updateValues } from '../../Store/Slice/userSlice';

const Register = () => {
  const navigate = useNavigate();
  const [formStep, setFormStep] = useState(0);
  const [id, setId] = useState(0);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [otp, setOtp] = useState("");
  const [verifyMethod, setVerifyMethod] = useState("email");

  // const counter = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  const [otpVerificationData, setOtpVerificationData] = useState({
    email: "",
    number: "",
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    number: "",
    otp: "",
    countryCode: "",
    dob: "",
    country: "",
    state: "",
    city: "",
    zipcode: "",
    profession: "",
    experience: "",
    accountType: "",
    monthlySalary: "",
  });
  

  useEffect(() => {

    // console.log("in use effect");
    // console.log(counter);
    // dispatch(increment());
    // console.log(counter);
    // dispatch(increment());
    // console.log(counter);
    // dispatch(decrement());
    // console.log(counter);


  },[]);
  const onChangeHandlers = {
    onChangeName: (e) => {
      setFormData({ ...formData, name: e.target.value });
    },
    onChangeNumber: (e) => (
      setFormData({ ...formData, number: e.target.value }),
      setOtpVerificationData({ ...otpVerificationData, number: e.target.value })
    ),
    onChangeUsername: (e) => (
      setFormData({ ...formData, email: e.target.value }),
      setOtpVerificationData({ ...otpVerificationData, email: e.target.value })
    ),
    onChangePassword: (e) =>
      setFormData({ ...formData, password: e.target.value }),
    onChangeConfirmPassword: (e) =>
      setFormData({ ...formData, confirmPassword: e.target.value }),
<<<<<<< Updated upstream
    onChangeBirthdate: (e) => setFormData({ ...formData, dob: e.target.value }),
    onChangeAddress: (e) =>
=======
    onChangeBirthdate: (e) =>
      setFormData({ ...formData, dob: e.target.value }),
    onChangeAddress: (e) => 
>>>>>>> Stashed changes
      setFormData({ ...formData, address: e.target.value }),
    onChangeCity: (e) => setFormData({ ...formData, city: e.target.value }),
    onChangeState: (e) => setFormData({ ...formData, state: e.target.value }),
    onChangeZipcode: (e) =>
      setFormData({ ...formData, zipcode: e.target.value }),
    onChangeCountry: (e) => 
      setFormData({ ...formData, country: e.target.value }),
    onChangeProfession: (e) =>
      setFormData({ ...formData, profession: e.target.value }),
    onChangeExperience: (e) =>
      setFormData({ ...formData, experience: e.target.value }),
    onChangeAccountType: (e) =>
      setFormData({ ...formData, accountType: e.target.value }),
    onChangeMonthlySalary: (e) =>
      setFormData({ ...formData, monthlySalary: e.target.value }),
  };

  const onChangeOTP = (otp) => {
    setOtp(otp);
    setFormData({ ...formData, otp: otp });
  };

  const handleSubmit = () => {
    setShow(true);
    console.log("submit");
    console.log("otp data :- ", otpVerificationData);
    fetch("http://localhost:8080/ScrutinyGlobal/otpsend", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(otpVerificationData),
    });
  };

  const incrementFormStep = () => {
    dispatch(updateValues({name:"name",value:formData.name}));
    const newStep = formStep + 1;
    setFormStep(newStep);
  };
  const decrementFormStep = () => {
    const newStep = formStep - 1;
    setFormStep(newStep);
  };
  const handleModalButtonClick = () => {
    setShow2(true);
    const userData = formData;
    fetch("http://localhost:8080/ScrutinyGlobal/saveRegisterUser", {
      // mode: 'no-cors',
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
  };

  const handleClose = () => {
    setShow(false);
    setShow2(false);
  };

  const handleToggleMethod = () => {
    setVerifyMethod((prev) => (prev === "email" ? "phone" : "email"));
  };

  const handleGotToWaitingScreen = () => {
    navigate("/waiting-screen");
  };

  const form = (
    <form>
      <StepForm
        formStep={formStep}
        formData={formData}
        onChangeHandlers={onChangeHandlers}
        incrementFormStep={incrementFormStep}
        decrementFormStep={decrementFormStep}
        setShow={setShow}
        onClick={handleSubmit}
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
