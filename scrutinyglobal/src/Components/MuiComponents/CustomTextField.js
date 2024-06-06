import { TextField, InputLabel } from "@mui/material";
import React from "react";
import "../Screens/Login.css";

// Reusable TextField Component
export const CustomTextField = ({
  name,
  type,
  value,
  onChange,
  required,
  className,
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
        placeholder={label}
        id="standard-basic"
        variant="standard"
        value={value}
        onChange={onChange}
        sx={{ my: 2 }}
        size="small"
        fullWidth
        required={required}
      />
    </>
  );
};
