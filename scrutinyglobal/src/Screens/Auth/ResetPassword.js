import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  FormHelperText,
  Grid,
  Modal,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../logo_sg.png";
import "../Auth/Style.css";
import { MuiTextField } from "../../MuiComponents/MuiTextField/Index";
import AuthPage from "./AuthPage";
import MuiModal from "../../MuiComponents/MuiModal/Index";
import MuiContainedButton from "../../MuiComponents/MuiContainedButton/Index";

const ResetPassword = ({}) => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const onChangeNewPassword = (event) => {
    event.preventDefault();
    setNewPassword(event.target.value);
  };

  const onChangeConfirmPassword = (event) => {
    event.preventDefault();
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShow(true);
  };

  const handleModalButtonClick = () => {
    setShow(false);
    navigate("/login");
    // setView("login");
  };

  const handleClose = () => {
    setShow(false);
  };

  const form = (
    <form onSubmit={handleSubmit}>
      <MuiTextField
        name="newPassword"
        type="password"
        value={newPassword}
        label="New Password"
        sx={{ mt: 3, fontWeight: 550, fontSize: "2.5vh" }}
        onChange={onChangeNewPassword}
      />

      <MuiTextField
        name="confirmPassword"
        type="password"
        value={confirmPassword}
        label="Confirm Password"
        sx={{ mt: 3, fontWeight: 550, fontSize: "2.5vh" }}
        onChange={onChangeConfirmPassword}
      />

      <Box display="flex" justifyContent="center" alignItems="center">
        <MuiContainedButton
          type="submit"
          buttonText="Save Password"
          width={true}
          mt={4}
        />
      </Box>
    </form>
  );

  const additionalComponent = (
    <MuiModal
      show={show}
      handleClose={handleClose}
      heading={"Password Successfully changed 🎉"}
      buttonPrimaryText="Go to Log In"
      buttonAction={() => {
        console.log("Navigating to login");
      }}
    />
  );

  return (
    <AuthPage
      form={form}
      heading={"Reset Password"}
      cardActionLinkText={"Go Back to Log In"}
      cardActionLinkTo={"login"}
      additionalComponent={additionalComponent}
    />
  );
};

export default ResetPassword;
