import React, { useEffect, useState } from "react";
import { Button, Grid, Paper, Typography } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import invoiceImage from "../../../Images/Invoice/InvoiceImage.svg";
import Layout from "../Layout";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import AddIcon from "@mui/icons-material/Add";
import EditableField from "../../../Components/EditTableField/Index";
import "./Style.css";
import { API_PREFIX } from "../../../config";
import FormModal from "../../../Components/CustomModals/FormModal/Index";
import InvoiceCard from "../../../Components/InvoiceCard/Index";
import { v4 as uuidv4 } from "uuid";

const POScreen = () => {
  const [client, setClient] = useState("");
  const [project, setProject] = useState("");
  const [country, setCountry] = useState("");
  const [currency, setCurrency] = useState("");
  const [date, setDate] = useState("");
  const [savedData, setSavedData] = useState(null);
  const [responseData, setResponseData] = useState(false);
  const [projectOptions, setProjectOptions] = useState([]);
  const [clientOptions, setClientOptions] = useState([]);
  const [usdTotal, setUsdTotal] = useState(0);
  const [inrTotal, setInrTotal] = useState(0);
  const [showAddNewInvoiceModal, setShowAddNewInvoiceModal] = useState(false);

  const [savedInvoices, setSavedInvoices] = useState([]);
  const [selectedInvoice, setSelectedInvoice] = useState(null);

  const onChangeClient = (e) => {
    const selectedClient = e.target.value;
    setClient(selectedClient);

    const clientData = responseData.find(
      (client) =>
        client.contact_name === selectedClient || client.name === selectedClient
    );
    if (clientData) {
      setCountry(clientData.country);
    }
  };
  const onChangeProject = (e) => setProject(e.target.value);
  const onChangeCountry = (e) => setCountry(e.target.value);
  const onChangeCurrency = (e) => setCurrency(e.target.value);
  const onChangeDate = (e) => setDate(e.target.value);
  const headings = ["Description", "No of Surveys", "Cost/Survey", "Total"];
  const [rows, setRows] = useState([
    { description: "", noOfSurveys: "", costPerSurvey: "", total: "0" },
    { description: "", noOfSurveys: "", costPerSurvey: "", total: "0" },
  ]);

  const handleFormModalSubmit = (e) => {
    e.preventDefault();
    const formData = {
      client,
      project,
      country,
      currency,
      date,
    };
    setSavedData(formData);
    setShowAddNewInvoiceModal(false);
    setRows([
      { description: "", noOfSurveys: "", costPerSurvey: "", total: "0" },
      { description: "", noOfSurveys: "", costPerSurvey: "", total: "0" },
    ]);
  };

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

  const handleSave = () => {
    const description = rows[0].description || rows[1].description;
    const newInvoice = {
      total: inrTotal,
      clientName: client,
      date,
      project,
      rows,
      country,
      currency,
      usdTotal,
      inrTotal,
      description,
      invoiceNumber: selectedInvoice
        ? selectedInvoice.invoiceNumber
        : uuidv4().slice(0, 3),
    };
    if (selectedInvoice) {
      // Update existing invoice
      const updatedInvoices = savedInvoices.map((invoice) =>
        invoice.invoiceNumber === selectedInvoice.invoiceNumber
          ? newInvoice
          : invoice
      );
      setSavedInvoices(updatedInvoices);
    } else {
      // Add new invoice
      setSavedInvoices([newInvoice, ...savedInvoices]);
    }
    setSelectedInvoice(newInvoice);
  };

  const handleInvoiceSelect = (index) => {
    const selectedInvoice = savedInvoices[index];
    setSelectedInvoice(selectedInvoice);
    setClient(selectedInvoice.clientName);
    setDate(selectedInvoice.date);
    setProject(selectedInvoice.project);
    setRows(selectedInvoice.rows);
    setCountry(selectedInvoice.country);
    setCurrency(selectedInvoice.currency);
    setUsdTotal(selectedInvoice.usdTotal);
    setInrTotal(selectedInvoice.inrTotal);
  };

  useEffect(() => {
    if (savedInvoices.length > 0 && !selectedInvoice) {
      setSelectedInvoice(savedInvoices[0]);
    }
  }, [savedInvoices]);

  const handleClose = () => {
    setShowAddNewInvoiceModal(false);
  };

  useEffect(() => {
    getProjectData();
  }, []);

  function getProjectData() {
    fetch(`${API_PREFIX}getProjectList`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setResponseData(data);
        const projectNames = data.map((project) => project.project_name);
        const clientNames = data.map((client) => client.name);
        setProjectOptions(projectNames);
        setClientOptions(clientNames);
      })
      .catch(function (error) {
        console.error("Error fetching data:", error);
      });
  }

  const handlePdfDownload = () => {
    const input = document.getElementById("pdf-content");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "pt", "a4"); // 'p' for portrait, 'pt' for points unit, 'a4' for size
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("Invoice.pdf");
    });
  };

  const content = (
    <Grid container direction="row" spacing={2} className="dashboard-container">
      <Grid item container md={6}>
        <Grid item md={12}>
          <Paper elevation={6} className="invoce-grid-2">
            <Grid
              item
              container
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Grid item md={12}>
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<AddIcon />}
                  className="invoice-button"
                  onClick={() => {
                    setShowAddNewInvoiceModal(true);
                    setClient("");
                    setProject("");
                    setCountry("");
                    setCurrency("");
                    setDate("");
                    setRows([
                      {
                        description: "",
                        noOfSurveys: "",
                        costPerSurvey: "",
                        total: "0",
                      },
                      {
                        description: "",
                        noOfSurveys: "",
                        costPerSurvey: "",
                        total: "0",
                      },
                    ]);
                  }}
                >
                  Add New Invoice
                </Button>
              </Grid>
              {savedInvoices.length > 0 ? (
                savedInvoices.map((invoice, index) => (
                  <InvoiceCard
                    key={index}
                    total={invoice.total}
                    clientName={invoice.clientName}
                    date={invoice.date}
                    description={invoice.description}
                    invoiceNumber={invoice.invoiceNumber}
                    checked={
                      selectedInvoice?.invoiceNumber === invoice.invoiceNumber
                    }
                    onClick={() => handleInvoiceSelect(index)}
                  />
                ))
              ) : (
                <Grid
                  item
                  container
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Grid item>
                    <Typography className="no-invoice-text">
                      Oops!! No Invoice Yet
                    </Typography>
                  </Grid>
                  <Grid item>
                    <img
                      src={invoiceImage}
                      className="invoiceImage"
                      alt="No invoice yet!"
                    />
                  </Grid>
                </Grid>
              )}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      {savedData && (
        <Grid item container md={6}>
          <Grid item md={12}>
            <Paper elevation={6} className="invoce-grid-2">
              <Grid
                item
                container
                md={12}
                justifyContent="space-between"
                alignItems="center"
                marginBottom={"4%"}
              >
                <Grid item>
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={handlePdfDownload}
                    startIcon={<DownloadOutlinedIcon />}
                  >
                    Download as a PDF
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    size="small"
                    variant="contained"
                    color="success"
                    onClick={handleSave}
                  >
                    Save
                  </Button>
                </Grid>
              </Grid>
              <Paper elevation={5} id="pdf-content" className="download-grid">
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
                      Invoice -{" "}
                      {selectedInvoice ? selectedInvoice.invoiceNumber : "NEW"}
                    </Typography>

                    <Grid item container justifyContent="flex-end">
                      <Grid item>
                        <Typography className="invoice-subtext-label">
                          Invoice Date :
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography className="invoice-subtext">
                          {date}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item container className="table-border" md={12}>
                  <Grid item container md={12}>
                    {headings.map((heading, index) => (
                      <Grid item md={3} key={index}>
                        <Typography align="center" className="table-heading">
                          {heading}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                  {rows.map((row, rowIndex) => (
                    <Grid
                      item
                      container
                      key={rowIndex}
                      paddingLeft={1}
                      paddingRight={1}
                      spacing={2}
                      md={12}
                    >
                      <Grid item md={3}>
                        <EditableField
                          type="text"
                          value={row.description}
                          onChange={(e) =>
                            handleChange(
                              rowIndex,
                              "description",
                              e.target.value
                            )
                          }
                        />
                      </Grid>
                      <Grid item md={3}>
                        <EditableField
                          value={row.noOfSurveys}
                          onChange={(e) =>
                            handleChange(
                              rowIndex,
                              "noOfSurveys",
                              e.target.value
                            )
                          }
                        />
                      </Grid>
                      <Grid item md={3}>
                        <EditableField
                          value={row.costPerSurvey}
                          onChange={(e) =>
                            handleChange(
                              rowIndex,
                              "costPerSurvey",
                              e.target.value
                            )
                          }
                        />
                      </Grid>
                      <Grid item md={3}>
                        <Typography
                          align="right"
                          className="table-editable-row"
                        >
                          {row.total}
                        </Typography>
                      </Grid>
                    </Grid>
                  ))}
                  {/* <Grid item container>
                    <Grid item md={9}>
                      <Typography className="table-editable-row">
                        <b>Total</b> (USD):
                      </Typography>
                    </Grid>
                    <Grid item md={3}>
                      <Typography align="right" className="table-editable-row">
                        {usdTotal}
                      </Typography>
                    </Grid>
                  </Grid> */}
                  <Grid
                    item
                    container
                    paddingLeft={1}
                    paddingRight={1}
                    className="total-border"
                  >
                    <Grid item md={9}>
                      <Typography className="table-editable-row">
                        <b>Total</b> (INR):
                      </Typography>
                    </Grid>
                    <Grid item md={3}>
                      <Typography align="right" className="table-editable-row">
                        {inrTotal}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item container md={12}>
                  <Grid item md={6}>
                    <Typography className="table2-heading">
                      Project/Vendor details
                    </Typography>
                    <Grid item className="table2-border">
                      <Typography className="table-companyName">
                        {savedData.project}
                      </Typography>
                      <Typography className="table2-data">
                        janesmith@xyzsupplies.com
                      </Typography>
                      <Typography className="table2-data">
                        456 Elm Street, Downtown, Chicago, IL 60601
                      </Typography>
                      <Typography className="table2-data">
                        8765432167
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item md={6}>
                    <Typography className="table2-heading">
                      Vendor Details
                    </Typography>
                    <Grid item className="table2-border">
                      <Typography className="table-companyName">
                        {savedData.client}
                      </Typography>
                      <Typography className="table2-data">
                        janesmith@xyzsupplies.com
                      </Typography>
                      <Typography className="table2-data">
                        456 Elm Street, Downtown, Chicago, IL 60601
                      </Typography>
                      <Typography className="table2-data">
                        8765432167
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item md={12}>
                  <Typography className="bottomText-1">
                    SUPPLY MEANT FOR EXPORT OF SERVICE UNDER LETTER OF
                    UNDERTAKING WITHOUT PAYMENT OF INTEGRATED TAX
                  </Typography>
                  <Typography className="bottomText-1">
                    LUT (ARN no.) - ADD70456789765, dated {savedData.date}
                  </Typography>
                </Grid>

                <Grid item container md={12} alignItems={"flex-end"}>
                  <Grid item md={6}>
                    <Typography className="class-prashant">
                      PRASHANT KUMAR (prop. )
                    </Typography>
                  </Grid>
                  <Grid item md={6}>
                    <Typography className="signature-space">
                      SIGNATURE HERE
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Paper>
          </Grid>
        </Grid>
      )}
      <FormModal
        vendor={true}
        show={showAddNewInvoiceModal}
        handleSubmit={handleFormModalSubmit}
        handleClose={handleClose}
        clientOptions={clientOptions}
        projectOptions={projectOptions}
        formData={{
          client,
          project,
          country,
          currency,
          date,
        }}
        onChangeClient={onChangeClient}
        onChangeProject={onChangeProject}
        onChangeDate={onChangeDate}
        onChangeCountry={onChangeCountry}
        onChangeCurrency={onChangeCurrency}
      />
    </Grid>
  );

  return <Layout content={content} navbarHeading="SALES MODULE-PO" />;
};

export default POScreen;
