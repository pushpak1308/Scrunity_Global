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
  defaultValue,
  required,
}) => {
  return (
    <>
      <InputLabel className={className} sx={sx}>
        {label}
      </InputLabel>
      <Autocomplete
        id={`${name}-autocomplete`}
        value={value}
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
            className={className}
            sx={{ ...sx, minWidth: "100%", mb: 2, mt: 1.62 }}
            required={required}
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
