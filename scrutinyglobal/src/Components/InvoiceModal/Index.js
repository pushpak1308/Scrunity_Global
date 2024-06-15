import React from "react";
import logo from "./../../logo_sg.png";
import { Divider, Grid, Modal, Stack, Typography } from "@mui/material";
import MuiModal from "./../../MuiComponents/MuiModal/Index";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "./Style.css";
import { PdfDownloader } from "../PdfDownloader";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

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

  const handlePdfDownload = () => {
    const input =  document.getElementById('pdf-content');
    html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData,'PNG',0,0);
        pdf.save('Invoice.pdf');
    });
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
    <Modal open={show}>
      <Grid container className="invoice-modal-container">
        <Grid  item container justifyContent="space-between">
          <Grid item xs={3} className="modal-close" justifyContent="flex-start">
            <IconButton onClick={handlePdfDownload}>
              <DownloadOutlinedIcon fontSize="large" />
            </IconButton>
          </Grid>
          <Grid item xs={3} className="modal-close" justifyContent="flex-end">
            <IconButton onClick={handleClose}>
              <CloseIcon fontSize="large" />
            </IconButton>
          </Grid>
        </Grid>
        <Grid id="pdf-content">
        <Grid item className="invoice-grid">
          <Grid item container className="forBorder">
            <Grid item xs={4}>
              <img src={logo} alt="Logo" style={{ height: "8vh" }} />{" "}
            </Grid>
            <Grid
              item
              container
              xs={8}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                <Typography variant="h4" component="div" gutterbottom>
                  SCRUTINY GLOBAL
                </Typography>
                <Typography variant="body" component="div" gutterBottom>
                  Second floor L-295, Mohan Garden, Uttam Nagar, New Delhi-
                  110059. INDIA Contact +91-7678294335 Email Id -
                  business@scrutinyglobal.com GSTIN - 071GJPK820IEIZF
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} className="forBorder" textAlign="center">
            <Typography variant="h4" component="div">
              EXPORT INVOICE
            </Typography>
          </Grid>
          <Grid item container direction="row">
            <Grid item xs={8} md={8} className="forBorder">
              <Typography variant="h6" component="div">
                Invoice to:
              </Typography>
            </Grid>
            <Grid item xs={4} md={4} className="forBorder">
              <Typography variant="h6" component="div">
                Invoice Details:
              </Typography>
            </Grid>
          </Grid>
          <Grid item container direction="row">
            <Grid item xs={8} md={8} className="forBorder">
              <Grid>
                <Typography variant="h6" component="span" gutterBottom>
                  Name:
                </Typography>
                <Typography variant="body" component="span" gutterBottom>
                  {ClientName ? ClientName : "Client Name"}
                </Typography>
              </Grid>
              <Grid>
                <Typography variant="h6" component="span" gutterBottom>
                  Address:
                </Typography>
                <Typography variant="body" component="span" gutterBottom>
                  {ClientName ? ClientName : "Client Address"}
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={4} md={4} className="forBorder">
              <Grid>
                <Typography variant="h6" component="span" gutterBottom>
                  Date:
                </Typography>
                <Typography variant="body" component="span" gutterBottom>
                  {date}
                </Typography>
              </Grid>
              <Grid>
                <Typography variant="h6" component="span" gutterBottom>
                  Invoice No:
                </Typography>
                <Typography variant="body" component="span" gutterBottom>
                  12
                </Typography>
              </Grid>
              <Grid>
                <Typography variant="h6" component="span" gutterBottom>
                  Buyer's PO Number:
                </Typography>
                <Typography variant="body" component="span" gutterBottom>
                  UK1234566
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} className="forBorder">
            <br />
            <br />
          </Grid>
          <Grid item container xs={12} sm={12}>
            <Grid item xs={6} sm={6} className="forBorder">
              <Typography variant="h6" component="div">
                Invoice Description:
              </Typography>
            </Grid>
            <Grid item xs={2} sm={2} className="forBorder">
              <Typography variant="h6" component="div">
                HSN Code
              </Typography>
            </Grid>
            <Grid item xs={4} sm={4} className="forBorder">
              <Typography variant="h6" component="div">
                Amount (in Eur)
              </Typography>
            </Grid>
          </Grid>
          <Grid item container xs={12} sm={12}>
            <Grid item xs={6} sm={6} className="forBorder">
              <Typography variant="body" component="div">
                Market Research Services
              </Typography>
              <Typography variant="body" component="div">
                PID - P1076678
              </Typography>
              <Typography variant="body" component="div">
                (133755 -P107667 - Sleeping Beauty SKU - France)
              </Typography>
            </Grid>
            <Grid
              item
              xs={2}
              sm={2}
              className="forBorder"
              display="flex"
              justifyContent="flex-end"
              alignItems="center"
            >
              <Typography variant="body" component="div">
                987665
              </Typography>
            </Grid>
            <Grid
              item
              xs={4}
              sm={4}
              className="forBorder"
              display="flex"
              justifyContent="flex-start"
              alignItems="flex-end"
            >
              <Typography variant="body" component="div">
                120
              </Typography>
            </Grid>
          </Grid>
          <Grid item container xs={12} sm={12}>
            <Grid item xs={6} sm={6} className="forBorder">
              <Typography variant="h6" component="div" textAlign="center">
                Total Value(USD)
              </Typography>
            </Grid>
            <Grid item xs={2} sm={2} className="forBorder">
              <Typography variant="h6" component="div">
                {" "}
              </Typography>
            </Grid>
            <Grid item xs={4} sm={4} className="forBorder">
              <Typography variant="body" component="div">
                120
              </Typography>
            </Grid>
          </Grid>
          <Grid item container xs={12} sm={12}>
            <Grid item xs={6} sm={6} className="forBorder">
              <Typography variant="h6" component="div">
                Total Value(INR)
              </Typography>
            </Grid>
            <Grid item xs={2} sm={2} className="forBorder">
              <Typography variant="h6" component="div">
                {" "}
              </Typography>
            </Grid>
            <Grid item xs={4} sm={4} className="forBorder">
              <Typography variant="h6" component="div">
                Rs 10,300/-
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} className="forBorder">
            <br />
          </Grid>
          <Grid item container direction="row">
            <Grid item xs={3} md={3} className="forBorder">
              <Typography variant="h6" component="div">
                Amount in words
              </Typography>
            </Grid>
            <Grid item xs={9} md={9} className="forBorder">
              <Stack textAlign="center">
                <Typography variant="body" component="div">
                  One hundred and twenty euros is equal to Ten thousand and
                  eight hundred indian rupees.
                </Typography>
                <Typography variant="body" component="div">
                  ( 1 EUR = 50 INR )
                </Typography>
              </Stack>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} className="forBorder">
            <Grid xs={9} md={9}>
              <Typography variant="h6" component="div" gutterBottom>
                SUPPLY MEANT FOR EXPORT OF SERVICE UNDER LETTER OF UNDERTAKING
                WITHOUT PAYMENT OF INTEGRATED TAX
              </Typography>
              <Typography variant="body" component="div" gutterBottom>
                LUT (ARN no.) - ADD70456789765, dated {date}
              </Typography>
            </Grid>
          </Grid>
          <Grid item container direction="row">
            <Grid item xs={8} md={8} className="forBorder">
              <Typography variant="h6" component="div">
                Bank Details:
              </Typography>
            </Grid>
            <Grid item xs={4} md={4} className="forBorder">
              <Typography variant="h6" component="div">
                For Scrutiny Global:
              </Typography>
            </Grid>
          </Grid>
          <Grid item container direction="row">
            <Grid item xs={8} md={8} className="forBorder">
              <Grid>
                <Typography variant="h6" component="span" gutterBottom>
                  Name:
                </Typography>
                <Typography variant="body" component="span" gutterBottom>
                  Bank Details
                </Typography>
              </Grid>
              <Grid>
                <Typography variant="h6" component="span" gutterBottom>
                  Bank Name:
                </Typography>
                <Typography variant="body" component="span" gutterBottom>
                  Bank Details
                </Typography>
              </Grid>
              <Grid>
                <Typography variant="h6" component="span" gutterBottom>
                  Account Type:
                </Typography>
                <Typography variant="body" component="span" gutterBottom>
                  Bank Details
                </Typography>
              </Grid>
              <Grid>
                <Typography variant="h6" component="span" gutterBottom>
                  Account Number:
                </Typography>
                <Typography variant="body" component="span" gutterBottom>
                  Bank Details
                </Typography>
              </Grid>
              <Grid>
                <Typography variant="h6" component="span" gutterBottom>
                  IFSC:
                </Typography>
                <Typography variant="body" component="span" gutterBottom>
                  Bank Details
                </Typography>
              </Grid>
              <Grid>
                <Typography variant="h6" component="span" gutterBottom>
                  Swift Code:
                </Typography>
                <Typography variant="body" component="span" gutterBottom>
                  Bank Details
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              xs={4}
              md={4}
              className="forBorder"
              justifyContent="flex-end"
              textAlign="right"
              alignItems="flex-end"
              gutterBottom
            >
              <Typography variant="h6" component="div">
                PRASHANT KUMAR (prop.)
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        </Grid>
      </Grid>
    </Modal>
  );
};

export default InvoiceModal;
