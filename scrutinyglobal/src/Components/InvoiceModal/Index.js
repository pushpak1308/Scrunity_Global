import React from "react";
import logo from "./../../logo_sg.png";
import { Divider, Grid, Typography } from "@mui/material";
import MuiModal from "./../../MuiComponents/MuiModal/Index";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import { IconButton } from "@mui/material";

const InvoiceModal = ({
  show,
  handleClose,
  ClientName,
  totalNoofSurveys,
  successfulSurveys,
  costPerSurvey,
}) => {
  const today = new Date();
  const options = { weekday: "long" };
  const day = today.toLocaleDateString("en-IN", options);
  const date = today.toLocaleDateString("en-IN");

  const totalCost = successfulSurveys * costPerSurvey;

  const customHeaderStyle = {
    background: "linear-gradient(90deg, #0ddbff 0%, #cef8ff 100%)",
    padding: "16px",
    borderTopRightRadius: "10px",
    borderTopLeftRadius: "10px",
  };

  const header = (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      className="invoiceHeader"
    >
      <Grid item>
        <Grid container alignItems="center">
          <Grid item>
            <img src={logo} alt="Logo" style={{ height: "8vh" }} />{" "}
          </Grid>
          <Grid item>
            <Typography variant="h6" className="invoiceHeader-clientName">
              {ClientName ? ClientName : "Client Name"}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="column" alignItems="center">
          <Grid item>
            <Typography variant="body1" className="invoiceHeader-text">
              {date}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" className="invoiceHeader-text">
              {day}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );

  const content = (
    <Grid container spacing={2} className="table-container">
      <Grid item container>
        <Grid item xs={12} className="modal-close">
          <IconButton onClick={handleClose}>
            <DownloadOutlinedIcon />
          </IconButton>
        </Grid>
        <Grid item xs={10}>
          <Grid item container>
            <Grid item xs={6}>
              <Typography variant="body1" className="table-header">
                Description
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                variant="body1"
                className="table-header"
                align="right"
              >
                Subtotal
              </Typography>
            </Grid>
          </Grid>
          <Divider sx={{ width: "100%" }} />
          <Grid item container>
            <Grid item xs={6}>
              <Typography variant="body2">1. Total Surveys</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" align="right">
                {totalNoofSurveys}
              </Typography>
            </Grid>
          </Grid>
          <Divider sx={{ width: "100%", borderStyle: "dotted" }} />
          <Grid item container>
            <Grid item xs={6}>
              <Typography variant="body2">2. Completed Surveys</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" align="right">
                {successfulSurveys}
              </Typography>
            </Grid>
          </Grid>
          <Divider sx={{ width: "100%", borderStyle: "dashed" }} />
          <Grid item container>
            <Grid item xs={6}>
              <Typography variant="body2">3. Cost/Survey</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" align="right">
                {costPerSurvey}
              </Typography>
            </Grid>
          </Grid>
          <Divider sx={{ width: "100%", borderStyle: "dotted" }} />
          <Grid item container>
            <Grid item xs={6}>
              <Typography variant="body1" className="table-header">
                Total
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                variant="body1"
                className="table-header"
                align="right"
              >
                {totalCost}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );

  return (
    <MuiModal
      show={show}
      handleClose={handleClose}
      customHeader={header}
      customHeaderStyle={customHeaderStyle}
      content={content}
    />
  );
};

export default InvoiceModal;
