import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  FormHelperText,
  Grid,
  InputLabel,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { useState, Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../logo_sg.png";
import backgroundImage from "../background.png";
import "./Login.css";

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

  return (
    <Grid
      container
      justifyContent="right"
      alignItems="center"
      style={{
        height: "100vh",
      }}
    >
      <Grid item xs={6} md={5} justifyContent="center" alignItems="center">
        <Card style={{ border: "2px solid black" }}>
          <CardContent sx={{ color: "black" }}>
            Hello !Welcome to <br />
            Srunity Global
          </CardContent>

          <CardMedia
            component="img"
            image={backgroundImage}
            sx={{ width: "20vh", borderRadius: "50%" }}
          />
        </Card>
      </Grid>
      <Grid item xs={6} md={7}>
        <Card
          style={{
            border: "2px solid black",
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            borderTopLeftRadius: "10%",
            borderBottomLeftRadius: "10%",
          }}
          sx={{
            px: 2,
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            image={logo}
            sx={{
              width: "10vh",
              position: "absolute",
              right: "1vh",
              top: "1vh",
              margin: 1,
            }}
          />
          {/* <Typography
            sx={{ fontSize: "34px", textAlign: "center", color: "#1EBBD7" }}
          >
            SCRUNITY GLOBAL
          </Typography> */}

          <CardContent>
            <form onSubmit={handleSubmit}>
              <InputLabel
                htmlFor="emailOrNumber"
                className="arimo-font"
                sx={{ m: 1 }}
              >
                Email or Number
              </InputLabel>
              <TextField
                name="username"
                placeholder="Email or Number"
                id="standard-basic"
                variant="standard"
                value={username}
                onChange={onChangeUsername}
                margin="normal"
                size="small"
                required
              />
              <InputLabel
                htmlFor="password"
                className="arimo-font"
                sx={{ m: 1 }}
              >
                Password
              </InputLabel>
              <TextField
                name="password"
                type="password"
                placeholder="Password"
                id="standard-basic"
                variant="standard"
                value={password}
                onChange={onChangePassword}
                margin="normal"
                size="small"
                required
              />
              <FormHelperText sx={{ color: "blue", mb: 2 }}>
                forgot password?
              </FormHelperText>

              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ mt: 1 }}
              >
                Sign In
              </Button>
            </form>
          </CardContent>

          <Divider sx={{ m: 2 }}>Or</Divider>
          <Grid>
            <Button>Sign In with Google</Button>
            <Button>Sign In with Apple</Button>
          </Grid>
          <Grid justifyContent="center" alignItems="center">
            <CardActions sx={{ color: "white" }}>
              Are you new? <Link to="/register">Sign up here</Link>
            </CardActions>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Login;
