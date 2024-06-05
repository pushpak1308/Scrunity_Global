import React from "react";
import { Box, Button, Typography, Modal } from "@mui/material";
import OtpInput from 'react-otp-input';

const OtpModal = ({ show, handleClose, otp, onChangeOTP, verifyMethod, handleToggleMethod, handleModalButtonClick }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: '90%',
    maxWidth: '500px',
    bgcolor: "background.paper",
    boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.5)",
    p: 4,
    borderRadius: "10px",
  };
  return (
    <Modal open={show} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant="h6" component="h2" sx={{ fontWeight: 600, fontSize: '3vh', mt: 1, textAlign: 'center' }}>
          {verifyMethod === 'email' ? 'Verify Email' : 'Verify Number'}
        </Typography>
        <Typography variant="body2" component="p" sx={{ mt: 2, mb: 4, textAlign: 'center' }}>
          {verifyMethod === 'email' ? 'We have sent you a code on forexample001@gmail.com' : 'We have sent you a code on 87632XXXXX'}
        </Typography>
        <Box display="flex" justifyContent="center" sx={{ textAlign: 'center', mt: 6 }}>

          <OtpInput
            value={otp}
            onChange={onChangeOTP}
            renderSeparator={<span style={{ margin: '0 10px' }}> </span>}
            renderInput={(props) => <input {...props} />}
            numInputs={4}
            inputStyle={{
              width: '4rem',
              height: '3rem',
              fontSize: '2rem',
              borderRadius: '4px',
              border: '1px solid #ccc',
            }}
          />

        </Box>
        <Box display="flex" justifyContent="center" alignItems="center" sx={{ mt: 4 }}>
          <Button variant="contained" color="primary" onClick={handleModalButtonClick} sx={{ my: 4, width: { xs: "90%", sm: "70%", md: "50%" }, borderRadius: "10px", boxShadow: "3px 3px 6px 0px #0cdaff", "&:hover": { boxShadow: "4px 4px 9px 0px #1976d2" }, border: "1px solid white", background: "rgb(83,89,231)", background: "linear-gradient(274deg, rgba(83,89,231,1) 0%, rgba(12,218,255,1) 100%)" }}>
            <Typography variant="body1" fontWeight="bold" style={{ fontSize: "18px" }}>Verify</Typography>
          </Button>
        </Box>
        <Typography
                    variant="body2"
                    component="p"
                    sx={{ my: 4, textAlign: 'center' }}
                  >
                    Are you facing any problem in receiving the code?{' '}
                    <span style={{
                      textDecoration: "none",
                      fontWeight: "bold",
                      color: "#0cdaff",
                      cursor: "pointer",
                    }}>Resend Code</span>
                  </Typography>
        <Box display="flex" justifyContent="center" alignItems="center" sx={{ mt: 2 }}>
        <Button
                      variant="outlined"
                      color="primary"
                      onClick={handleToggleMethod}
                      sx={{
                        width: "80%",
                        borderRadius: '10px',
                        border: '3px solid #0be9f2',
                      }}
                    >
                      {verifyMethod === 'email' ? 'Verify using Mobile Number' : 'Verify using Email'}
                    </Button>
                  </Box>
                </Box>
              </Modal>
  );
}

export default OtpModal;