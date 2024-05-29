import { TextField, InputLabel } from "@mui/material";
import React from 'react'
import "../Login.css"

// Reusable TextField Component
export const CustomTextField = ({ name, type, placeholder, value, onChange, required }) => {
    return (
        <TextField
            name={name}
            type={type}
            placeholder={placeholder}
            id="standard-basic"
            variant="standard"
            value={value}
            onChange={onChange}
            sx={{ my: 3 }}
            size="small"
            fullWidth
            required={required}
        />
    )
}

// Reusable InputLabel Component
export const CustomInputLabel = ({ htmlFor, className, sx,label }) => {
    return (
        <InputLabel
            htmlFor={htmlFor}
            className={className}
            sx={sx}
        >
            {label}
        </InputLabel>
    );
};

