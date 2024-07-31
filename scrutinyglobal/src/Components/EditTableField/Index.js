import { TextField } from "@mui/material";
import React from "react";

const EditableTableField = ({ value, onChange, label }) => {
  return (
    <TextField
      value={value}
      onChange={onChange}
      // label={label}
      variant="standard"
      size="small"
      type="number"
    />
  );
};

export default EditableTableField;
