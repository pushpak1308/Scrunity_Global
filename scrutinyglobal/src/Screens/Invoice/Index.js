import React, { useState } from "react";
import MuiAdminNavbar from "../../MuiComponents/MuiNavbar/MuiAdminNavbar";
import { Grid, Typography } from "@mui/material";
import InvoiceImage from "./../../Images/Invoice/InvoiceImage.svg";
import "./Style.css";
import { MuiDropDown } from "../../MuiComponents/MuiDropDown/Index";
import { MuiTextField } from "../../MuiComponents/MuiTextField/Index";
import MuiContainedButton from "../../MuiComponents/MuiContainedButton/Index";

const Invoice = () => {
  const [client, setClient] = useState("");
  const [totalNoofSurveys, setTotalNoofSurveys] = useState("");
  const [successfulSurveys, setSuccessfulSurveys] = useState("");
  const [costPerSurvey, setCostPerSurvey] = useState("");
  //   const[show,setShow]

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

  const handleSubmit = () => {};
  return (
    <>
      <MuiAdminNavbar />
      <Grid container sx={{ p: 3 }}>
        <Grid item container xs={12} md={6}>
          <Grid item>
            <Typography
              variant="h6"
              component="div"
              gutterBottom
              className="screenHeading"
            >
              Sales Module
            </Typography>
          </Grid>
          <Grid item>
            <form>
              <MuiDropDown
                name="client"
                value={client}
                onChange={onChangeClient}
                options={["client 1", "client 2", "client 3"]} // Example options
                label="Client"
                className="arimo-input-label"
                required
              />
              <MuiTextField
                name="totalNoofSurveys"
                type="text"
                value={totalNoofSurveys}
                className="arimo-input-label"
                label="Total No. of Surveys"
                // sx={style}
                onChange={onChangeTotalNoofSurveys}
                required
              />
              <MuiTextField
                name="successfulSurveys"
                type="text"
                value={successfulSurveys}
                className="arimo-input-label"
                label="Successful Surveys"
                onChange={onChangeSuccessfulSurveys}
                required
              />
              <MuiTextField
                name="costPerSurvey"
                type="text"
                value={costPerSurvey}
                className="arimo-input-label"
                label="Cost/Survey"
                placeholder="Ex: Rs 40"
                onChange={onChangeCostPerSurvey}
                required
              />
            </form>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={InvoiceImage} alt="invoice" />
        </Grid>
        <Grid item xs={12} md={12}>
          <MuiContainedButton buttonText={"Generate Invoice"} />
        </Grid>
      </Grid>
    </>
  );
};

export default Invoice;
