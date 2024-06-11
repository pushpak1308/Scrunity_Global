import React from "react";
import { Grid, Typography } from "@mui/material";
import "./Style.css";

const CenteredTextSection = ({ title, subtitle }) => {
  return (
    <Grid
      container
      className="center-text"
      sx={{
        my: 5,
        p: 3,
      }}
    >
      <Grid item xs={12}>
        <Typography variant="body2" component="p" className="title">
          {title}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1" component="h1" className="subtitle">
          {subtitle}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default CenteredTextSection;
