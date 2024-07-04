import React, { useState } from "react";
import { useParams } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import Layout from "../Layout";
import { Grid } from "@mui/material";
import LabelValueCard from "../../../Components/LabelValueCard/Index";
import "../Client/Style.css";

const ProjectDetail = () => {
  const [isEditable, setIsEditable] = useState(false);
  const { id } = useParams();

  const handleEditClick = () => {
    setIsEditable(!isEditable);
  };

  const content = (
    <Grid container className="client-detail-grid">
      <Grid item md={11.5} textAlign="right">
        <EditIcon color="primary" fontSize="large" onClick={handleEditClick} />
      </Grid>
      <Grid item className="section-heading">
        Project & Client Information
      </Grid>
      <Grid item container md={8}>
        <Grid item className="one-in-a-row">
          <LabelValueCard
            label={"Project Name"}
            value={"Scrutiny Global"}
            disabled={!isEditable}
          />
        </Grid>
        <Grid item className="one-in-a-row">
          <LabelValueCard
            label={"Client Name"}
            value={"XYZ"}
            disabled={!isEditable}
          />
        </Grid>
        <Grid item container md={9} justifyContent="space-between">
          <Grid item>
            <LabelValueCard
              label="Contact Number"
              value="Scrutiny Global"
              disabled={!isEditable}
            />
          </Grid>
          <Grid item>
            <LabelValueCard
              label="Alt. Contact Number"
              value="Scrutiny Global"
              disabled={!isEditable}
            />
          </Grid>
        </Grid>
        <Grid item container md={8} justifyContent="space-between">
          <Grid item>
            <LabelValueCard
              label="Start Date"
              value="01-07-24"
              disabled={!isEditable}
            />
          </Grid>
          <Grid item>
            <LabelValueCard
              label="End Date"
              value="01-07-24"
              disabled={!isEditable}
            />
          </Grid>
        </Grid>
        <Grid item container md={9} justifyContent="space-between">
          <Grid item>
            <LabelValueCard
              label="Project Head"
              value="Alex Gorgia"
              disabled={!isEditable}
            />
          </Grid>
          <Grid item>
            <LabelValueCard
              label="Pre Sales SPOC"
              value="Alex Gorgia"
              disabled={!isEditable}
            />
          </Grid>
        </Grid>
        <Grid item container md={9} justifyContent="space-between">
          <Grid item>
            <LabelValueCard
              label="Audience Type"
              value="College Students"
              disabled={!isEditable}
            />
          </Grid>
          <Grid item>
            <LabelValueCard
              label="Project Budget"
              value="Rs 40,000"
              disabled={!isEditable}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item className="section-heading">
        Vendor RFQ
      </Grid>
      {/* <Grid item container>
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
      </Grid> */}
    </Grid>
  );

  return <Layout content={content} navbarHeading="PROJECT DETAILS" />;
};

export default ProjectDetail;
