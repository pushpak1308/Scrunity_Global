import { TextField } from "@mui/material";
import React from "react";
import "./Style.css";

const EditableTableField = ({ value, onChange, type }) => {
  return (
    <TextField
      // marginLeft={"2%"}
      value={value}
      className="table-editable-row "
      onChange={onChange}
      variant="standard"
      size="small"
      type={type ? type : "number"}
      InputProps={{
        classes: {
          input: "table-editable-row",
        },
      }}
    />
  );
};

export default EditableTableField;
