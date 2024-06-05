import React from "react";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";

export const CustomDropdown = ({
  name,
  value,
  onChange,
  options,
  label,
  className,
  sx,
  required
}) => {
  return (
    <>
    <InputLabel id="demo-simple-select-standard-label" className={className} sx={sx}>
        {label}
      </InputLabel>
     <FormControl variant="standard" sx={{  minWidth: "100%" }} required={required}>
      
      <Select
       id="demo-simple-select-standard"
        name={name}
        value={value}
        onChange={onChange}
        sx={{ mb: 2 ,mt:1.62}}
      >
        <MenuItem value="">
            {label}
          </MenuItem>
        {options.map((option, index) => (
          <MenuItem key={index} value={option} > 
            {option}
          </MenuItem>
        ))}
      </Select>
      </FormControl>
    </>
  );
};

//
