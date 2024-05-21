import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { useState, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../logo_sg.png";
import backgroundImage from "../background.jpg";

const Login = () => {
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
        // backgroundImage: "url(" + backgroundImage + ")",
        backgroundColor: "black",
      }}
    >
      <Grid
        item
        xs={12}
        sm={8}
        md={7}
        style={{
          height: "100vh",
          backgroundImage: "url(" + backgroundImage + ")",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPositionY: "center",
          // backgroundPositionX: "left",
        }}
      ></Grid>
      <Grid item xs={12} sm={6} md={5}>
        <Card
          sx={{
            px: 2,
            backgroundColor: "#161616",
            opacity: 0.9,
            height: "100vh",
          }}
        >
          <Fragment
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardMedia component="img" image={logo} sx={{ width: "20vh" }} />
            <Typography
              sx={{ fontSize: "34px", textAlign: "center", color: "#1EBBD7" }}
            >
              {/* <img src={logo} alt="logo" /> */}
              SCRUNITY GLOBAL
            </Typography>
          </Fragment>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <InputLabel htmlFor="username" sx={{ color: "#FFFFFF" }}>
                Username
              </InputLabel>
              <TextField
                name="username"
                value={username}
                onChange={onChangeUsername}
                fullWidth
                margin="normal"
                size="small"
                inputProps={{
                  style: {
                    backgroundColor: "#D6E6EF",
                    borderRadius: "10px",
                  },
                }}
                required
              />
              <InputLabel htmlFor="password" sx={{ color: "#FFFFFF" }}>
                Password
              </InputLabel>
              <TextField
                name="password"
                type="password"
                value={password}
                onChange={onChangePassword}
                fullWidth
                margin="normal"
                size="small"
                inputProps={{
                  style: {
                    backgroundColor: "#D6E6EF",
                    borderRadius: "10px",
                  },
                }}
                required
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 1 }}
              >
                Sign In
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Login;
