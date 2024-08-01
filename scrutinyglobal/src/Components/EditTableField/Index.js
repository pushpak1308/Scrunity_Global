import { TextField } from "@mui/material";
import React from "react";

const EditableTableField = ({ value, onChange, type }) => {
  return (
    <TextField
      value={value}
      onChange={onChange}
      variant="standard"
      size="small"
      type={type ? type : "number"}
    />
  );
};

export default EditableTableField;
