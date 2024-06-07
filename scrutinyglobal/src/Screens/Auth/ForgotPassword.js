import { Box, CardActions, FormHelperText, Grid } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Style.css";
import { MuiTextField } from "../../MuiComponents/MuiTextField/Index";
import AuthPage from "./AuthPage";
import MuiContainedButton from "../../MuiComponents/MuiContainedButton/Index";

const ForgotPassword = (props) => {
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [isItEmail, setIsItEmail] = useState(true);

  const navigate = useNavigate();

  const onChangeEmail = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const onChangeNumber = (event) => {
    event.preventDefault();
    setNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/resetPassword");
  };

  const style = { mt: 3, fontWeight: 550, fontSize: "2.5vh" };

  const form = (
    <form onSubmit={handleSubmit}>
      {isItEmail ? (
        <MuiTextField
          name="email"
          type="text"
          value={email}
          className="arimo-input-label"
          label="Email"
          sx={style}
          onChange={onChangeEmail}
          required
        />
      ) : (
        <MuiTextField
          name="number"
          type="text"
          value={number}
          className="arimo-input-label"
          label="Number"
          sx={style}
          onChange={onChangeNumber}
          required
        />
      )}

      <FormHelperText
        sx={{ mb: 6 }}
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
      cardActionsLinkText={"Go Back to Log In"}
      cardActionsLinkTo={"login"}
      // cardActionText={""}
    />
  );
};

export default ForgotPassword;
