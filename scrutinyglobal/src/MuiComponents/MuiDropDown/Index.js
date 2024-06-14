// MuiDropDown/Index.js
import React from "react";
import { Autocomplete, InputLabel, TextField } from "@mui/material";

export const MuiDropDown = ({
  name,
  value,
  onChange,
  options,
  label,
  sx,
  defaultValue,
}) => {
  return (
    <>
      <InputLabel className="arimo-input-label" sx={sx}>
        {label}
      </InputLabel>
      <Autocomplete
        id={`${name}-autocomplete`}
        value={value}
        className="arimo-input-label"
        defaultValue={defaultValue}
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
            sx={{ ...sx, minWidth: "100%", mb: 2, mt: 1.62 }}
            InputProps={{
              ...params.InputProps,
              style: { paddingLeft: "10px" },
            }}
            InputLabelProps={{
              style: { paddingLeft: "10px" },
            }}
          />
        )}
      />
    </>
  );
};
