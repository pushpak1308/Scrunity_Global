import { Box, CardActions, FormHelperText } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Style.css";
import { MuiTextField } from "../../MuiComponents/MuiTextField/Index";
import AuthPage from "./AuthPage";
import MuiContainedButton from "../../MuiComponents/MuiContainedButton/Index";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onChangeUsername = (event) => {
    event.preventDefault();
    setUsername(event.target.value);
  };

  const onChangePassword = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/home");
  };

  const form = (
    <form onSubmit={handleSubmit}>
      <MuiTextField
        name="username"
        type="text"
        value={username}
        className="arimo-input-label"
        label="Email or Number"
        sx={{ mt: 3, fontWeight: 550, fontSize: "2.5vh" }}
        onChange={onChangeUsername}
        required
      />

      <MuiTextField
        name="password"
        type="password"
        value={password}
        className="arimo-input-label"
        label="Password"
        sx={{ mt: 3, fontWeight: 550, fontSize: "2.5vh" }}
        onChange={onChangePassword}
        required
      />
      <Link to="/forgotPassword">
        <FormHelperText
          sx={{ mt: 2, mb: 5 }}
          className="arimo-input-label helperText"
        >
          forgot password?
        </FormHelperText>
      </Link>
      <Box display="flex" justifyContent="center" alignItems="center">
        <MuiContainedButton
          type={"submit"}
          width={{ xs: "80%", sm: "60%", md: "40%" }}
          buttonText={"Log In"}
        />
      </Box>
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
