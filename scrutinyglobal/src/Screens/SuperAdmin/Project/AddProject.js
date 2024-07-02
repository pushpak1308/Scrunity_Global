import React, { useState } from "react";
import { AppBar, Grid, Paper, Toolbar } from "@mui/material";
import StepForm from "../../../Components/StepForm/Index";
import { MuiTextField } from "../../../MuiComponents/MuiTextField/Index";
import { MuiDropDown } from "../../../MuiComponents/MuiDropDown/Index";
import CustomModal from "../../../MuiComponents/MuiModal/Index";
import Layout from "../Layout";
import "../Client/Style.css";
import "./Style.css";
import { Add as AddIcon } from "@mui/icons-material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import MuiDataGrid from "../../../MuiComponents/MuiDataGrid/Index";

const AddProject = () => {
  const [clientName, setClientName] = useState("");
  const [projectName, setProjectName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [alternateContactNumber, setAlternateContactNumber] = useState("");
  const [audienceType, setAudienceType] = useState("");
  const [projectHead, setProjectHead] = useState("");
  const [projectBudget, setProjectBudget] = useState("");
  const [description, setDescription] = useState("");
  const [spoc, setSpoc] = useState("");
  const [billingCurrency, setBillingCurrency] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [document, setDocument] = useState(null);
  const [country, setCountry] = useState("");

  const onChangeClientName = (e) => {
    setClientName(e.target.value);
  };

  const onChangeProjectName = (e) => {
    setProjectName(e.target.value);
  };

  const onChangeContactNumber = (e) => {
    setContactNumber(e.target.value);
  };

  const onChangeAlternateContactNumber = (e) => {
    setAlternateContactNumber(e.target.value);
  };

  const onChangeStartDate = (e) => {
    setStartDate(e.target.value);
  };

  const onChangeEndDate = (e) => {
    setEndDate(e.target.value);
  };

  const onChangeProjectHead = (e) => {
    setProjectHead(e.target.value);
  };

  const onChangeAudienceType = (e) => {
    setAudienceType(e.target.value);
  };

  const onChangeProjectBudget = (e) => {
    setProjectBudget(e.target.value);
  };

  const onChangeSPOC = (e) => {
    setSpoc(e.target.value);
  };

  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const onChangeBillingCurrency = (e) => {
    setBillingCurrency(e.target.value);
  };

  const onChangeCountry = (e) => {
    setCountry(e.target.value);
  };

  const onChangeDocument = (event) => {
    const file = event.target.files[0];
    console.log("file :>> ", file);
    setDocument(file);
  };

  const [columns, setColumns] = useState([
    {
      field: "status",
      headerName: "Status",
      width: 150,
      headerAlign: "center",
      editable: true,
      align: "center",
      cellClassName: "dataGrid-cell",
      headerClassName: "dataGrid-header",
    },
    {
      field: "name",
      headerName: "Name",
      align: "center",
      type: "number",
      width: 110,
      headerAlign: "center",
      editable: true,
      cellClassName: "dataGrid-cell",
      headerClassName: "dataGrid-header",
      // valueGetter: (params) =>
      // `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
    {
      field: "number",
      headerName: "Number",
      sortable: false,
      width: 160,
      align: "center",
      headerClassName: "dataGrid-header",
      cellClassName: "dataGrid-cell",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "Email",
      sortable: false,
      width: 160,
      align: "center",
      headerClassName: "dataGrid-header",
      cellClassName: "dataGrid-cell",
      headerAlign: "center",
    },
    {
      field: "birthdate",
      headerName: "Birthdate",
      sortable: false,
      width: 160,
      align: "center",
      headerClassName: "dataGrid-header",
      cellClassName: "dataGrid-cell",
      headerAlign: "center",
    },
    {
      field: "address",
      headerName: "Address",
      sortable: false,
      width: 160,
      align: "center",
      headerClassName: "dataGrid-header",
      cellClassName: "dataGrid-cell",
      headerAlign: "center",
    },
    {
      field: "country",
      headerName: "Country",
      sortable: false,
      width: 160,
      align: "center",
      headerClassName: "dataGrid-header",
      cellClassName: "dataGrid-cell",
      headerAlign: "center",
    },
  ]);

  const rows = [
    {
      country: "India",
      IR: "12",
      LOI: "10",
      completesNeeded: "200",
      completesFeasable: "180",
      successURL: "www.ytrtrfgj.kjhjshsy@hsajg#hshkkdhhy",
      terminateURL: "www.ytrtrfgj.kjhjshsy@hsajg#hshkkdhhy",
      quotafulURL: "www.ytrtrfgj.kjhjshsy@hsajg#hshkkdhhy",
    },
    {
      country: "India",
      IR: "12",
      LOI: "10",
      completesNeeded: "200",
      completesFeasable: "180",
      successURL: "www.ytrtrfgj.kjhjshsy@hsajg#hshkkdhhy",
      terminateURL: "www.ytrtrfgj.kjhjshsy@hsajg#hshkkdhhy",
      quotafulURL: "www.ytrtrfgj.kjhjshsy@hsajg#hshkkdhhy",
    },
    {
      country: "India",
      IR: "12",
      LOI: "10",
      completesNeeded: "200",
      completesFeasable: "180",
      successURL: "www.ytrtrfgj.kjhjshsy@hsajg#hshkkdhhy",
      terminateURL: "www.ytrtrfgj.kjhjshsy@hsajg#hshkkdhhy",
      quotafulURL: "www.ytrtrfgj.kjhjshsy@hsajg#hshkkdhhy",
    },
    {
      country: "India",
      IR: "12",
      LOI: "10",
      completesNeeded: "200",
      completesFeasable: "180",
      successURL: "www.ytrtrfgj.kjhjshsy@hsajg#hshkkdhhy",
      terminateURL: "www.ytrtrfgj.kjhjshsy@hsajg#hshkkdhhy",
      quotafulURL: "www.ytrtrfgj.kjhjshsy@hsajg#hshkkdhhy",
    },
  ];

  const steps = [
    [
      <Grid item>
        <MuiTextField
          type="text"
          value={projectName}
          label="Project Name"
          // defaultValue={reduxData?.city || ""}
          onChange={onChangeProjectName}
          className="forAddClient"
        />
      </Grid>,
      <Grid item>
        <MuiDropDown
          value={clientName}
          //   defaultValue={reduxData?.accountType || ""}
          onChange={onChangeClientName}
          options={["User", "Premium", "Vendor"]}
          label="Client Name"
          className="forAddClient"
        />
      </Grid>,
      <Grid item>
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item md={5}>
            <MuiTextField
              type="text"
              value={contactNumber}
              label="Contact Number"
              // defaultValue={reduxData?.city || ""}
              onChange={onChangeContactNumber}
              className="forAddClient"
            />
          </Grid>
          <Grid item md={5}>
            <MuiTextField
              type="text"
              value={alternateContactNumber}
              label="Alternate Contact Number"
              // defaultValue={reduxData?.state || ""}
              onChange={onChangeAlternateContactNumber}
              className="forAddClient"
            />
          </Grid>
        </Grid>
      </Grid>,
    ],
    [
      <Grid item>
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item md={5}>
            <MuiTextField
              type="date"
              value={startDate}
              label="Start Date"
              // defaultValue={reduxData?.city || ""}
              onChange={onChangeStartDate}
              placeholder="01-07-2024"
              className="forAddClient"
            />
          </Grid>
          <Grid item md={5}>
            <MuiTextField
              type="date"
              value={endDate}
              label="End Date"
              // defaultValue={reduxData?.city || ""}
              onChange={onChangeEndDate}
              placeholder="01-07-2024"
              className="forAddClient"
            />
          </Grid>
        </Grid>
      </Grid>,

      <Grid item>
        <MuiTextField
          type="text"
          value={projectHead}
          label="Project Head"
          onChange={onChangeProjectHead}
          className="forAddClient"
        />
      </Grid>,
      <Grid item>
        <MuiTextField
          type="text"
          value={spoc}
          label="Pre Sales SPOC"
          // defaultValue={reduxData?.state || ""}
          onChange={onChangeSPOC}
          className="forAddClient"
        />
      </Grid>,
    ],
    [
      <Grid item>
        <MuiDropDown
          value={audienceType}
          //   defaultValue={reduxData?.accountType || ""}
          onChange={onChangeAudienceType}
          placeholder="College Students"
          options={["College Students", "audienceType 2", "audienceType 3"]}
          label="Audience Type"
          className="forAddClient"
        />
      </Grid>,
      <Grid item>
        <MuiTextField
          type="text"
          value={projectBudget}
          label="Project Budget"
          placeholder="Ex 40,000"
          onChange={onChangeProjectBudget}
          className="forAddClient"
        />
      </Grid>,
      <Grid item>
        <MuiTextField
          type="file"
          value={document}
          label="Document(id any)"
          placeholder=""
          onChange={onChangeDocument}
          className="forAddClient"
        />
      </Grid>,
    ],
    [
      <Grid item>
        <MuiDropDown
          value={billingCurrency}
          //   defaultValue={reduxData?.accountType || ""}
          onChange={onChangeBillingCurrency}
          placeholder="USD"
          options={["USD", "INR", "EURO"]}
          label="Billing Currency"
          className="forAddClient"
        />
      </Grid>,
      <Grid item>
        <MuiDropDown
          value={country}
          //   defaultValue={reduxData?.accountType || ""}
          onChange={onChangeCountry}
          options={["USA", "INDIA", "EUROPE"]}
          label="Country"
          className="forAddClient"
        />
      </Grid>,
      <Grid item>
        <MuiTextField
          type="text"
          value={description}
          label="Description"
          onChange={onChangeDescription}
          className="forAddClient"
        />
      </Grid>,
    ],
    [
      <Grid container>
        <Grid item container justifyContent="space-between">
          <Grid item xs={10}>
            Based on your country selection:
          </Grid>
          <Grid item container xs={2}>
            <Grid item>
              <AddIcon />
            </Grid>
            <Grid item>
              <DeleteOutlinedIcon color="error" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={10}>
          <MuiDataGrid rows={rows} columns={columns} />
        </Grid>
      </Grid>,
    ],
  ];

  const handleSave = (formData) => {
    // Save form data
    setShowSuccessModal(!showSuccessModal);
    console.log("Form Data:", formData);
  };

  const handleClose = () => {
    setShowSuccessModal(!showSuccessModal);
  };

  const content = (
    <Grid container alignItems="center" justifyContent="center">
      <Grid item className="heading-grid">
        <Paper elevation={0} className="screenHeading">
          Add Project
        </Paper>
      </Grid>
      <Grid
        item
        container
        md={7}
        className="form-grid"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item className="fixed-heading">
          Project Specifications
        </Grid>
        <Grid item>
          <Paper elevation={2} className="fixing-height">
            <StepForm steps={steps} onSave={handleSave} />
          </Paper>
        </Grid>
      </Grid>
      <Grid item>
        <CustomModal
          show={showSuccessModal}
          handleClose={handleClose}
          heading="Project Saved 🎉"
          buttonPrimaryText="View"
          // handleModalButtonClick={handleGotToWaitingScreen}
        />
      </Grid>
    </Grid>
  );

  return <Layout content={content} navbarHeading="ADD PROJECT" />;
};

export default AddProject;
