import { TextField, InputLabel } from "@mui/material";
import React from "react";
import "../../Screens/Auth/Style.css";
import "./Style.css";

export const MuiTextField = ({
  name,
  type,
  value,
  onChange,
  className,
  placeholder,
  sx,
  label,
}) => {
  return (
    <>
      <InputLabel className={className} sx={sx}>
        {label}
      </InputLabel>

      <TextField
        name={name}
        type={type}
        placeholder={placeholder ? placeholder : label}
        variant="standard"
        value={value}
        onChange={onChange}
        sx={{ my: 2 }}
        size="small"
        fullWidth
        required
        InputProps={{
          classes: {
            input: "centered-input",
          },
        }}
        InputLabelProps={{
          className: "centered-placeholder",
        }}
      />
    </>
  );
};
