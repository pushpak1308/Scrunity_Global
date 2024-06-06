import { Button, Typography } from '@mui/material'
import React from 'react'

const CustomContainedButton = ({type,onClickFunction,buttonText,width,mt}) => {
    const style = {
        borderRadius: "10px",
        mt: mt ? mt: 1,
        width: width ? { xs: "90%", sm: "70%", md: "50%" } : "auto",
        boxShadow: "3px 3px 6px 0px rgba(12, 218, 255, 0.5)",
        "&:hover": {
            boxShadow: "4px 4px 9px 0px rgba(25, 118, 210, 0.4)",
        },
        border: "1px solid white",
        background:
            "linear-gradient(274deg, rgba(83,89,231,1) 0%, rgba(12,218,255,1) 100%)",
        fontSize: width ? "18px" : "16px",
    }
    return (
        <Button
        type={type}
        variant="contained"
        color="primary"
        onClick={onClickFunction}
        sx={style}
      >
        <Typography
          variant="body1"
          fontWeight="bold"
        >
          {buttonText}
        </Typography>
      </Button>
    )
}

export default CustomContainedButton
