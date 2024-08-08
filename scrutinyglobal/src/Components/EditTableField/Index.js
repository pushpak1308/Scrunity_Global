import { TextField, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import "./Style.css";

const EditableTableField = ({ value, onChange, type }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <TextField
      // marginLeft={"2%"}
      value={value}
      className={isMobile ? "table-editable-row-mobile" : "table-editable-row"}
      onChange={onChange}
      variant="standard"
      size="small"
      type={type ? type : "number"}
      InputProps={{
        classes: {
          input: isMobile ? "table-editable-row-mobile" : "table-editable-row",
        },
      }}
    />
  );
};

export default EditableTableField;
