import React, { useState } from "react";
import { Grid, Paper } from "@mui/material";
import StepForm from "../../../Components/StepForm/Index";
import { MuiTextField } from "../../../MuiComponents/MuiTextField/Index";
import { MuiDropDown } from "../../../MuiComponents/MuiDropDown/Index";
import CustomModal from "../../../MuiComponents/MuiModal/Index";
import Layout from "../Layout";
import "./Style.css";

const AddClient = () => {
  const [clientName, setClientName] = useState("");
  const [contactName, setContactName] = useState("");
  const [alternateContactName, setAlternateContactName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [alternateContactNumber, setAlternateContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [websiteLink, setWebsiteLink] = useState("");
  const [status, setStatus] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [currency, setCurrency] = useState("");
  const [industry, setIndustry] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const onChangeCountry = (e) => {
    setCountry(e.target.value);
  };

  const onChangeClientName = (e) => {
    setClientName(e.target.value);
  };

  const onChangeContactName = (e) => {
    setContactName(e.target.value);
  };

  const onChangeAlternateContactName = (e) => {
    setAlternateContactName(e.target.value);
  };

  const onChangeContactNumber = (e) => {
    setContactNumber(e.target.value);
  };

  const onChangeAlternateContactNumber = (e) => {
    setAlternateContactNumber(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangeWebsiteLink = (e) => {
    setWebsiteLink(e.target.value);
  };

  const onChangeStatus = (e) => {
    setStatus(e.target.value);
  };

  const onChangeAddress = (e) => {
    setAddress(e.target.value);
  };

  const onChangeCurrency = (e) => {
    setCurrency(e.target.value);
  };

  const onChangeIndustry = (e) => {
    setIndustry(e.target.value);
  };
  const steps = [
    [
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
              value={contactName}
              label="Contact Name"
              // defaultValue={reduxData?.city || ""}
              onChange={onChangeContactName}
              className="forRegister"
            />
          </Grid>
          <Grid item md={5}>
            <MuiTextField
              type="text"
              value={alternateContactName}
              label="Alternate Contact Name"
              // defaultValue={reduxData?.state || ""}
              onChange={onChangeAlternateContactName}
              className="forRegister"
            />
          </Grid>
        </Grid>
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
        <MuiTextField
          type="text"
          value={email}
          label="Email"
          onChange={onChangeEmail}
          className="forRegister"
        />
      </Grid>,
      <Grid item>
        <MuiTextField
          type="text"
          value={websiteLink}
          label="Website Link"
          onChange={onChangeWebsiteLink}
          className="forRegister"
        />
      </Grid>,
      <Grid item>
        <MuiDropDown
          value={status}
          //   defaultValue={reduxData?.accountType || ""}
          onChange={onChangeStatus}
          options={["status 1", "status 2", "status 3"]}
          label="Status"
          className="forRegister"
        />
      </Grid>,
    ],
    [
      <Grid item>
        <MuiTextField
          type="text"
          value={address}
          label="Address"
          onChange={onChangeAddress}
          className="forRegister"
        />
      </Grid>,
      <Grid item>
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item md={5}>
            <MuiTextField
              type="text"
              value={country}
              label="Country"
              // defaultValue={reduxData?.city || ""}
              onChange={onChangeCountry}
              className="forRegister"
            />
          </Grid>
          <Grid item md={5}>
            <MuiTextField
              type="text"
              value={currency}
              label="Currency"
              // defaultValue={reduxData?.state || ""}
              onChange={onChangeCurrency}
              className="forRegister"
            />
          </Grid>
        </Grid>
      </Grid>,
      <Grid item>
        <MuiDropDown
          value={industry}
          //   defaultValue={reduxData?.accountType || ""}
          onChange={onChangeIndustry}
          options={["industry 1", "industry 2", "industry 3"]}
          label="Industry"
          className="forRegister"
        />
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
    <Grid container alignItems="center">
      <Grid item className="heading-grid">
        <Paper elevation={0} className="screenHeading">
          Add a New Client
        </Paper>
      </Grid>
      <Grid item>
        <Paper elevation={2} className="form-grid">
          <Grid className="form-sub-grid">
            <StepForm steps={steps} onSave={handleSave} />
          </Grid>
        </Paper>
        <CustomModal
          show={showSuccessModal}
          handleClose={handleClose}
          heading="Client Saved 🎉"
          buttonPrimaryText="View"
          // image={f}
          // handleModalButtonClick={handleGotToWaitingScreen}
        />
      </Grid>
    </Grid>
  );

  return <Layout content={content} navbarHeading="ADD CLIENT" />;
};

export default AddClient;
