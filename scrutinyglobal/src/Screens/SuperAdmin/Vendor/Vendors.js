import { Button, Grid, Paper, Switch } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSelectedRows } from "../../../Store/Slice/rowSelectionSlice";
import Layout from "../Layout";
import "../Client/Style.css";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import MuiDataGrid from "../../../MuiComponents/MuiDataGrid/Index";
import { useNavigate } from "react-router-dom";

const Clients = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [rowSelectionModel, setRowSelectionModel] = useState([]);
  const [checkedRows, setCheckedRows] = useState([]);

  const [columns, setColumns] = useState([
    {
      field: "id",
      headerName: "",
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
        return <Switch checked={params.value === "Yes"} color="success" />;
      },
    },
    {
      field: "vendorName",
      headerName: "Vendor Name",
      align: "center",
      type: "text",
      width: 110,
      headerAlign: "center",
      cellClassName: "dataGrid-cell",
      headerClassName: "dataGrid-header",
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
      field: "contactNumber",
      headerName: "Contact Number",
      sortable: false,
      width: 160,
      align: "center",
      headerClassName: "dataGrid-header",
      cellClassName: "dataGrid-cell",
      headerAlign: "center",
    },
    {
      field: "altContactNumber",
      headerName: "Alternate Contact Number",
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
      field: "pincode",
      headerName: "Pincode",
      sortable: false,
      width: 160,
      align: "center",
      headerClassName: "dataGrid-header",
      cellClassName: "dataGrid-cell",
      headerAlign: "center",
    },
  ]);

  const [columnVisibilityModel, setColumnVisibilityModel] = useState({
    id: false,
  });

  const rows = [
    {
      id: 1,
      status: "Yes",
      vendorName: "clientName",
      email: "daniel@gmail.com",
      contactNumber: "45365634",
      altContactNumber: "123456789",
      address: "street 20",
      city: "delhi",
      pincode: "520001",
    },
    {
      id: 2,
      status: "No",
      vendorName: "clientName",
      email: "daniel@gmail.com",
      contactNumber: "45365634",
      altContactNumber: "123456789",
      address: "street 20",
      city: "delhi",
      pincode: "520001",
    },
  ];

  const handleRowClick = () => {
    navigate(`/vendor/${checkedRows[0].id}`);
  };
  const handleRowSelection = (newRowSelectionModel) => {
    setRowSelectionModel(newRowSelectionModel);
    const selectedRowData = newRowSelectionModel.map((id) =>
      rows.find((row) => row.id === id)
    );
    setCheckedRows(selectedRowData);
    dispatch(setSelectedRows(selectedRowData));
  };

  console.log("Selected Rows:", checkedRows);

  const content = (
    <Grid container>
      <Grid
        item
        container
        className="heading-grid2"
        justifyContent="space-between"
        alignItems="end"
      >
        <Grid item>
          <Paper elevation={0} className="screenHeading">
            VENDORS LIST
          </Paper>
        </Grid>
        <Grid item container justifyContent="flex-end" spacing={2} md={7}>
          <Grid item>
            <Button
              variant="outlined"
              color="error"
              onClick={handleRowClick}
              className="client-button export-class"
              disabled={checkedRows.length === 0}
              startIcon={
                <DescriptionOutlinedIcon color="primary" size="large" />
              }
            >
              View Details
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              color="error"
              className="client-button delete-class"
              disabled={checkedRows.length === 0}
              startIcon={<DeleteOutlinedIcon color="error" fontSize="large" />}
            >
              Delete
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid item className="client-list-datagrid">
        <MuiDataGrid
          rows={rows}
          columns={columns}
          checkboxSelection={true}
          onRowSelectionModelChange={handleRowSelection}
          rowSelectionModel={rowSelectionModel}
          columnVisibilityModel={columnVisibilityModel}
          onColumnVisibilityModelChange={(newModel) =>
            setColumnVisibilityModel(newModel)
          }
        />
      </Grid>
    </Grid>
  );
  return <Layout content={content} navbarHeading="VENDORS" />;
};

export default Clients;
