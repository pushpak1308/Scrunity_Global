import React from "react";
import { Autocomplete, InputLabel, TextField } from "@mui/material";
import "../MuiTextField/Style.css";

export const MuiDropDown = ({
  value,
  onChange,
  options,
  label,
  defaultValue,
  className,
  required,
  error = false,
  helperText = "",
}) => {
  const isControlled = value !== undefined;

  return (
    <>
      <InputLabel className={className ? className : "arimo-input-label"}>
        {label}
        {required && <span style={{ color: "red" }}> *</span>}
      </InputLabel>
      <Autocomplete
        id={`${label}-autocomplete`}
        size="small"
        value={isControlled ? value : null}
        defaultValue={!isControlled ? defaultValue : null}
        onChange={(event, newValue) => {
          onChange({
            target: {
              name: label,
              value: newValue,
            },
          });
        }}
        getOptionLabel={(option) => option} // Assuming options are strings
        options={options}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder={label}
            variant="standard"
            size="small"
            error={error}
            helperText={helperText}
            className={className ? className : "arimo-input-label"}
            InputProps={{
              ...params.InputProps,
              classes: {
                input: "centered-input",
              },
            }}
            InputLabelProps={{
              className: "centered-placeholder",
            }}
          />
        )}
        isOptionEqualToValue={(option, value) => option === value} // Assuming options are strings
      />
    </>
  );
};
