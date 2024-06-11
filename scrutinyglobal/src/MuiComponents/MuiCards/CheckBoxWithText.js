import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import "./Style.css";

const CheckBoxWithText = ({ text }) => {
  return (
    <Grid
      container
      className="checkBoxWithText-container"
      sx={{
        mb: 2,
        pl: 2,
        py: 2,
      }}
    >
      <Grid
        item
        className="icon-container"
        sx={{ mr: 2, position: "relative", width: "30px", height: "30px" }}
      >
        <CheckBoxOutlinedIcon
          className="checkbox-icon"
          sx={{ position: "absolute", width: "30px", height: "30px" }}
        />
      </Grid>
      <Grid item>
        <Typography variant="body1">{text}</Typography>
      </Grid>
    </Grid>
  );
};

export default CheckBoxWithText;
