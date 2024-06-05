import React from "react";
import { Select, MenuItem, InputLabel } from "@mui/material";

export const CustomDropdown = ({
  name,
  value,
  onChange,
  options,
  label,
  className,
  sx,
}) => {
  return (
    <>
      <InputLabel className={className} sx={sx}>
        {label}
      </InputLabel>
      <Select
        name={name}
        value={value}
        onChange={onChange}
        sx={{ my: 2 }}
        fullWidth
        required
      >
        {options.map((option, index) => (
          <MenuItem key={index} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};
