import React from "react";
import { Grid, Typography } from "@mui/material";
import "./Style.css";

const CenteredTextSection = ({ title, subtitle }) => {
  return (
    <Grid container className="center-text flex-and-center">
      <Grid item xs={10}>
        <Typography className="title">{title}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography className="subtitle">{subtitle}</Typography>
      </Grid>
    </Grid>
  );
};

export default CenteredTextSection;
