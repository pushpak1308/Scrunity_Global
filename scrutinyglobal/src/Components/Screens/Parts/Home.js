import { Grid, Typography, Button } from "@mui/material";
import React from "react";
import homeImage from "../../../homeImage.png";

const Home = () => {
  return (
    <Grid container spacing={2} alignItems="center" sx={{ m: 5 }}>
      <Grid item xs={12} md={6} sx={{ padding: 2 }}>
        <Typography variant="h4" gutterBottom>
          SCRUTINY GLOBAL
        </Typography>
        <Typography variant="body1" paragraph>
          At Scrutiny Global, we go beyond being mere data suppliers – we are
          your dedicated partners, transforming accurate and relevant
          information into actionable truths that drive your success.
        </Typography>
        <Button variant="contained" color="primary">
          Get Started
        </Button>
      </Grid>
      <Grid item xs={12} md={6} sx={{ p: 3, mt: 5 }}>
        <img
          src={homeImage}
          alt="home Image"
          style={{ width: "100%", height: "auto" }}
        />
      </Grid>
    </Grid>
  );
};

export default Home;
