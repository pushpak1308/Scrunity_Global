import { Grid, Typography } from "@mui/material";
import React from "react";
import "./Style.css";
import homeImage from "../../Images/LandingImages/homeImages/homeImage.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MuiContainedButton from "./../../MuiComponents/MuiContainedButton/Index";

const Home = () => {
  return (
    <Grid container spacing={6} className="main-container-landing ">
      <Grid item xs={12} md={6} className="item-grid">
        <Typography className="vollkorn-heading">SCRUTINY GLOBAL</Typography>

        <Typography className="monsterrat-subheading-paragraph" gutterBottom>
          At Scrutiny Global, we go beyond being mere data suppliers – we are
          your dedicated partners, transforming accurate and relevant
          information into actionable truths that drive your success.
        </Typography>
        <MuiContainedButton
          buttonText={"Get Started"}
          type={"button"}
          endIcon={<ArrowForwardIcon />}
        />
      </Grid>
      <Grid item xs={12} md={6} className="home-image">
        <img src={homeImage} alt="home Image" />
      </Grid>
    </Grid>
  );
};

export default Home;
