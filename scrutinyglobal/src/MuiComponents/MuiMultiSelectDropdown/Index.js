import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import "./Style.css";

const MuiMultiSelectDropdown = ({
  value,
  options,
  onChange,
  label,
  className,
}) => {
  return (
    <>
      <InputLabel className={className ? className : "arimo-input-label"}>
        {label}
        {/* {required && <span style={{ color: "red" }}> *</span>} */}
      </InputLabel>
      <FormControl className="multiselect-formControl">
        <Select
          fullWidth
          labelId="multi-select-dropdown-label"
          id="multi-select-dropdown"
          multiple
          variant="standard"
          value={value}
          onChange={onChange}
          renderValue={(selected) => selected.join(", ")}
        >
          {options.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={value.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default MuiMultiSelectDropdown;
