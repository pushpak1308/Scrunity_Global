import { TextField, InputLabel } from "@mui/material";
import React from "react";
import "../../Screens/Auth/Style.css";
import "./Style.css";

// Reusable TextField Component
export const MuiTextField = ({
  name,
  type,
  value,
  onChange,
  required,
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
        required={required}
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
