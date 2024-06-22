import { TextField, InputLabel } from "@mui/material";
import React from "react";
import "../../Screens/Auth/Style.css";
import "./Style.css";

export const MuiTextField = ({
  type,
  value,
  onChange,
  className,
  placeholder,
  defaultValue,
  label,
}) => {
  return (
    <>
      <InputLabel
        className={
          className === "forRegister" ? "forRegister" : "arimo-input-label"
        }
      >
        {label}
      </InputLabel>

      <TextField
        name={value}
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder ? placeholder : label}
        variant="standard"
        value={value}
        onChange={onChange}
        className={
          className === "forRegister" ? "forRegister" : "arimo-input-label"
        }
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
