import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../Layout";
import { Grid, Switch, Typography } from "@mui/material";
import LabelValueCard from "../../../Components/LabelValueCard/Index";

const ClientDetail = () => {
  const [isActive, setIsActive] = useState(false);
  const { id } = useParams();

  const handleSwitchChange = (event) => {
    setIsActive(event.target.checked);
  };

  const content = (
    <Grid container className="client-detail-grid">
      <Grid item className="section-heading">
        Contact Information
      </Grid>
      <Grid item container md={8}>
        <Grid item className="one-in-a-row">
          <LabelValueCard label={"Client Name"} value={"Scrutiny Global"} />
        </Grid>
        <Grid item container md={9} justifyContent="space-between">
          <Grid item>
            <LabelValueCard label="Contact Name" value="Scrutiny Global" />
          </Grid>
          <Grid item>
            <LabelValueCard label="Alt. Contact Name" value="Scrutiny Global" />
          </Grid>
        </Grid>
        <Grid item container md={9} justifyContent="space-between">
          <Grid item>
            <LabelValueCard label="Contact Number" value="Scrutiny Global" />
          </Grid>
          <Grid item>
            <LabelValueCard
              label="Alt. Contact Number"
              value="Scrutiny Global"
            />
          </Grid>
        </Grid>
        <Grid item md={8}>
          <LabelValueCard
            label={"Email"}
            value={"scrutinyglobal0987@gmail.com"}
          />
        </Grid>
        <Grid item md={8}>
          <LabelValueCard
            label={"Website Link"}
            value={"www.scrutinyGlobal.com"}
          />
        </Grid>
      </Grid>

      <Grid item className="section-heading">
        Address Information
      </Grid>
      <Grid item container>
        <Grid item className="one-in-a-row">
          <LabelValueCard label={"Address"} value={"31 Street,New Delhi"} />
        </Grid>
        <Grid item container md={9} justifyContent="space-between">
          <Grid item>
            <LabelValueCard label="Country" value="India" />
          </Grid>
          <Grid item>
            <LabelValueCard label="Currency" value="Rs" />
          </Grid>
        </Grid>
        <Grid item className="one-in-a-row">
          <LabelValueCard label={"Industry"} value={"Healthcare"} />
        </Grid>
      </Grid>

      <Grid item className="section-heading">
        Status
      </Grid>
      <Grid
        item
        container
        className="active-inactive-grid"
        alignItems="flex-start"
      >
        <Grid item>
          <Switch
            color="success"
            size="large"
            checked={isActive}
            // className="active-inactive-toggle"
            onChange={handleSwitchChange}
          />
        </Grid>
        <Grid item>
          <Typography className="active-inactive">
            {isActive ? "Active" : "Inactive"}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );

  return <Layout content={content} navbarHeading="CLIENT DETAILS" />;
};

export default ClientDetail;
