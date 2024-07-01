import React, { useState } from "react";
import { Grid, Paper } from "@mui/material";
import StepForm from "../../../Components/StepForm/Index";
import { MuiTextField } from "../../../MuiComponents/MuiTextField/Index";
import { MuiDropDown } from "../../../MuiComponents/MuiDropDown/Index";
import Layout from "../Layout";
import "./Style.css";

const Clients = () => {
  const [clientName, setClientName] = useState("");
  const [projectName, setProjectName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [alternateContactNumber, setAlternateContactNumber] = useState("");
  const [audienceType, setAudienceType] = useState("");
  const [projectHead, setProjectHead] = useState("");
  const [projectBudget, setProjectBudget] = useState("");
  const [projectDocument, setProjectDocument] = useState("");
  const [spoc, setSpoc] = useState("");
  const [projectDescription, setProjectDescription] = useState("");

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

  const onChangeProjectDocument = (e) => {
    setProjectDocument(e.target.value);
  };

  const onChangeProjectDescription = (e) => {
    setProjectDescription(e.target.value);
  };

  const steps = [
    [
      <Grid item>
        <MuiTextField
          type="text"
          value={projectName}
          label="Project Name"
          // defaultValue={reduxData?.city || ""}
          onChange={onChangeProjectName}
          className="forRegister"
        />
      </Grid>,
      <Grid item>
        <MuiDropDown
          value={clientName}
          //   defaultValue={reduxData?.accountType || ""}
          onChange={onChangeClientName}
          options={["User", "Premium", "Vendor"]}
          label="Client Name"
          className="forRegister"
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
              className="forRegister"
            />
          </Grid>
          <Grid item md={5}>
            <MuiTextField
              type="text"
              value={alternateContactNumber}
              label="Alternate Contact Number"
              // defaultValue={reduxData?.state || ""}
              onChange={onChangeAlternateContactNumber}
              className="forRegister"
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
              className="forRegister"
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
              className="forRegister"
            />
          </Grid>
        </Grid>
      </Grid>,
      <Grid item>
        <MuiDropDown
          value={audienceType}
          //   defaultValue={reduxData?.accountType || ""}
          onChange={onChangeAudienceType}
          placeholder="College Students"
          options={["audienceType 1", "audienceType 2", "audienceType 3"]}
          label="Audience Type"
          className="forRegister"
        />
      </Grid>,
      <Grid item>
        <MuiTextField
          type="text"
          value={projectHead}
          label="Project Head"
          onChange={onChangeProjectHead}
          className="forRegister"
        />
      </Grid>,
    ],
    [
      <Grid item>
        <MuiTextField
          type="text"
          value={projectBudget}
          label="Project Budget"
          placeholder="Ex 40,000"
          onChange={onChangeProjectBudget}
          className="forRegister"
        />
      </Grid>,
      <Grid item>
        <MuiTextField
          type="text"
          value={spoc}
          label="Pre Sales SPOC"
          // defaultValue={reduxData?.state || ""}
          onChange={onChangeSPOC}
          className="forRegister"
        />
      </Grid>,
    ],
    [
      <Grid item>
        <MuiTextField
          type="text"
          value={projectDocument}
          label="Project Document"
          onChange={onChangeProjectDocument}
          className="forRegister"
          rows={4}
        />
      </Grid>,
      <Grid item>
        <MuiTextField
          type="text"
          value={projectDescription}
          label="Project Description"
          onChange={onChangeProjectDescription}
          className="forRegister"
          rows={4}
        />
      </Grid>,
    ],
  ];

  const handleSave = (formData) => {
    // Save form data
    console.log("Form Data:", formData);
  };

  const content = (
    <Grid container alignItems="center">
      <Grid item className="heading-grid">
        <Paper elevation={0} className="screenHeading">
          Add Project
        </Paper>
      </Grid>
      <Grid item>
        <Paper elevation={2} className="form-grid">
          <Grid className="form-sub-grid">
            <StepForm steps={steps} onSave={handleSave} />
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );

  return <Layout content={content} navbarHeading="ADD CLIENT" />;
};

export default Clients;
