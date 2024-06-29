import React, { useState } from "react";
import { Grid, TextField, Typography } from "@mui/material";
import StepForm from "../../../Components/StepForm/Index";
import { MuiTextField } from "../../../MuiComponents/MuiTextField/Index";
import { MuiDropDown } from "../../../MuiComponents/MuiDropDown/Index";
import Layout from "../Layout";

const AddClient = () => {
  const [name, setName] = useState("");
  const [clientName, setClientName] = useState("");
  const [contactName, setContactName] = useState("");
  const [alternateContactName, setAlternateContactName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [alternateContactNumber, setAlternateContactNumber] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
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
  const steps = [
    [
      <Grid item xs={12}>
        <MuiDropDown
          value={clientName}
          //   defaultValue={reduxData?.accountType || ""}
          onChange={onChangeClientName}
          options={["User", "Premium", "Vendor"]}
          label="Client Name"
          className="forRegister"
        />
      </Grid>,
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <MuiTextField
              type="text"
              value={contactName}
              label="Contact Name"
              // defaultValue={reduxData?.city || ""}
              onChange={onChangeContactName}
              className="forRegister"
            />
          </Grid>
          <Grid item xs={12} md={6}>
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
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <MuiTextField
              type="text"
              value={contactNumber}
              label="Contact Number"
              // defaultValue={reduxData?.city || ""}
              onChange={onChangeContactNumber}
              className="forRegister"
            />
          </Grid>
          <Grid item xs={12} md={6}>
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
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <MuiTextField
              type="text"
              value={contactNumber}
              label="Contact Number"
              // defaultValue={reduxData?.city || ""}
              onChange={onChangeContactNumber}
              className="forRegister"
            />
          </Grid>
          <Grid item xs={12} md={6}>
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
      <Grid item xs={12}>
        <MuiTextField
          type="text"
          value={name}
          label="Name"
          onChange={onChangeName}
          className="forRegister"
        />
      </Grid>,
    ],
    [
      <Grid item xs={12}>
        <MuiTextField
          type="text"
          value={name}
          label="Name"
          onChange={onChangeName}
          className="forRegister"
        />
      </Grid>,
      <Grid item xs={12}>
        <MuiTextField
          type="text"
          value={name}
          label="Name"
          onChange={onChangeName}
          className="forRegister"
        />
      </Grid>,
    ],
  ];

  const handleSave = (formData) => {
    // Save form data
    console.log("Form Data:", formData);
  };

  const content = (
    <Grid container>
      <Grid item>
        <Typography>Add a New Client</Typography>
      </Grid>
      <Grid item>
        <StepForm steps={steps} onSave={handleSave} />
      </Grid>
    </Grid>
  );

  return <Layout content={content} navbarHeading="ADD CLIENT" />;
};

export default AddClient;
