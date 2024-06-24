import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import MuiAdminNavbar from "../../MuiComponents/MuiNavbar/MuiAdminNavbar";
import { Button, Grid, Typography, styled } from "@mui/material";
import InfoCard from "../../Components/InfoCard/Index";
import "./Style.css";
import MuiContainedButton from "../../MuiComponents/MuiContainedButton/Index";
import { MuiDropDown } from "../../MuiComponents/MuiDropDown/Index";
import "./Style.css";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import Sidebar from "../../Components/Sidebar/Index";

const Dashboard = () => {
  const [approved, setApproved] = useState(false);
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

  useEffect(() => {}, [approved]);

  const handleApprove = () => {
    setApproved(!approved);
    console.log("user is approved");
  };

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
      renderCell: (params) => {
        return approved ? (
          <MuiContainedButton
            buttonText={"Approved"}
            onClickFunction={handleApprove}
            type={"button"}
          />
        ) : (
          <Button variant="outlined" color="primary" onClick={handleApprove}>
            Approve
          </Button>
        );
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

  const onChangeRole = () => {
    console.log("onChange called ");
  };

  return (
    <Grid container>
      <Grid item md={2}>
        <Sidebar />
      </Grid>
      <Grid item md={10}>
        <MuiAdminNavbar />
        <Grid container className="dashboard-container">
          <Grid
            item
            container
            spacing={3}
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item xs={12} md={3}>
              <InfoCard
                title="New Leads"
                value="21"
                subtitle="This week"
                icon={<PeopleAltOutlinedIcon color="success" />}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <InfoCard
                title="Leads Approved"
                value="20"
                subtitle="This week"
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <InfoCard
                title="Ongoing Projects"
                value="50"
                subtitle="CAWI"
                icon={<FeedOutlinedIcon color="success" />}
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
      </Grid>
    </Grid>
  );
};

export default Dashboard;
