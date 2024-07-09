import React, { useState } from "react";
import { useParams } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import Layout from "../Layout";
import { Button, Grid } from "@mui/material";
import LabelValueCard from "../../../Components/LabelValueCard/Index";
import "../Client/Style.css";
import MuiDataGrid from "../../../MuiComponents/MuiDataGrid/Index";
import { useSelector } from "react-redux";
import { selectedRow } from "../../../Store/Slice/rowSelectionSlice";
import MuiAccordion from "../../../MuiComponents/MuiAccordion/Index";
import { MuiDropDown } from "../../../MuiComponents/MuiDropDown/Index";

const ProjectDetail = () => {
  const dataArray = useSelector(selectedRow);
  console.log("selectedRows11 :>> ", dataArray[0]);
  const [isEditable, setIsEditable] = useState(false);
  const [vendorSeleted, setVendorSelected] = useState("");
  const { id } = useParams();

  const onChangeVendor = (event) => {
    event.preventDefault();
    setVendorSelected(event.target.value);
  };
  const handleEditClick = () => {
    setIsEditable(!isEditable);
  };

  const [columns, setColumns] = useState([
    // {
    //   field: "id",
    //   headerName: "S.No.",
    //   width: 90,
    //   align: "center",
    //   cellClassName: "dataGrid-cell",
    //   //headerClassName: "dataGrid-header",
    // },
    {
      field: "vendor",
      headerName: "Vendor",
      width: 120,
      align: "center",
      headerAlign: "center",
      cellClassName: "dataGrid-cell",
      headerClassName: "dataGrid-header-accpetedRFQ",
    },
    {
      field: "country",
      headerName: "Country",
      align: "center",
      width: 100,
      headerAlign: "center",
      cellClassName: "dataGrid-cell",
      headerClassName: "dataGrid-header-accpetedRFQ",
    },
    {
      field: "IR",
      headerName: "IR%",
      width: 80,
      align: "center",
      headerClassName: "dataGrid-header-accpetedRFQ",
      cellClassName: "dataGrid-cell",
      headerAlign: "center",
    },
    {
      field: "LOI",
      headerName: "LOI(min)",
      width: 90,
      align: "center",
      headerClassName: "dataGrid-header-accpetedRFQ",
      cellClassName: "dataGrid-cell",
      headerAlign: "center",
    },
    {
      field: "completesNeeded",
      headerName: "Completes Needed",
      width: 150,
      align: "center",
      headerClassName: "dataGrid-header-accpetedRFQ",
      cellClassName: "dataGrid-cell",
      headerAlign: "center",
    },
    {
      field: "completesFeasible",
      headerName: "Completes Feasible",
      width: 150,
      align: "center",
      headerClassName: "dataGrid-header-accpetedRFQ",
      cellClassName: "dataGrid-cell",
      headerAlign: "center",
    },
    {
      field: "cost",
      headerName: "Cost",
      width: 90,
      align: "center",
      headerClassName: "dataGrid-header-accpetedRFQ",
      cellClassName: "dataGrid-cell",
      headerAlign: "center",
    },
    {
      field: "cost1",
      headerName: "Cost",
      width: 90,
      align: "center",
      headerClassName: "dataGrid-header-accpetedRFQ",
      cellClassName: "dataGrid-cell",
      headerAlign: "center",
    },
    {
      field: "status",
      headerName: "STATUS",
      width: 150,
      align: "center",
      headerClassName: "dataGrid-header-accpetedRFQ",
      cellClassName: "dataGrid-cell",
      headerAlign: "center",
      renderCell: (params) => (
        <Button
          variant={params.value === "Yes" ? "contained" : "outlined"}
          color="success"
        >
          {params.value === "Yes" ? "Accepted" : "Accept"}
        </Button>
      ),
    },
  ]);

  const rows = [
    {
      id: 1,
      status: "Yes",
      vendor: "vendor Name",
      country: "India",
      IR: "2",
      LOI: "3",
      completesNeeded: "10",
      completesFeasible: "8",
      cost: "743",
      cost1: "543",
    },
    {
      id: 2,
      status: "No",
      vendor: "vendor Name",
      country: "India",
      IR: "2",
      LOI: "3",
      completesNeeded: "10",
      completesFeasible: "8",
      cost: "743",
      cost1: "543",
    },
  ];
  const [colAcc, setColAcc] = useState([
    // {
    //   field: "id",
    //   headerName: "S.No.",
    //   width: 90,
    //   align: "center",
    //   cellClassName: "dataGrid-cell",
    //   //headerClassName: "dataGrid-header",
    // },
    {
      field: "country",
      headerName: "Country",
      align: "center",
      width: 120,
      headerAlign: "center",
      cellClassName: "dataGrid-cell",
      //headerClassName: "dataGrid-header",
    },
    {
      field: "IR",
      headerName: "IR%",
      width: 100,
      align: "center",
      //headerClassName: "dataGrid-header",
      cellClassName: "dataGrid-cell",
      headerAlign: "center",
    },
    {
      field: "LOI",
      headerName: "LOI(min)",
      width: 100,
      align: "center",
      //headerClassName: "dataGrid-header",
      cellClassName: "dataGrid-cell",
      headerAlign: "center",
    },
    {
      field: "completesNeeded",
      headerName: "Completes Needed",
      width: 150,
      align: "center",
      //headerClassName: "dataGrid-header",
      cellClassName: "dataGrid-cell",
      headerAlign: "center",
    },
    {
      field: "completesFeasible",
      headerName: "Completes Feasible",
      width: 150,
      align: "center",
      //headerClassName: "dataGrid-header",
      cellClassName: "dataGrid-cell",
      headerAlign: "center",
    },
    {
      field: "cost",
      headerName: "Cost",
      width: 120,
      align: "center",
      //headerClassName: "dataGrid-header",
      cellClassName: "dataGrid-cell",
      headerAlign: "center",
    },
    {
      field: "cost1",
      headerName: "Cost",
      width: 120,
      align: "center",
      //headerClassName: "dataGrid-header",
      cellClassName: "dataGrid-cell",
      headerAlign: "center",
    },
    {
      field: "status",
      headerName: "STATUS",
      width: 140,
      align: "center",
      //headerClassName: "dataGrid-header",
      cellClassName: "dataGrid-cell",
      headerAlign: "center",
      renderCell: (params) => (
        <Button
          variant={params.value === "Yes" ? "contained" : "outlined"}
          color="success"
        >
          {params.value === "Yes" ? "Accepted" : "Accept"}
        </Button>
      ),
    },
  ]);

  const rowsAcc = [
    {
      id: 1,
      status: "Yes",
      country: "India",
      IR: "2",
      LOI: "3",
      completesNeeded: "10",
      completesFeasible: "8",
      cost: "743",
      cost1: "543",
    },
    {
      id: 2,
      status: "No",
      country: "India",
      IR: "2",
      LOI: "3",
      completesNeeded: "10",
      completesFeasible: "8",
      cost: "743",
      cost1: "543",
    },
  ];

  const accordionArray = [
    {
      title: "Example supplier name ( 01 - 07 - 24 ) ( 0 Accepted )",
      content: (
        <MuiDataGrid rows={rowsAcc} columns={colAcc} disablePagination={true} />
      ),
    },
    {
      defaultOpen: true,
      title: "Example supplier name ( 01 - 07 - 24 ) ( 1 Accepted )",
      content: (
        <MuiDataGrid rows={rowsAcc} columns={colAcc} disablePagination={true} />
      ),
    },
    {
      title: "Example supplier name ( 01 - 07 - 24 ) ( 0 Accepted )",
      content: (
        <MuiDataGrid rows={rowsAcc} columns={colAcc} disablePagination={true} />
      ),
    },
  ];

  const content = (
    <Grid container className="client-detail-grid">
      <Grid item md={11.5} textAlign="right">
        <EditIcon color="primary" fontSize="large" onClick={handleEditClick} />
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
                dataArray[0]?.projectName
                  ? dataArray[0]?.projectName
                  : "ScrutinyGlobal"
              }
            />
          </Grid>
          <Grid item className="one-in-a-row">
            <LabelValueCard
              label={"Client Name"}
              value={
                dataArray[0]?.clientName
                  ? dataArray[0]?.clientName
                  : "ScrutinyGlobal"
              }
              disabled={!isEditable}
            />
          </Grid>
        </Grid>
        <Grid item container spacing={5}>
          <Grid item md={6}>
            <LabelValueCard
              label="Contact Number"
              value={
                dataArray[0]?.contactNumber
                  ? dataArray[0]?.contactNumber
                  : "ScrutinyGlobal"
              }
              disabled={!isEditable}
            />
          </Grid>
          <Grid item md={6}>
            <LabelValueCard
              label="Alt. Contact Number"
              value={
                dataArray[0]?.altContactNumber
                  ? dataArray[0]?.altContactNumber
                  : "ScrutinyGlobal"
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
                dataArray[0]?.startDate
                  ? dataArray[0]?.startDate
                  : "ScrutinyGlobal"
              }
              disabled={!isEditable}
            />
          </Grid>
          <Grid item md={6}>
            <LabelValueCard
              label="End Date"
              value={
                dataArray[0]?.endDate ? dataArray[0]?.endDate : "ScrutinyGlobal"
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
                dataArray[0]?.projectHead
                  ? dataArray[0]?.projectHead
                  : "ScrutinyGlobal"
              }
              disabled={!isEditable}
            />
          </Grid>
          <Grid item md={6}>
            <LabelValueCard
              label="Pre Sales SPOC"
              value={dataArray[0]?.SPOC ? dataArray[0]?.SPOC : "ScrutinyGlobal"}
              disabled={!isEditable}
            />
          </Grid>
        </Grid>
        <Grid item container spacing={5}>
          <Grid item md={6}>
            <LabelValueCard
              label="Audience Type"
              value={
                dataArray[0]?.audienceType
                  ? dataArray[0]?.audienceType
                  : "ScrutinyGlobal"
              }
              disabled={!isEditable}
            />
          </Grid>
          <Grid item md={6}>
            <LabelValueCard
              label="Project Budget"
              value={
                dataArray[0]?.projectBudget
                  ? dataArray[0]?.projectBudget
                  : "ScrutinyGlobal"
              }
              disabled={!isEditable}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item className="section-heading">
        Vendor RFQ
      </Grid>
      <Grid item className="accordion-section">
        <MuiAccordion content={accordionArray} />
      </Grid>

      <Grid item className="section-heading">
        Accepted RFQ
      </Grid>
      <Grid item className="accepted-RFQ-table">
        <MuiDataGrid rows={rows} columns={columns} />
      </Grid>

      <Grid item className="section-heading">
        Quotaion
      </Grid>
      <Grid item container direction="column" className="quotation-grid">
        <Grid item md={5}>
          <MuiDropDown
            value={vendorSeleted}
            onChange={onChangeVendor}
            options={["Vendor 1", "Vendor 2", "Vendor 3"]}
            label="Select Vendor"
          />
        </Grid>
        <Grid item>
          <Button variant="contained" color="success">
            Create Quotation
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );

  return <Layout content={content} navbarHeading="PROJECT DETAILS" />;
};

export default ProjectDetail;
