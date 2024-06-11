import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckIcon from "@mui/icons-material/Check";
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
        <CheckBoxOutlineBlankIcon
          className="checkbox-icon"
          sx={{ position: "absolute", width: "30px", height: "30px" }}
        />
        <CheckIcon
          className="check-icon"
          sx={{
            width: "24px",
            height: "24px",
            color: "black",
          }}
        />
      </Grid>
      <Grid item>
        <Typography variant="body1">{text}</Typography>
      </Grid>
    </Grid>
  );
};

export default CheckBoxWithText;
