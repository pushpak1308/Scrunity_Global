import {
  Box,
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
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { useState, Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../logo_sg.png";
import Google from "../Google.svg";
import AppleIcon from "../AppleIcon.svg";
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
        background: "rgb(83,89,231)",
        background:
          "linear-gradient(0deg, rgba(83,89,231,1) 0%, rgba(12,218,255,1) 100%)",
      }}
    >
      <Grid
        item
        xs={6}
        md={5}
        display="flex"
        justifyContent="center"
        alignItems="center"
        style={{ backgroundColor: "inherit" }}
      >
        <Card
          elevation="0"
          style={{
            height: "100vh",
            background: "rgb(83,89,231)",
            background:
              "linear-gradient(0deg, rgba(83,89,231,1) 0%, rgba(12,218,255,1) 100%)",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <CardContent sx={{ color: "white", mb: 2 }}>
            <div className="vollkorn-hello">Hello !Welcome to </div>
            <div className="vollkorn-scrutiny">Srunity Global</div>
          </CardContent>

          <CardMedia
            component="img"
            image={backgroundImage}
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{
              width: "42vh",
              height: "42vh",
              borderRadius: "50%",
              backgroundColor: "#0cdaff",
              ml: 6,
              boxShadow: "10px 12px 10px 0px rgba(0,0,0,0.25)",
            }}
          />

          <CardContent sx={{ color: "white", mt: 2 }}>
            <div className="vollkorn-body">A CRM for CAWI project </div>
            <div className="vollkorn-body">management</div>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6} md={7}>
        <Card
          style={{
            // border: "2px solid black",
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            borderTopLeftRadius: "10%",
            borderBottomLeftRadius: "10%",
          }}
          sx={{
            px: 2,
            height: "100vh",
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

          <CardContent sx={{ mt: 13, mx: 13, mb: 4 }}>
            <form onSubmit={handleSubmit}>
              <InputLabel
                htmlFor="emailOrNumber"
                className="arimo-input-label"
                sx={{ mt: 3, fontWeight: 550, fontSize: "2.5vh" }}
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
                sx={{ my: 3 }}
                size="small"
                fullWidth
                required
              />
              <InputLabel
                htmlFor="password"
                className="arimo-input-label"
                sx={{ mt: 3, fontWeight: 550, fontSize: "2.5vh" }}
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
                sx={{ mt: 3 }}
                size="small"
                fullWidth
                required
              />
              <FormHelperText
                sx={{ color: "#175f93", mt: 2, mb: 5, fontSize: "1.5vh" }}
                className="arimo-input-label"
              >
                forgot password?
              </FormHelperText>

              <Box display="flex" justifyContent="center" alignItems="center">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{
                    width: "40%",
                    borderRadius: "10px",
                    boxShadow: "3px 3px 6px 0px #1abfb5",
                    "&:hover": {
                      boxShadow: "4px 4px 9px 0px #06746e",
                    },
                    border: "1px solid white",
                    background: "rgb(83,89,231)",
                    background:
                      "linear-gradient(274deg, rgba(83,89,231,1) 0%, rgba(12,218,255,1) 100%)",
                  }}
                >
                  <Typography
                    variant="body"
                    fontWeight="bold"
                    style={{ fontSize: "20px" }}
                  >
                    Sign In
                  </Typography>
                </Button>
              </Box>
            </form>
          </CardContent>

          <Divider sx={{ p: 1, mx: 13, mb: 5 }} style={{ fontWeight: "bold" }}>
            Or
          </Divider>
          <Stack
            direction="row"
            display="flex"
            justifyContent="center"
            alignItems="center"
            spacing={9}
          >
            <Button
              startIcon={
                <img src={Google} alt="Google" style={{ height: "4vh" }} />
              }
              variant="contained"
              sx={{
                backgroundColor: "#efefef",
                color: "black",
                boxShadow: "3px 3px 4px 0px rgba(0,0,0,0.25)",
                "&:hover": {
                  backgroundColor: "#efefef",
                },
              }}
            >
              Sign In with Google
            </Button>
            <Button
              startIcon={
                <img src={AppleIcon} alt="Apple" style={{ height: "4vh" }} />
              }
              variant="contained"
              sx={{
                backgroundColor: "#efefef",
                color: "black",
                boxShadow: "3px 3px 4px 0px rgba(0,0,0,0.25)",
                "&:hover": {
                  backgroundColor: "#efefef",
                },
              }}
            >
              {" "}
              Sign In with Apple
            </Button>
          </Stack>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{ mt: 3 }}
          >
            <CardActions
              className="arimo-input-label"
              style={{ fontSize: "2vh" }}
            >
              {"Are you new?"}
              <Link
                to="/register"
                style={{
                  textDecoration: "none",
                  fontWeight: "bold",
                  color: "#0cdaff",
                }}
              >
                {" "}
                Sign up here
              </Link>
            </CardActions>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Login;
