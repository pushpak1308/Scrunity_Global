import { Grid, Typography } from "@mui/material";
import React from "react";
import waitingImage from "./../../Images/AuthImages/waitingImage.svg";
import { useNavigate } from "react-router-dom";
import MuiContainedButton from "../../MuiComponents/MuiContainedButton/Index";

const WaitingScreen = () => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/login");
  };
  return (
    <Grid container className="main-container" direction="column">
      <Grid item xs={12} md={12}>
        <img src={waitingImage} className="waitingScreen-image" />
      </Grid>
      <Grid item xs={12} md={12}>
        <Typography variant="h4" className="waitingScreen-title" gutterbottom>
          Thank you for Registering with us
        </Typography>
        <Typography
          variant="subtitle1"
          className="waitingScreen-text"
          gutterbottom
        >
          Your account is waiting for approval. This might not take more than 24
          hours during working days. <br />
          We will notify you via Email, once your account is approved.
        </Typography>
      </Grid>
      <Grid item xs={12} md={12}>
        <MuiContainedButton
          type={"button"}
          onClickFunction={handleNavigation}
          buttonText={"Go to Log In"}
        />
      </Grid>
    </Grid>
  );
};

export default WaitingScreen;
