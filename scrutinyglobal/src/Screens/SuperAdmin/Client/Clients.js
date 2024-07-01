import { Button, Grid, Paper, Switch } from "@mui/material";
import React, { useState } from "react";
import Layout from "../Layout";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import MuiContainedButton from "../../../MuiComponents/MuiContainedButton/Index";
import MuiDataGrid from "../../../MuiComponents/MuiDataGrid/Index";

const Clients = () => {
  const [columns, setColumns] = useState([
    {
      field: "id",
      headerName: "S.No.",
      width: 90,
      align: "center",
      cellClassName: "dataGrid-cell",
      headerClassName: "dataGrid-header",
    },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      headerAlign: "center",
      editable: true,
      align: "center",
      cellClassName: "dataGrid-cell",
      headerClassName: "dataGrid-header",
      renderCell: (params) => {
        return <Switch defaultChecked />;
      },
    },
    {
      field: "name",
      headerName: "Name",
      align: "center",
      type: "number",
      width: 110,
      headerAlign: "center",
      editable: true,
      cellClassName: "dataGrid-cell",
      headerClassName: "dataGrid-header",
      // valueGetter: (params) =>
      // `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
    {
      field: "number",
      headerName: "Number",
      sortable: false,
      width: 160,
      align: "center",
      headerClassName: "dataGrid-header",
      cellClassName: "dataGrid-cell",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "Email",
      sortable: false,
      width: 160,
      align: "center",
      headerClassName: "dataGrid-header",
      cellClassName: "dataGrid-cell",
      headerAlign: "center",
    },
    {
      field: "birthdate",
      headerName: "Birthdate",
      sortable: false,
      width: 160,
      align: "center",
      headerClassName: "dataGrid-header",
      cellClassName: "dataGrid-cell",
      headerAlign: "center",
    },
    {
      field: "address",
      headerName: "Address",
      sortable: false,
      width: 160,
      align: "center",
      headerClassName: "dataGrid-header",
      cellClassName: "dataGrid-cell",
      headerAlign: "center",
    },
    {
      field: "country",
      headerName: "Country",
      sortable: false,
      width: 160,
      align: "center",
      headerClassName: "dataGrid-header",
      cellClassName: "dataGrid-cell",
      headerAlign: "center",
    },
    {
      field: "state",
      align: "center",
      headerName: "State/Province",
      sortable: false,
      width: 160,
      cellClassName: "dataGrid-cell",
      headerClassName: "dataGrid-header",
      headerAlign: "center",
    },
    {
      field: "city",
      headerName: "City",
      align: "center",
      sortable: false,
      width: 160,
      cellClassName: "dataGrid-cell",
      headerClassName: "dataGrid-header",
      headerAlign: "center",
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
      align: "center",
      sortable: false,
      width: 160,
      cellClassName: "dataGrid-cell",
      headerClassName: "dataGrid-header",
      headerAlign: "center",
    },
    {
      field: "profession",
      headerName: "Profession",
      sortable: false,
      align: "center",
      width: 160,
      cellClassName: "dataGrid-cell",
      headerClassName: "dataGrid-header",
      headerAlign: "center",
    },
    {
      field: "ipAddress",
      headerName: "IP Address",
      sortable: false,
      width: 160,
      cellClassName: "dataGrid-cell",
      headerClassName: "dataGrid-header",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "accountType",
      headerName: "Account Type",
      sortable: false,
      width: 160,
      align: "center",
      cellClassName: "dataGrid-cell",
      headerClassName: "dataGrid-header",
      headerAlign: "center",
    },
    {
      field: "salary",
      headerName: "Salary/mo",
      sortable: false,
      width: 160,
      align: "center",
      headerClassName: "dataGrid-header",
      cellClassName: "dataGrid-cell",
      headerAlign: "center",
    },
  ]);

  const rows = [
    {
      id: 1,
      role: "Vendor",
      status: "Yes",
      name: "Daniel",
      number: "123456789",
      email: "daniel@gmail.com",
      birthdate: "05-06-24",
      address: "street 20",
      country: "india",
      state: "delhi",
      city: "saket",
      zipCode: "1234",
      profession: "android developer",
      ipAddress: "12.23.34.55",
      accountType: "vendor",
      salary: "500000",
    },
    {
      id: 2,
      role: "Vendor",
      status: "Yes",
      name: "Daniel",
      number: "123456789",
      email: "daniel@gmail.com",
      birthdate: "05-06-24",
      address: "street 20",
      country: "india",
      state: "delhi",
      city: "saket",
      zipCode: "1234",
      profession: "android developer",
      ipAddress: "12.23.34.55",
      accountType: "vendor",
      salary: "500000",
    },
  ];

  const content = (
    <Grid container>
      <Grid
        item
        container
        className="heading-grid2"
        justifyContent="center"
        alignItems="end"
      >
        <Grid item md={4}>
          <Paper elevation={0} className="screenHeading">
            CLIENT LIST
          </Paper>
        </Grid>
        <Grid
          item
          container
          md={6}
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Grid item>
            <Button
              variant="outlined"
              color="error"
              className="client-button add-class"
              startIcon={<AddIcon color="success" fontSize="large" />}
            >
              Add Project
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              color="error"
              className="client-button export-class"
              startIcon={
                <DescriptionOutlinedIcon color="primary" size="large" />
              }
            >
              Export
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              color="error"
              className="client-button delete-class"
              startIcon={<DeleteOutlinedIcon color="error" fontSize="large" />}
            >
              Delete
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid item md={12}>
        <MuiDataGrid rows={rows} columns={columns} />
      </Grid>
    </Grid>
  );
  return <Layout content={content} navbarHeading="CLIENTS" />;
};

export default Clients;
