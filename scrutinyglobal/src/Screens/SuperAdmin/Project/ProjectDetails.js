import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import Layout from "../Layout";
import { Grid, Typography } from "@mui/material";
import LabelValueCard from "../../../Components/LabelValueCard/Index";
import "../Client/Style.css";
import { useSelector } from "react-redux";
import { selectedRow } from "../../../Store/Slice/rowSelectionSlice";

const ProjectDetail = () => {
  const dataArray = useSelector(selectedRow);
  const [isEditable, setIsEditable] = useState(false);
  // const { id } = useParams();

  const handleEditClick = () => {
    setIsEditable(!isEditable);
  };

  const vendorLength = 0;

  const cardArray = [
    {
      vendorName: "Vendor Name",
      successURL: "exampleURL.com",
      terminateURL: "exampleURL.com",
      quotafullURL: "exampleURL.com",
      costPerSurvey: "45",
    },
    // Add more vendors as needed
  ];

  const content = (
    <Grid container className="client-detail-grid">
      <Grid item md={11.5} textAlign="right">
        <EditIcon
          color="primary"
          fontSize="large"
          cursor="pointer"
          onClick={handleEditClick}
        />
      </Grid>
      <Grid item className="section-heading">
        Project & Client Information
      </Grid>
      <Grid item container md={10}>
        <Grid item container md={8}>
          <Grid item className="one-in-a-row">
            <LabelValueCard
              label={"Project Name"}
              disabled={!isEditable}
              value={
                dataArray[0]?.project_name ? dataArray[0]?.project_name : ""
              }
            />
          </Grid>
          <Grid item className="one-in-a-row">
            <LabelValueCard
              label={"Client Name"}
              value={dataArray[0]?.clientName ? dataArray[0]?.clientName : ""}
              disabled={!isEditable}
            />
          </Grid>
        </Grid>
        <Grid item container spacing={5}>
          <Grid item md={6}>
            <LabelValueCard
              label="Contact Number"
              value={dataArray[0]?.number ? dataArray[0]?.number : ""}
              disabled={!isEditable}
            />
          </Grid>
          <Grid item md={6}>
            <LabelValueCard
              label="Alt. Contact Number"
              value={
                dataArray[0]?.alternate_number
                  ? dataArray[0]?.alternate_number
                  : ""
              }
              disabled={!isEditable}
            />
          </Grid>
        </Grid>
        <Grid item container spacing={5}>
          <Grid item md={6}>
            <LabelValueCard
              label="Start Date"
              value={
                dataArray[0]?.project_start_time
                  ? dataArray[0]?.project_start_time
                  : ""
              }
              disabled={!isEditable}
            />
          </Grid>
          <Grid item md={6}>
            <LabelValueCard
              label="End Date"
              value={
                dataArray[0]?.project_end_time
                  ? dataArray[0]?.project_end_time
                  : ""
              }
              disabled={!isEditable}
            />
          </Grid>
        </Grid>
        <Grid item container spacing={5}>
          <Grid item md={6}>
            <LabelValueCard
              label="Project Head"
              value={
                dataArray[0]?.project_head_id
                  ? dataArray[0]?.project_head_id
                  : ""
              }
              disabled={!isEditable}
            />
          </Grid>
          <Grid item md={6}>
            <LabelValueCard
              label="Pre Sales SPOC"
              value={
                dataArray[0]?.pre_salespoc ? dataArray[0]?.pre_salespoc : ""
              }
              disabled={!isEditable}
            />
          </Grid>
        </Grid>
        <Grid item container spacing={5}>
          <Grid item md={6}>
            <LabelValueCard
              label="Audience Type"
              value={
                dataArray[0]?.audience_type ? dataArray[0]?.audience_type : ""
              }
              disabled={!isEditable}
            />
          </Grid>
          <Grid item md={6}>
            <LabelValueCard
              label="Project Budget"
              value={
                dataArray[0]?.project_minimum_fee
                  ? dataArray[0]?.project_minimum_fee
                  : ""
              }
              disabled={!isEditable}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item className="section-heading">
        Assigned Vendors
      </Grid>
      <Grid item className="assignVendor-parent-container">
        {vendorLength === 0 ? (
          <Typography textAlign={"center"}>No vendors assigned yet</Typography>
        ) : (
          cardArray.slice(0, vendorLength).map((item, index) => (
            <Grid
              item
              container
              md={7}
              key={index}
              className="assign-vendor-container"
            >
              <Grid item>
                <Typography className="vendor-name">
                  {item.vendorName}
                </Typography>
              </Grid>
              <Grid item container alignItems="center">
                <Grid item>
                  <Typography className="vendor-name"> Success URL:</Typography>
                </Grid>
                <Grid item>
                  <Typography> {item.successURL}</Typography>
                </Grid>
              </Grid>
              <Grid item container alignItems="center">
                <Grid item>
                  <Typography className="vendor-name">
                    {" "}
                    Quotafull URL:
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography> {item.quotafullURL}</Typography>
                </Grid>
              </Grid>
              <Grid item container alignItems="center">
                <Grid item>
                  <Typography className="vendor-name">
                    {" "}
                    Terminate URL:
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography> {item.terminateURL}</Typography>
                </Grid>
              </Grid>
              <Grid item container alignItems="center">
                <Grid item>
                  <Typography className="vendor-name"> Cost/survey:</Typography>
                </Grid>
                <Grid item>
                  <Typography>Rs {item.costPerSurvey}</Typography>
                </Grid>
              </Grid>
            </Grid>
          ))
        )}
      </Grid>
    </Grid>
  );

  return <Layout content={content} navbarHeading="PROJECT DETAILS" />;
};

export default ProjectDetail;
