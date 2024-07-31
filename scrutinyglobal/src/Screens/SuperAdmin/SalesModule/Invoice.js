import React, { useState } from "react";
import {
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import invoiceImage from "../../../Images/Invoice/InvoiceImage.svg";
import Layout from "../Layout";
import EditableField from "../../../Components/EditTableField/Index";
import "./Style.css";

const Invoice = () => {
  const headings = ["Description", "No of Surveys", "Cost/Survey", "Total"];
  const [rows, setRows] = useState([
    { description: "", noOfSurveys: "", costPerSurvey: "", total: "0" },
    { description: "", noOfSurveys: "", costPerSurvey: "", total: "0" },
  ]);
  const [usdTotal, setUsdTotal] = useState(0);
  const [inrTotal, setInrTotal] = useState(0);

  const handleChange = (index, key, value) => {
    const updatedRows = [...rows];
    updatedRows[index][key] = value;
    if (key === "noOfSurveys" || key === "costPerSurvey") {
      updatedRows[index].total = (
        (Number(updatedRows[index].noOfSurveys) || 0) *
        (Number(updatedRows[index].costPerSurvey) || 0)
      ).toFixed(2);
    }
    setRows(updatedRows);

    const inrTotal = updatedRows.reduce(
      (sum, row) => sum + Number(row.total || 0),
      0
    );
    setInrTotal(inrTotal.toFixed(2));
    setUsdTotal((inrTotal / 74.5).toFixed(2)); // Assuming 1 USD = 74.5 INR
  };

  const content = (
    <Grid container direction="row" spacing={2} className="dashboard-container">
      <Grid item container md={6}>
        <Grid item>
          <Button>Add New Invoice</Button>
        </Grid>
        <Grid item md={12}>
          <Paper elevation={2}>
            <Grid item container>
              <Grid item>
                <Typography>Oops!! No Invoice Yet</Typography>
              </Grid>
              <Grid item>
                <img
                  src={invoiceImage}
                  classNAme="invoiceImage"
                  alt="No invoice yet!"
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <Grid item container md={6}>
        <Grid
          item
          container
          md={12}
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item>
            <Button>Download as a PDF</Button>
          </Grid>
          <Grid item>
            <Button>Save</Button>
          </Grid>
        </Grid>
        <Grid item md={12}>
          <Paper elevation={2}>
            <Grid item container spacing={2}>
              <Grid item md={6}>
                <Typography textAlign="left" className="invoice-heading">
                  Scrutiny Global
                </Typography>
                <Typography className="invoice-subtext" gutterBottom>
                  +91-7678294335
                </Typography>
                <Typography className="invoice-subtext" gutterBottom>
                  business@scrutinyglobal.com
                </Typography>
                <Typography className="invoice-subtext" gutterBottom>
                  Second floor L-295, Mohan Garden, Uttam Nagar, New Delhi-
                  110059. INDIA
                </Typography>
                <Typography className="invoice-subtext" gutterBottom>
                  GSTIN - 071GJPK820IEIZF
                </Typography>
              </Grid>
              <Grid item md={6}>
                <Typography textAlign="right" className="invoice-heading">
                  Invoice -001
                </Typography>
                <Grid item container>
                  <Grid item>
                    <Typography>Invoice Number :</Typography>
                  </Grid>
                  <Grid item>
                    <Typography>001</Typography>
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item>Invoice Date :</Grid>
                  <Grid item>12 / 06 /2024</Grid>
                </Grid>
                <Grid item container>
                  <Grid item>Buyer’s PO Number :</Grid>
                  <Grid item>Editable</Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={12}>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      {headings.map((heading, index) => (
                        <TableCell key={index} align="right">
                          {heading}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row, rowIndex) => (
                      <TableRow key={rowIndex}>
                        <TableCell align="right">
                          <EditableField
                            value={row.description}
                            onChange={(e) =>
                              handleChange(
                                rowIndex,
                                "description",
                                e.target.value
                              )
                            }
                            label="Description"
                          />
                        </TableCell>
                        <TableCell align="right">
                          <EditableField
                            value={row.noOfSurveys}
                            onChange={(e) =>
                              handleChange(
                                rowIndex,
                                "noOfSurveys",
                                e.target.value
                              )
                            }
                            label="No of Surveys"
                          />
                        </TableCell>
                        <TableCell align="right">
                          <EditableField
                            value={row.costPerSurvey}
                            onChange={(e) =>
                              handleChange(
                                rowIndex,
                                "costPerSurvey",
                                e.target.value
                              )
                            }
                            label="Cost/Survey"
                          />
                        </TableCell>
                        <TableCell align="right">{row.total}</TableCell>
                      </TableRow>
                    ))}
                    <TableRow>
                      <TableCell colSpan={3} align="right">
                        Total (USD):
                      </TableCell>
                      <TableCell align="right">{usdTotal}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell colSpan={3} align="right">
                        Total (INR):
                      </TableCell>
                      <TableCell align="right">{inrTotal}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Paper>
        </Grid>
        <Grid item container md={12}>
          <Grid item md={6}>
            <Typography>Project/Vendor details</Typography>
            <Typography>Company Name</Typography>
            <Typography>janesmith@xyzsupplies.com</Typography>
            <Typography>456 Elm Street, Downtown, Chicago, IL 60601</Typography>
            <Typography>8765432167</Typography>
          </Grid>
          <Grid item md={6}>
            <Typography>Client Details</Typography>
            <Typography>Company Name</Typography>
            <Typography>janesmith@xyzsupplies.com</Typography>
            <Typography>456 Elm Street, Downtown, Chicago, IL 60601</Typography>
            <Typography>8765432167</Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Typography>
            SUPPLY MEANT FOR EXPORT OF SERVICE UNDER LETTER OF UNDERTAKING
            WITHOUT PAYMENT OF INTEGRATED TAX
          </Typography>
          <Typography>
            LUT (ARN no.) - ADD70456789765, dated 14/04/2024
          </Typography>
        </Grid>

        <Grid item container>
          <Grid item>
            <Typography>PRASHANT KUMAR (prop. )</Typography>
          </Grid>
          <Grid item>
            <Typography>SIGNATURE HERE</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );

  return <Layout content={content} navbarHeading="SALES MODULE" />;
};

export default Invoice;
