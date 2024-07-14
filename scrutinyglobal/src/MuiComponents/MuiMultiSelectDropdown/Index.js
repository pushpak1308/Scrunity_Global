import React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

const MuiMultiSelectDropdown = ({
  value,
  options,
  onChange,
  label,
  className,
}) => {
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  return (
    <>
      <InputLabel className={className ? className : "arimo-input-label"}>
        {label}
        {/* {required && <span style={{ color: "red" }}> *</span>} */}
      </InputLabel>
      <FormControl sx={{ m: 1, width: 300 }}>
        <Select
          labelId="multi-select-dropdown-label"
          id="multi-select-dropdown"
          multiple
          value={value}
          onChange={onChange}
          input={<OutlinedInput label="Select Vendors" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
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
