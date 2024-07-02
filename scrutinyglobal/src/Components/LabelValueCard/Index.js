import { Grid, Typography } from "@mui/material";
import React from "react";
import "./Style.css";

const LabelValueCard = ({ label, value }) => (
  <Grid item container direction="column" className="label-value-grid">
    <Grid item>
      <Typography className="label">{label} :</Typography>
    </Grid>
    <Grid item>
      <Typography className="value">{value}</Typography>
    </Grid>
  </Grid>
);

export default LabelValueCard;
