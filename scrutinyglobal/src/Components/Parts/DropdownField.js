import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const DropdownField = ({ name, value, label, options, onChange, required }) => (
  <FormControl fullWidth margin="normal" variant="outlined" required={required}>
    <InputLabel>{label}</InputLabel>
    <Select name={name} value={value} onChange={onChange} label={label}>
      {options.map((option, index) => (
        <MenuItem key={index} value={option}>
          {option}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);

export default DropdownField;