import { Button, Typography } from "@mui/material";
import React from "react";
import "./Style.css";

const MuiContainedButton = ({
  type,
  onClickFunction,
  buttonText,
  width,
  mt,
  endIcon,
}) => {
  const style = {
    mt: mt ? mt : 1,
    width: width ? { xs: "90%", sm: "70%", md: "50%" } : "auto",
    fontSize: width ? "18px" : "16px",
  };
  return (
    <Button
      type={type}
      variant="contained"
      color="primary"
      onClick={onClickFunction}
      sx={style}
      endIcon={endIcon}
      className="containedButton"
    >
      <Typography variant="body1" className="buttonText">
        {buttonText}
      </Typography>
    </Button>
  );
};

export default MuiContainedButton;
