import React from "react";
import { Box, Button, Typography, Modal } from "@mui/material";
import "../Login.css"
import { useNavigate } from "react-router-dom";

const SuccessModal = ({ showSuccess, handleCloseSuccess, heading, button }) => {

  const navigate = useNavigate();

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

  const handleButton = () => {
    navigate('/login')
  }

  return (
    <Modal open={showSuccess} onClose={handleCloseSuccess}>
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          className="vollkorn-Login"
          sx={{ fontWeight: "600", fontSize: "3vh", mt: 1 }}
          style={{ fontFamily: "Vollkorn ,serif" }}
        >
          {heading}
        </Typography>
        <Box display="flex" justifyContent="center" alignItems="center" sx={{ mt: 4 }}>
          <Button variant="contained" color="primary" onClick={handleButton} sx={{
            // Responsive width
            width: { xs: "90%", sm: "70%", md: "50%" },
            borderRadius: "10px",
            boxShadow: "3px 3px 6px 0px #0cdaff",
            "&:hover": {
              boxShadow: "4px 4px 9px 0px #1976d2",
            },
            border: "1px solid white",
            background: "rgb(83,89,231)",
            background:
              "linear-gradient(274deg, rgba(83,89,231,1) 0%, rgba(12,218,255,1) 100%)",
          }}
          >
            <Typography variant="body1" fontWeight="bold" style={{ fontSize: "18px" }}>{button}</Typography>
          </Button>
        </Box>
      </Box>
    </Modal>
  )

};
export default SuccessModal;