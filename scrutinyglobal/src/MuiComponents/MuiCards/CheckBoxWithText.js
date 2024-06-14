import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import "./Style.css";

const CheckBoxWithText = ({ text, icon }) => {
  return (
    <Grid container className="checkBoxWithText-container">
      <Grid item xs={2} className="icon-container">
        <CheckBoxOutlinedIcon />
      </Grid>
      <Grid item xs={9}>
        <Typography variant="body1">{text}</Typography>
      </Grid>
    </Grid>
  );
};

export default CheckBoxWithText;
