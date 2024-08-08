// PdfPreviewModal.js
import React from "react";
import { Dialog, DialogContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const PdfPreviewModal = ({ open, onClose, pdfData }) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogContent>
        <IconButton
          edge="end"
          color="inherit"
          onClick={onClose}
          aria-label="close"
          style={{ position: "absolute", right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
        {pdfData && (
          <iframe
            src={pdfData}
            width="100%"
            height="600px"
            style={{ border: "none" }}
            title="PDF Preview"
          ></iframe>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PdfPreviewModal;
