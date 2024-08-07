import { Box, CardActions, FormHelperText, Grid } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Style.css";
import { MuiTextField } from "../../MuiComponents/MuiTextField/Index";
import AuthPage from "./AuthPage";
import MuiContainedButton from "../../MuiComponents/MuiContainedButton/Index";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ForgotPassword = (props) => {
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [isItEmail, setIsItEmail] = useState(true);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
    validateEmail(event.target.value);
  };

  const onChangeNumber = (event) => {
    setNumber(event.target.value);
    validateNumber(event.target.value);
  };

  const validateEmail = (email) => {
    if (!emailRegex.test(email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Invalid email address",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
    }
  };

  const validateNumber = (number) => {
    if (number.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        number: "Number is required",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, number: "" }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = {};
    if (isItEmail) {
      if (!emailRegex.test(email)) {
        validationErrors.email = "Invalid email address";
      }
    } else {
      if (number.trim() === "") {
        validationErrors.number = "Number is required";
      }
    }
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    navigate("/resetPassword");
  };

  const form = (
    <form onSubmit={handleSubmit}>
      {isItEmail ? (
        <MuiTextField
          name="email"
          type="text"
          value={email}
          label="Email"
          onChange={onChangeEmail}
          error={!!errors.email}
          helperText={errors.email || ""}
        />
      ) : (
        <MuiTextField
          name="number"
          type="text"
          value={number}
          label="Number"
          onChange={onChangeNumber}
          error={!!errors.number}
          helperText={errors.number || ""}
        />
      )}

      <FormHelperText
        className="arimo-input-label helperText"
        onClick={() => setIsItEmail(!isItEmail)}
      >
        {isItEmail ? "Use number instead" : "Use email instead"}
      </FormHelperText>

      <Grid className="flex-and-center">
        <MuiContainedButton
          type="submit"
          buttonText="Send Reset Link"
          width={true}
        />
      </Grid>
    </form>
  );

  return (
    <AuthPage
      form={form}
      heading={"Reset Password"}
      cardActionLinkText={"Go Back to Log In"}
      cardActionLinkTo={"login"}
    />
  );
};

export default ForgotPassword;
