import React, { useState } from "react";
import Layout from "../Layout";
import { Button, Grid } from "@mui/material";
import tickFrame from "../../../Images/ModalImages/tickFrame.png";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import MuiMultiSelectDropdown from "../../../MuiComponents/MuiMultiSelectDropdown/Index";
import MuiDataGrid from "../../../MuiComponents/MuiDataGrid/Index";
import SuccessErrorModal from "../../../Components/SuccesErrorModal/Index";
import { useNavigate } from "react-router-dom";

const AssignVendor = () => {
  const [selectedVendors, setSelectedVendors] = useState([]);
  const [selectedRowIds, setSelectedRowIds] = useState([]);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const navigate = useNavigate();

  const vendors = [
    {
      id: 1,
      vendorName: "Vendor 1",
      successURL: "exampleURL.com",
      terminateURL: "exampleURL.com",
      quotafullURL: "exampleURL.com",
      costPerSurvey: "45",
    },
    {
      id: 2,
      vendorName: "Vendor 2",
      successURL: "exampleURL.com",
      terminateURL: "exampleURL.com",
      quotafullURL: "exampleURL.com",
      costPerSurvey: "45",
    },
    {
      id: 3,
      vendorName: "Vendor 3",
      successURL: "exampleURL.com",
      terminateURL: "exampleURL.com",
      quotafullURL: "exampleURL.com",
      costPerSurvey: "45",
    },
  ];

  const [columns] = useState([
    {
      field: "id",
      headerName: "S.No.",
      width: 90,
      align: "center",
      cellClassName: "dataGrid-cell",
      headerClassName: "dataGrid-header",
    },
    {
      field: "vendorName",
      headerName: "Vendor Name",
      width: 180,
      align: "center",
      headerClassName: "dataGrid-header",
      cellClassName: "dataGrid-cell",
      headerAlign: "center",
    },
    {
      field: "successURL",
      headerName: "Success URL",
      width: 180,
      editable: true,
      align: "center",
      headerClassName: "dataGrid-header",
      cellClassName: "dataGrid-cell",
      headerAlign: "center",
    },
    {
      field: "quotafullURL",
      headerName: "Quotafull URL",
      width: 180,
      align: "center",
      editable: true,
      headerClassName: "dataGrid-header",
      cellClassName: "dataGrid-cell",
      headerAlign: "center",
    },
    {
      field: "terminateURL",
      headerName: "Terminate URL",
      width: 170,
      align: "center",
      editable: true,
      headerClassName: "dataGrid-header",
      cellClassName: "dataGrid-cell",
      headerAlign: "center",
    },
    {
      field: "costPerSurvey",
      headerName: "Cost/Survey",
      width: 170,
      align: "center",
      headerClassName: "dataGrid-header",
      cellClassName: "dataGrid-cell",
      headerAlign: "center",
    },
  ]);

  const handleVendorChange = (event) => {
    const {
      target: { value },
    } = event;

    const selectedVendorNames =
      typeof value === "string" ? value.split(",") : value;
    const updatedSelectedVendors = selectedVendorNames.map((vendorName) =>
      vendors.find((vendor) => vendor.vendorName === vendorName)
    );

    setSelectedVendors(updatedSelectedVendors);
  };

  const handleDelete = () => {
    const updatedVendors = selectedVendors.filter(
      (vendor) => !selectedRowIds.includes(vendor.id)
    );
    setSelectedVendors(updatedVendors);
    setSelectedRowIds([]);
  };

  const handleSave = () => {
    setShowSuccessModal(true);
  };

  const handleModalButtonClick = () => {
    navigate("/projects");
  };

  const handleClose = () => {
    setShowSuccessModal(false);
  };

  const content = (
    <Grid container>
      <Grid item>
        <MuiMultiSelectDropdown
          label={"Vendor"}
          value={selectedVendors.map((vendor) => vendor.vendorName)}
          onChange={handleVendorChange}
          options={vendors.map((item) => item.vendorName)}
        />
      </Grid>
      <Grid
        item
        container
        className="heading-grid2"
        justifyContent="space-between"
        alignItems="end"
      >
        <Grid item container justifyContent="flex-end" spacing={2} md={7}>
          <Grid item>
            <Button
              variant="outlined"
              color="error"
              onClick={handleSave}
              className="client-button add-class"
              startIcon={
                <DescriptionOutlinedIcon color="success" fontSize="large" />
              }
              disabled={selectedVendors.length === 0}
            >
              Save
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              color="error"
              onClick={handleDelete}
              className="client-button delete-class"
              disabled={selectedRowIds.length === 0}
              startIcon={<DeleteOutlinedIcon color="error" fontSize="large" />}
            >
              Delete
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid item className="assignVendor-list-datagrid">
        <MuiDataGrid
          rows={selectedVendors}
          columns={columns}
          checkboxSelection={true}
          onSelectionModelChange={(newSelection) => {
            setSelectedRowIds(newSelection);
          }}
        />
      </Grid>
      <Grid item>
        <SuccessErrorModal
          show={showSuccessModal}
          handleClose={handleClose}
          imageSrc={tickFrame}
          clientName={""}
          isSuccess={true}
          text={"Vendor has been successfully assigned."}
          buttonPrimaryText="Ok"
          handleModalButtonClick={handleModalButtonClick}
        />
      </Grid>
    </Grid>
  );

  return <Layout content={content} navbarHeading="ASSIGN VENDOR" />;
};

export default AssignVendor;
