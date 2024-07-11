import { FormHelperText, Grid, Paper } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Style.css";
import { MuiTextField } from "../../MuiComponents/MuiTextField/Index";
import AuthPage from "./AuthPage";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MuiContainedButton from "../../MuiComponents/MuiContainedButton/Index";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const onChangeUsername = (event) => {
    event.preventDefault();
    setUsername(event.target.value);
    setLoginData({ ...loginData, username: event.target.value });
  };

  const onChangePassword = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
    setLoginData({ ...loginData, password: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    }).then(function (response) {
      if (response.status === 200) {
        navigate("/dashboard");
      }
      return response.json();
    });
  };

  const form = (
    <form>
      <MuiTextField
        name="username"
        type="text"
        value={username}
        label="Email or Number"
        onChange={onChangeUsername}
      />

      <MuiTextField
        name="password"
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
          width={{ md: "40%" }}
          buttonText={"Log In"}
          onClickFunction={handleSubmit}
        />
      </Grid>

      <Grid item container justifyContent="center" alignItems="center">
        <ArrowBackIcon className="goBackHome" />
        <Paper elevation={0} className="goBackHome">
          Go back to Home
        </Paper>
      </Grid>
    </form>
  );

  return (
    <AuthPage
      form={form}
      cardActionLinkText={" Sign up here"}
      cardActionLinkTo={"register"}
      cardActionText={"Are you new? "}
      heading={"Login"}
    />
  );
};

export default Login;
