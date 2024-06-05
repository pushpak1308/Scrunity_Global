import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  FormHelperText,
  Grid,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../logo_sg.png";
import "./Login.css";
import { CustomTextField } from "./Parts/CustomTextField";
import AuthPage from "./AuthPage";

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

  const content = (
    <Card
      style={{
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderTopLeftRadius: "10%",
        borderBottomLeftRadius: "10%",
        height: "100%",
        position: "relative",
      }}
    >
      <CardContent>
        <Typography
          className="vollkorn-Login"
          sx={{ fontWeight: "700", fontSize: "4vh", mt: 1 }}
          style={{ fontFamily: "Vollkorn ,serif" }}
        >
          Log In
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        image={logo}
        sx={{
          width: "10vh",
          position: "absolute",
          right: "1vh",
          top: "1vh",
        }}
      />

      <CardContent sx={{ mx: { xs: 3, sm: 7, md: 13 }, mb: 4 }}>
        <form onSubmit={handleSubmit}>
          <CustomTextField
            name="username"
            type="text"
            value={username}
            className="arimo-input-label"
            label="Email or Number"
            sx={{ mt: 3, fontWeight: 550, fontSize: "2.5vh" }}
            onChange={onChangeUsername}
            required
          />

          <CustomTextField
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
              sx={{ color: "#175f93", mt: 2, mb: 5, fontSize: "1.5vh" }}
              className="arimo-input-label"
              style={{ cursor: "pointer" }}
            >
              forgot password?
            </FormHelperText>
          </Link>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{
                // Responsive width
                width: { xs: "80%", sm: "60%", md: "40%" },
                borderRadius: "10px",
                boxShadow: "3px 3px 6px 0px #0cdaff",
                "&:hover": {
                  boxShadow: "4px 4px 9px 0px #1976d2",
                },
                border: "1px solid white",
                background: "rgb(83,89,231)",
                background:
                  "linear-gradient(274deg, rgba(83,89,231,1) 0%, rgba(12,218,255,1) 100%)",
              }}
            >
              <Typography
                variant="body1"
                fontWeight="bold"
                style={{ fontSize: "18px" }}
              >
                Log In
              </Typography>
            </Button>
          </Box>
        </form>
      </CardContent>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ my: 3 }}
      >
        <CardActions className="arimo-input-label" style={{ fontSize: "2vh" }}>
          {"Are you new?"}
          <Link
            to="/register"
            style={{
              textDecoration: "none",
              fontWeight: "bold",
              color: "#0cdaff",
              cursor: "pointer",
            }}
          >
            {" "}
            Sign up here
          </Link>
        </CardActions>
      </Grid>
    </Card>
  );

  return <AuthPage content={content} />;
};

export default Login;
