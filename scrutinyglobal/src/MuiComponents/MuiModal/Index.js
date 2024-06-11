import React from "react";
import { Typography, Modal, IconButton, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import modalImage from "../../Images/AuthImages/modalImage.svg";
import CustomContainedButton from "../MuiContainedButton/Index";
import "./Style.css";

const MuiModal = ({
  show,
  handleClose,
  heading,
  content,
  buttonPrimaryText,
  buttonSecondaryText,
  buttonAction,
  handleModalButtonClick,
  additionalContent,
}) => {
  const navigate = useNavigate();

  const handlePrimaryButton = () => {
    if (buttonAction) {
      navigate("/login");
    } else {
      handleModalButtonClick();
    }
  };

  const handleSecondaryButton = () => {
    handleClose();
  };

  return (
    <Modal open={show}>
      <Grid container className="modal-container">
        <Grid item xs={12} className="modal-close">
          <IconButton onClick={handleClose}>
            <CloseIcon fontSize="large" />
          </IconButton>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" component="h2" className="modal-headingText">
            {heading}
          </Typography>
        </Grid>

        <Grid item xs={12} className="model-item ">
          <Typography
            variant="body2"
            component="p"
            className="modal-item model-content"
          >
            {content}
          </Typography>
          {buttonAction && (
            <Grid item className="modal-item modal-image" sx={{ mt: 4 }}>
              <img src={modalImage} alt="success" className="modal-image2" />
            </Grid>
          )}
        </Grid>

        <Grid item xs={12} className="modal-item modal-item2" sx={{ my: 3 }}>
          {buttonSecondaryText && (
            <CustomContainedButton
              type="button"
              onClickFunction={handleSecondaryButton}
              buttonText={buttonSecondaryText}
              width={true}
            />
          )}
          <CustomContainedButton
            type="button"
            onClickFunction={handlePrimaryButton}
            buttonText={buttonPrimaryText}
            width={true}
          />
        </Grid>

        {additionalContent && (
          <Grid item xs={12} sx={{ mb: 3 }}>
            {additionalContent}
          </Grid>
        )}
      </Grid>
    </Modal>
  );
};

export default MuiModal;
