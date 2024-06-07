import React from "react";
import { Autocomplete, InputLabel, TextField } from "@mui/material";

export const MuiDropDown = ({
  name,
  value,
  onChange,
  options,
  label,
  className,
  sx,
  required,
}) => {
  return (
    <>
      <InputLabel
        id="demo-simple-select-standard-label"
        className={className}
        sx={sx}
      >
        {label}
      </InputLabel>
      <Autocomplete
        id={`${name}-autocomplete`}
        value={value}
        onChange={(event, newValue) => {
          onChange({
            target: {
              name: name,
              value: newValue,
            },
          });
        }}
        options={options}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder={label}
            variant="standard"
            className={className}
            sx={{ ...sx, minWidth: "100%", mb: 2, mt: 1.62 }}
            required={required}
          />
        )}
      />
    </>
  );
};
