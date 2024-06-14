import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import MuiAdminNavbar from "../../MuiComponents/MuiNavbar/MuiAdminNavbar";
import { Button, Grid, Typography, styled } from "@mui/material";
import InfoCard from "../../Components/InfoCard/Index";
import "./Style.css";
import MuiContainedButton from "../../MuiComponents/MuiContainedButton/Index";
import { MuiDropDown } from "../../MuiComponents/MuiDropDown/Index";
import "./Style.css";

const Dashboard = () => {
  const rows = [
    {
      id: 1,
      role: "Vendor",
      approval: "Yes",
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
      approval: "Yes",
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
      field: "role",
      headerName: "Role",
      width: 150,
      headerAlign: "center",
      editable: true,
      // align: "center",
      cellClassName: "dataGrid-cell",
      headerClassName: "dataGrid-header",
      renderCell: (params) => (
        <MuiDropDown
          defaultValue="Vendor"
          options={["Vendor", "Admin", "User"]}
          onChange={onChangeRole}
        />
      ),
    },
    {
      field: "approval",
      headerName: "Approval",
      width: 150,
      headerAlign: "center",
      editable: true,
      align: "center",
      cellClassName: "dataGrid-cell",
      headerClassName: "dataGrid-header",
      renderCell: (params) => (
        <Button variant="outlined" color="primary">
          Approve
        </Button>
      ),
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

  const onChangeRole = () => {
    console.log("onChange called ");
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
            Admin Dashboard
          </Typography>
        </Grid>
        <Grid
          item
          container
          spacing={3}
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item xs={12} md={3}>
            <InfoCard
              title="Total no of Vendors"
              value="10"
              bgcolor="#173CFF24"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <InfoCard
              title="Total no of Clients"
              value="10"
              bgcolor="#FCA5BF45"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <InfoCard
              title="Total no of Projects"
              value="1"
              bgcolor="#D1A5FC4D"
            />
          </Grid>
        </Grid>
        <Grid item xs={12} md={12}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            disableRowSelectionOnClick
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
