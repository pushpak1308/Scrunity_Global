import { TextField, InputLabel } from "@mui/material";
import React from "react";
import "../../Screens/Auth/Style.css";
import "./Style.css";

export const MuiTextField = ({
  type,
  name,
  value,
  onChange,
  className,
  placeholder,
  defaultValue,
  label,
  required,
  multiline,
  disabled,
  error = false,
  helperText = "",
  rows,
}) => {
  const isControlled = value !== undefined;

  return (
    <>
      <InputLabel className={className ? className : "arimo-input-label"}>
        {label}
        {required && <span style={{ color: "red" }}> *</span>}
      </InputLabel>

      <TextField
        name={name}
        type={type}
        placeholder={placeholder ? placeholder : label}
        variant={multiline ? "outlined" : "standard"}
        value={isControlled ? value : undefined} // Controlled value
        defaultValue={!isControlled ? defaultValue : undefined} // Uncontrolled defaultValue
        onChange={onChange}
        multiline={!!rows}
        rows={rows}
        className={className ? className : "arimo-input-label"}
        size="small"
        disabled={disabled}
        fullWidth
        error={error}
        helperText={helperText}
        required={required}
        InputProps={{
          classes: {
            input: "centered-input",
          },
        }}
        InputLabelProps={{
          className: "centered-placeholder",
        }}
        {...(multiline && { maxRows: 5 })}
      />
    </>
  );
};
