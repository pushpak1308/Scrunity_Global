import { TextField } from "@mui/material";
import React from "react";

const EditableTableField = ({ value, onChange }) => {
  return (
    <TextField
      value={value}
      onChange={onChange}
      variant="standard"
      size="small"
      type="number"
    />
  );
};

export default EditableTableField;
