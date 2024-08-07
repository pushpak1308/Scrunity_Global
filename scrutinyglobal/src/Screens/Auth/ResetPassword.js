import { Box } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Auth/Style.css";
import { MuiTextField } from "../../MuiComponents/MuiTextField/Index";
import AuthPage from "./AuthPage";
import MuiModal from "../../MuiComponents/MuiModal/Index";
import MuiContainedButton from "../../MuiComponents/MuiContainedButton/Index";

const MIN_PASSWORD_LENGTH = 6;

const ResetPassword = ({}) => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const onChangeNewPassword = (event) => {
    const value = event.target.value;
    setNewPassword(value);
    validatePassword(value, confirmPassword);
  };

  const onChangeConfirmPassword = (event) => {
    const value = event.target.value;
    setConfirmPassword(value);
    validatePassword(newPassword, value);
  };

  const validatePassword = (newPassword, confirmPassword) => {
    const newErrors = {};
    if (newPassword.length < MIN_PASSWORD_LENGTH) {
      newErrors.newPassword = `Password must be at least ${MIN_PASSWORD_LENGTH} characters long`;
    }
    if (newPassword !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validatePassword(newPassword, confirmPassword);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // Simulate password reset and show the success modal
    setShow(true);
    setErrors({});
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
        onChange={onChangeNewPassword}
        error={!!errors.newPassword}
        helperText={errors.newPassword || ""}
      />

      <MuiTextField
        name="confirmPassword"
        type="password"
        value={confirmPassword}
        label="Confirm Password"
        onChange={onChangeConfirmPassword}
        error={!!errors.confirmPassword}
        helperText={errors.confirmPassword || ""}
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

  const handleGoToLogin = () => {
    navigate("/login");
  };

  const additionalComponent = (
    <MuiModal
      show={show}
      defaultImage={true}
      handleClose={handleClose}
      heading={
        <>
          Password Successfully
          <br /> changed 🎉
        </>
      }
      buttonPrimaryText="Go to Log In"
      handleModalButtonClick={handleGoToLogin}
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
