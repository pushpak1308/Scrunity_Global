import { Box, Card, CardContent, CardMedia, Grid } from "@mui/material";
import { useState } from "react";
import backgroundImage from "../background.png";
import "./Login.css";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";
import Register from "./Register";
const AuthPage = ({ content }) => {
  // const [view, setView] = useState("login");

  // const content = () => {
  //   switch (view) {
  //     case "login":
  //       return <Login setView={setView} />;
  //     case "forgotPassword":
  //       return <ForgotPassword setView={setView} />;
  //     case "resetPassword":
  //       return <ResetPassword setView={setView} />;
  //     case "register":
  //       return <div>Register</div>;
  //     // return <Register setView={setView} />;
  //     default:
  //       return null;
  //   }
  // };
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      style={{ backgroundColor: "#abeff5" }}
    >
      <Grid
        container
        style={{
          borderRadius: "10px",
          overflow: "hidden",
          width: "80%",
          background: "rgb(83,89,231)",
          background:
            "linear-gradient(0deg, rgba(83,89,231,1) 0%, rgba(12,218,255,1) 100%)",
        }}
      >
        <Grid
          item
          xs={12}
          md={5}
          spacing={0}
          display={{ xs: "none", md: "flex" }}
          justifyContent="center"
          alignItems="center"
        >
          <Card
            elevation="0"
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              backgroundColor: "transparent",
              boxShadow: "none",
            }}
          >
            <CardContent sx={{ color: "white", mb: 2 }}>
              <div className="vollkorn-hello">Hello !Welcome to </div>
              <div className="vollkorn-scrutiny">Srutiny Global</div>
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
              <div className="vollkorn-body">
                A Panel for project management
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={7}>
          {content}
        </Grid>
      </Grid>
    </Box>
  );
};

export default AuthPage;
