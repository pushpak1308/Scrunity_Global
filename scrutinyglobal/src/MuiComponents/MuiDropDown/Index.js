// MuiDropDown/Index.js
import React from "react";
import { Autocomplete, InputLabel, TextField } from "@mui/material";

export const MuiDropDown = ({
  value,
  onChange,
  options,
  label,
  defaultValue,
  className,
}) => {
  const name = value;
  return (
    <>
      <InputLabel
        className={
          className === "forRegister" ? "forRegister" : "arimo-input-label"
        }
      >
        {label}
      </InputLabel>
      <Autocomplete
        id={`${name}-autocomplete`}
        value={value}
        className={
          className === "forRegister" ? "forRegister" : "arimo-input-label"
        }
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
            size="small"
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
