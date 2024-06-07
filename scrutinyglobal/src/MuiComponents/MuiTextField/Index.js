import { TextField, InputLabel } from "@mui/material";
import React from "react";
import "../../Screens/Auth/Style.css";

// Reusable TextField Component
export const MuiTextField = ({
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
