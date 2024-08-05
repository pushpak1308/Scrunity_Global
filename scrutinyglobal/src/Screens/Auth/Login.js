import { FormHelperText, Grid, Paper } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Style.css";
import { MuiTextField } from "../../MuiComponents/MuiTextField/Index";
import WaitingModal from "../../Images/ModalImages/WaitingModal.png";
import AuthPage from "./AuthPage";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MuiContainedButton from "../../MuiComponents/MuiContainedButton/Index";
import SuccessErrorModal from "../../Components/CustomModals/SuccesErrorModal/Index";
import Loading from "../../Components/Loading/Index";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showWaitingModal, setShowWaitingModal] = useState(false);
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const onChangeUsername = (event) => {
    const value = event.target.value;
    setUsername(value);
    setLoginData({ ...loginData, username: value });
  };

  const onChangePassword = (event) => {
    const value = event.target.value;
    setPassword(value);
    setLoginData({ ...loginData, password: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((response) => {
        setIsLoading(false);

        if (response.status === 200) {
          navigate("/dashboard");
        }
        return response.json();
      })
      .catch((error) => {
        setIsLoading(false);
        handleWaitingModal();
        console.error(error);
      });
  };

  const handleWaitingModal = () => {
    setShowWaitingModal(true);
  };

  const handleGoToLogin = () => {
    navigate("/login");
  };

  const handleClose = () => {
    setShowWaitingModal(false);
  };

  const isEmailValid = emailRegex.test(username);
  const isFormValid = isEmailValid && password.trim() !== "";

  const form = (
    <form onSubmit={handleSubmit}>
      <MuiTextField
        type="text"
        value={username}
        label="Email or Number"
        onChange={onChangeUsername}
        error={!isEmailValid}
        helperText={!isEmailValid ? "Invalid email address" : ""}
      />

      <MuiTextField
        type="password"
        value={password}
        label="Password"
        onChange={onChangePassword}
      />

      <FormHelperText className="arimo-input-label helperText">
        <Link to="/forgotPassword" className="arimo-input-label helperText">
          forgot password?
        </Link>
      </FormHelperText>

      <Grid display="flex" justifyContent="center" alignItems="center">
        <MuiContainedButton
          type={"submit"}
          width={"40%"}
          buttonText={"Log In"}
          onClickFunction={handleSubmit}
          disabled={!isFormValid}
        />
      </Grid>

      <Grid container justifyContent="center" alignItems="center">
        <ArrowBackIcon className="goBackHome" />
        <Link to="/" style={{ textDecoration: "none" }}>
          <Paper elevation={0} className="goBackHome">
            Go back to Home
          </Paper>
        </Link>
      </Grid>
    </form>
  );

  const additionalComponent = (
    <SuccessErrorModal
      show={showWaitingModal}
      handleClose={handleClose}
      imageSrc={WaitingModal}
      heading={"Oops !! Waiting Approval."}
      clientName={"Your"}
      text={
        " approval request has not been accepted yet. Once you are approved try logging in again. Thanks for waiting."
      }
      buttonSecondaryText="Ok"
      handleModalButtonClick={handleGoToLogin}
    />
  );

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <AuthPage
          form={form}
          cardActionLinkText={" Sign up here"}
          cardActionLinkTo={"register"}
          cardActionText={"Are you new? "}
          heading={"Login"}
          additionalComponent={additionalComponent}
        />
      )}
    </>
  );
};

export default Login;
