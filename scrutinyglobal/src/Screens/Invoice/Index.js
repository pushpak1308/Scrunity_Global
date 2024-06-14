import React, { useState } from "react";
import MuiAdminNavbar from "../../MuiComponents/MuiNavbar/MuiAdminNavbar";
import { Grid, Typography } from "@mui/material";
import InvoiceImage from "./../../Images/Invoice/InvoiceImage.svg";
import "./Style.css";
import { MuiDropDown } from "../../MuiComponents/MuiDropDown/Index";
import { MuiTextField } from "../../MuiComponents/MuiTextField/Index";
import MuiContainedButton from "../../MuiComponents/MuiContainedButton/Index";
import InvoiceModal from "../../Components/InvoiceModal/Index";

const Invoice = () => {
  const [client, setClient] = useState("");
  const [totalNoofSurveys, setTotalNoofSurveys] = useState("");
  const [successfulSurveys, setSuccessfulSurveys] = useState("");
  const [costPerSurvey, setCostPerSurvey] = useState("");
  const [show, setShow] = useState(false);

  const onChangeClient = (e) => {
    setClient(e.target.value);
  };
  const onChangeTotalNoofSurveys = (e) => {
    setTotalNoofSurveys(e.target.value);
  };
  const onChangeSuccessfulSurveys = (e) => {
    setSuccessfulSurveys(e.target.value);
  };
  const onChangeCostPerSurvey = (e) => {
    setCostPerSurvey(e.target.value);
  };

  const handleSubmit = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <MuiAdminNavbar />
      <Grid container className="dashboard-container">
        <Grid item xs={12}>
          <Typography
            variant="h5"
            component="div"
            gutterBottom
            className="screenHeading"
          >
            Sales Module
          </Typography>
        </Grid>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item xs={12} md={5}>
            <form onSubmit={handleSubmit}>
              <Grid item xs={12}>
                <MuiDropDown
                  name="client"
                  value={client}
                  onChange={onChangeClient}
                  options={["client 1", "client 2", "client 3"]} // Example options
                  label="Select Client"
                />
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <MuiTextField
                    name="totalNoofSurveys"
                    type="text"
                    value={totalNoofSurveys}
                    label="Total No. of Surveys"
                    onChange={onChangeTotalNoofSurveys}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <MuiTextField
                    name="successfulSurveys"
                    type="text"
                    value={successfulSurveys}
                    label="Successful Surveys"
                    onChange={onChangeSuccessfulSurveys}
                  />
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <MuiTextField
                  name="costPerSurvey"
                  type="text"
                  value={costPerSurvey}
                  label="Cost/Survey"
                  placeholder="Ex: Rs 40"
                  onChange={onChangeCostPerSurvey}
                />
              </Grid>
            </form>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={InvoiceImage} alt="invoice" className="invoiceImage" />
          </Grid>
        </Grid>

        <Grid container justifyContent="space-evenly" alignItems="center">
          <Grid item>
            <MuiContainedButton
              buttonText={"Generate Invoice"}
              onClickFunction={handleSubmit}
              type="submit"
            />
          </Grid>
          <Grid item>
            <MuiContainedButton
              buttonText={"Generate PO"}
              onClickFunction={handleSubmit}
              type="button"
            />
          </Grid>
        </Grid>
      </Grid>
      <InvoiceModal
        show={show}
        handleClose={handleClose}
        ClientName={client}
        costPerSurvey={costPerSurvey}
        successfulSurveys={successfulSurveys}
        totalNoofSurveys={totalNoofSurveys}
      />
    </>
  );
};

export default Invoice;
