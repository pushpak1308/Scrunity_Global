import { Grid, Typography } from "@mui/material";
import React from "react";
import "./Style.css";
const InfoCardMobile = ({ title, text }) => {
  return (
    <Grid
      container
      className="infoCard-mobile"
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Grid item>
        <Typography component="div" className="title-mobile">
          {title}
        </Typography>
      </Grid>
      <Grid item>
        <Typography component="div" className="text-mobile">
          {text}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default InfoCardMobile;
