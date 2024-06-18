import { Box, CardActions, FormHelperText, Grid } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Style.css";
import { MuiTextField } from "../../MuiComponents/MuiTextField/Index";
import AuthPage from "./AuthPage";
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
        sx={{ mt: 3, fontWeight: 550, fontSize: "2.5vh" }}
        onChange={onChangeUsername}
      />

      <MuiTextField
        name="password"
        type="password"
        value={password}
        label="Password"
        sx={{ mt: 3, fontWeight: 550, fontSize: "2.5vh" }}
        onChange={onChangePassword}
      />
      <Link to="/forgotPassword" className="arimo-input-label helperText">
        forgot password?
      </Link>
      <Grid display="flex" justifyContent="center" alignItems="center">
        <MuiContainedButton
          type={"submit"}
          width={{ xs: "80%", sm: "60%", md: "40%" }}
          buttonText={"Log In"}
          onClickFunction={handleSubmit}
        />
      </Grid>
    </form>
  );

  return (
    <AuthPage
      form={form}
      cardActionLinkText={"Sign up here"}
      cardActionLinkTo={"register"}
      cardActionText={"Are you new?"}
      heading={"Login"}
    />
  );
};

export default Login;
