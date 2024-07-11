import React, { useState } from "react";
import { Grid, Paper } from "@mui/material";
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
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAddProjectStep } from "../../../Store/Slice/stepSlice";

const AddProject = () => {
  const navigate = useNavigate();
  const currentStep = useSelector(selectAddProjectStep);
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
  const [columnVisibilityModel, setColumnVisibilityModel] = useState({
    id: false,
  });

  const [columns, setColumns] = useState([
    { field: "id" },
    {
      field: "country",
      headerName: "Country",
      width: 100,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "IR",
      headerName: "IR%",
      width: 70,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "LOI",
      headerName: "LOI(min)",
      type: "number",
      width: 80,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "completesNeeded",
      headerName: "Completes needed",
      width: 150,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "completesFeasable",
      headerName: "Completes Feasable",
      width: 150,
      align: "center",
      headerAlign: "center",
    },
  ]);

  const rows = [
    {
      id: "1",
      country: "India",
      IR: "12",
      LOI: "10",
      completesNeeded: "200",
      completesFeasable: "180",
    },
    {
      id: "2",
      country: "India",
      IR: "12",
      LOI: "10",
      completesNeeded: "200",
      completesFeasable: "180",
    },
    {
      id: "3",
      country: "India",
      IR: "12",
      LOI: "10",
      completesNeeded: "200",
      completesFeasable: "180",
    },
    {
      id: "4",
      country: "India",
      IR: "12",
      LOI: "10",
      completesNeeded: "200",
      completesFeasable: "180",
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
          type="text"
          value={description}
          label="Description"
          onChange={onChangeDescription}
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
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        <Grid item container xs={12}>
          <Grid item md={10}>
            <Paper elevation={0} className="datagrid-label">
              Based on your country selection:
            </Paper>
          </Grid>
          <Grid
            item
            container
            md={2}
            justifyContent="flex-end"
            alignItems="center"
          >
            <Grid item>
              <AddIcon />
            </Grid>
            <Grid item>
              <DeleteOutlinedIcon color="error" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <MuiDataGrid
            rows={rows}
            columns={columns}
            checkboxSelection={true}
            columnVisibilityModel={columnVisibilityModel}
          />
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

  const handleGotToWaitingScreen = () => {
    navigate("/projects");
  };

  const content = (
    // <Grid container alignItems="center" justifyContent="center">
    //   <Grid
    //     item
    //     container
    //     md={7}
    //     className="form-grid"
    //     justifyContent="center"
    //     alignItems="center"
    //   >
    //     <Grid item className="heading-grid">
    //       <Paper elevation={0} className="screenHeading">
    //         Add Project
    //       </Paper>
    //     </Grid>
    //     <Grid item container>
    //       <Grid item className="fixed-heading">
    //         {currentStep > 2
    //           ? "Sampling Requirements"
    //           : "Project Specifications"}
    //       </Grid>
    //       {/* <Paper elevation={2} className="fixing-height"> */}
    //       <Paper elevation={2} className="form-sub-grid">
    //         <StepForm steps={steps} onSave={handleSave} />
    //       </Paper>
    //     </Grid>
    //   </Grid>
    //   <Grid item>
    //     <CustomModal
    //       show={showSuccessModal}
    //       handleClose={handleClose}
    //       heading="Project Saved 🎉"
    //       buttonPrimaryText="View"
    //       handleModalButtonClick={handleGotToWaitingScreen}
    //     />
    //   </Grid>
    // </Grid>
    <Grid container alignItems="center" justifyContent="center">
      <Grid
        item
        container
        md={7}
        className="form-grid"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item className="heading-grid">
          <Paper elevation={0} className="screenHeading">
            Add Project
          </Paper>
        </Grid>
        <Grid item container className="content-grid">
          <Grid item className="fixed-heading">
            {currentStep > 2
              ? "Sampling Requirements"
              : "Project Specifications"}
          </Grid>
          <Paper elevation={2} className="form-sub-grid">
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
          handleModalButtonClick={handleGotToWaitingScreen}
        />
      </Grid>
    </Grid>
  );

  return (
    <Layout
      content={content}
      navbarHeading="ADD PROJECT"
      formType="add-project"
    />
  );
};

export default AddProject;
