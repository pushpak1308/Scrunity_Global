import React, { useState, useEffect } from "react";
import Layout from "../Layout";
import {
  Button,
  Grid,
  Typography,
  TextField,
  useTheme,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import tickFrame from "../../../Images/ModalImages/tickFrame.png";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditIcon from "@mui/icons-material/Edit";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import MuiMultiSelectDropdown from "../../../MuiComponents/MuiMultiSelectDropdown/Index";
import MuiDataGrid from "../../../MuiComponents/MuiDataGrid/Index";
import SuccessErrorModal from "../../../Components/CustomModals/SuccesErrorModal/Index";
import { useNavigate, useParams } from "react-router-dom";
import { API_PREFIX } from "../../../config";

const AssignVendor = () => {
  const projectId = useParams();
  const [selectedVendors, setSelectedVendors] = useState([]);
  const [selectedRowIds, setSelectedRowIds] = useState([]);
  const [editableRowId, setEditableRowId] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [edit, setEdit] = useState(false);
  const [vendorId, setVendorId] = useState(0);
  const [vendorName, setVendorName] = useState("");
  const [successURL, setSuccessURL] = useState("");
  const [terminateURL, setTerminateURL] = useState("");
  const [quotaFullURL, setQuotafulURL] = useState("");
  const [costPerSurvey, setCostPerSurvey] = useState("");
  // const [projectId, setProjectId] = useState("");
  const [responseData, setResponseData] = useState([]);
  const [userDataNew, setUserDataNew] = useState([]);
  const navigate = useNavigate();

  console.log("projectId :>> ", projectId);
  const vendorGridData = {
    id: [],
    vendorName: [],
    successURL: [],
    terminateURL: [],
    quotafullURL: [],
    costPerSurvey: [],
  };

  useEffect(() => {
    getVendorData();
  }, []);

  function getVendorData() {
    fetch(`${API_PREFIX}getListAsAccountType?accountType=vendor`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setResponseData(data);
        // console.log("response Data", data);
      })
      .catch(function (error) {
        console.error("Error fetching data:", error);
      });
  }

  useEffect(() => {
    setUserDataNew(convertData(responseData));
  }, [responseData]);
  function convertData(data) {
    // console.log(data);
    data.map((element) => vendorGridData.id.push(element.user_id));
    data.map((element) => vendorGridData.vendorName.push(element.name));
    data.map((element) => vendorGridData.successURL.push(element.successurl));
    data.map((element) =>
      vendorGridData.terminateURL.push(element.terminateurl)
    );
    data.map((element) =>
      vendorGridData.quotafullURL.push(element.quota_fullurl)
    );

    let userDataConverted = [];
    const keys = Object.keys(vendorGridData);
    const numObjects = vendorGridData[keys[0]].length;
    for (let i = 0; i < numObjects; i++) {
      const newObj = {};
      keys.forEach((key) => {
        newObj[key] = vendorGridData[key][i];
      });
      userDataConverted = [...userDataConverted, newObj];
    }
    console.log("testing", userDataNew);

    return userDataConverted;
  }

  console.log("testing outside", userDataNew);

  const handleVendorChange = (event) => {
    const {
      target: { value },
    } = event;

    const selectedVendorNames =
      typeof value === "string" ? value.split(",") : value;
    const updatedSelectedVendors = selectedVendorNames.map((vendorName) =>
      userDataNew.find((vendor) => vendor.vendorName === vendorName)
    );
    // const selectedVendorList = userDataNew.map((vendor) => vendor.vendorName === value);

    setSelectedVendors(updatedSelectedVendors);
    setSelectedRowIds([]);
    console.log("testing selectedVendors", selectedVendors);
  };

  const handleEditChange = (id, field, value) => {
    setSelectedVendors((prevVendors) =>
      prevVendors.map((vendor) =>
        vendor.id === id ? { ...vendor, [field]: value } : vendor
      )
    );
  };
  const handleEdit = (rowId) => {
    if (editableRowId === rowId) {
      setEditableRowId(null); // If the row is already editable, toggle it off
    } else {
      setEditableRowId(rowId); // Set the current row as editable
    }
  };

  const handleDelete = () => {
    const remainingVendors = selectedVendors.filter(
      (vendor) => !selectedRowIds.includes(vendor.id)
    );
    setSelectedVendors(remainingVendors);
    setSelectedRowIds([]);
  };

  const handleSave = () => {
    const vendorMappingDetails = selectedVendors.map((vendor) => ({
      venderId: vendor.id,
      successURL: vendor.successURL,
      terminateURL: vendor.terminateURL,
      quotaFullURL: vendor.quotafullURL,
      securityTerminateURL: "null",
      rate: vendor.costPerSurvey,
    }));
    // clo;
    const saveVendorDetails = [
      {
        projectId: projectId.id,
        venderMappingDetails: vendorMappingDetails,
      },
    ];

    fetch(`${API_PREFIX}saveVenderDetails`, {
      // mode: 'no-cors',
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(saveVendorDetails[0]),
    });
    setShowSuccessModal(true);
  };

  const handleModalButtonClick = () => {
    navigate("/projects");
  };

  const handleClose = () => {
    setShowSuccessModal(false);
  };

  const columns = [
    {
      field: "id",
      headerName: "S.No.",
      width: 120,
      editable: false,
      align: "center",
      headerAlign: "center",
      cellClassName: "dataGrid-cell",
      headerClassName: "dataGrid-header",
    },
    {
      field: "link",
      headerName: "Copy Link",
      width: 160,
      editable: false,
      headerAlign: "center",
      align: "center",
      cellClassName: "dataGrid-cell",
      headerClassName: "dataGrid-header",
      renderCell: (params) => (
        <DescriptionOutlinedIcon
          color="primary"
          style={{ cursor: "pointer" }}
        />
      ),
    },
    {
      field: "vendorName",
      headerName: "Vendor Name",
      width: 180,
      editable: false,
      align: "center",
      headerClassName: "dataGrid-header",
      cellClassName: "dataGrid-cell",
      headerAlign: "center",
    },
    {
      field: "successURL",
      headerName: "Success URL",
      width: 190,
      editable: false,
      align: "left",
      headerClassName: "dataGrid-header",
      cellClassName: "dataGrid-cell",
      headerAlign: "center",
      renderCell: (params) =>
        editableRowId === params.id ? (
          <TextField
            value={params.value}
            variant="standard"
            onChange={(e) =>
              handleEditChange(params.id, params.field, e.target.value)
            }
          />
        ) : (
          params.value
        ),
    },
    {
      field: "quotafullURL",
      headerName: "Quotafull URL",
      width: 190,
      align: "left",
      editable: false,
      headerClassName: "dataGrid-header",
      cellClassName: "dataGrid-cell",
      headerAlign: "center",
      renderCell: (params) =>
        editableRowId === params.id ? (
          <TextField
            value={params.value}
            variant="standard"
            onChange={(e) =>
              handleEditChange(params.id, params.field, e.target.value)
            }
          />
        ) : (
          params.value
        ),
    },
    {
      field: "terminateURL",
      headerName: "Terminate URL",
      width: 190,
      align: "left",
      editable: false,
      headerClassName: "dataGrid-header",
      cellClassName: "dataGrid-cell",
      headerAlign: "center",
      renderCell: (params) =>
        editableRowId === params.id ? (
          <TextField
            variant="standard"
            value={params.value}
            onChange={(e) =>
              handleEditChange(params.id, params.field, e.target.value)
            }
          />
        ) : (
          params.value
        ),
    },
    {
      field: "costPerSurvey",
      headerName: "Cost/Survey",
      width: 170,
      align: "center",
      editable: false,
      headerClassName: "dataGrid-header",
      cellClassName: "dataGrid-cell",
      headerAlign: "center",

      renderCell: (params) =>
        editableRowId === params.id ? (
          <TextField
            variant="standard"
            value={params.value}
            onChange={(e) =>
              handleEditChange(params.id, params.field, e.target.value)
            }
          />
        ) : (
          params.value
        ),
    },
    {
      field: "Target Surveys",
      headerName: "Target Surveys",
      width: 190,
      align: "center",
      editable: false,
      headerClassName: "dataGrid-header",
      cellClassName: "dataGrid-cell",
      headerAlign: "center",

      renderCell: (params) =>
        editableRowId === params.id ? (
          <TextField
            variant="standard"
            value={params.value}
            onChange={(e) =>
              handleEditChange(params.id, params.field, e.target.value)
            }
          />
        ) : (
          params.value
        ),
    },
  ];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const content = (
    <Grid container spacing={2}>
      <Grid
        item
        container
        className="heading-grid2"
        justifyContent="space-between"
        alignItems="end"
      >
        <Grid item md={5} xs={12}>
          <MuiMultiSelectDropdown
            label={"Vendor"}
            value={selectedVendors.map((vendor) => vendor.vendorName)}
            onChange={handleVendorChange}
            options={userDataNew.map((element) => element.vendorName)}
          />
        </Grid>
        <Grid
          item
          container
          justifyContent="flex-end"
          alignItems="end"
          spacing={2}
          md={7}
          xs={12}
        >
          <Grid item display="flex" justifyContent={"flex-end"}>
            {isMobile ? (
              <IconButton
                onClick={handleEdit}
                disabled={selectedVendors.length === 0}
                className="mobile-button primary-background"
              >
                <EditIcon color="primary" />
              </IconButton>
            ) : (
              <Button
                variant="outlined"
                onClick={handleEdit}
                className="client-button export-class"
                startIcon={<EditIcon color="primary" fontSize="large" />}
                disabled={selectedVendors.length === 0}
              >
                Edit
              </Button>
            )}
          </Grid>
          <Grid item display="flex" justifyContent={"flex-end"}>
            {isMobile ? (
              <IconButton
                onClick={handleSave}
                disabled={selectedVendors.length === 0}
                className="mobile-button success-background"
              >
                <DescriptionOutlinedIcon color="success" />
              </IconButton>
            ) : (
              <Button
                variant="outlined"
                onClick={handleSave}
                className="client-button add-class"
                startIcon={
                  <DescriptionOutlinedIcon color="success" fontSize="large" />
                }
                disabled={selectedVendors.length === 0}
              >
                Save
              </Button>
            )}
          </Grid>
          <Grid item display="flex" justifyContent={"flex-end"}>
            {isMobile ? (
              <IconButton
                onClick={handleDelete}
                disabled={selectedRowIds.length === 0}
                className="mobile-button error-background"
              >
                <DeleteOutlinedIcon color="error" />
              </IconButton>
            ) : (
              <Button
                variant="outlined"
                color="error"
                onClick={handleDelete}
                className="client-button delete-class"
                disabled={selectedRowIds.length === 0}
                startIcon={
                  <DeleteOutlinedIcon color="error" fontSize="large" />
                }
              >
                Delete
              </Button>
            )}
          </Grid>
        </Grid>
      </Grid>

      {selectedVendors.length > 0 ? (
        <Grid item container justifyContent="center" alignItems="center">
          <Grid item className="assignVendor-list-datagrid">
            <MuiDataGrid
              rows={selectedVendors}
              columns={columns}
              checkboxSelection
              onRowSelectionModelChange={(newSelection) => {
                setSelectedRowIds(newSelection);
              }}
            />
          </Grid>
        </Grid>
      ) : (
        <Grid item container justifyContent="center" alignItems="center">
          <Typography
            variant="h6"
            textAlign="center"
            className="assignVendor-list-datagrid"
          >
            No vendor selected yet.
          </Typography>
        </Grid>
      )}

      <Grid item>
        <SuccessErrorModal
          show={showSuccessModal}
          handleClose={handleClose}
          imageSrc={tickFrame}
          clientName={"Vendor"}
          isSuccess={true}
          text={"has been successfully assigned."}
          buttonPrimaryText="Ok"
          handleModalButtonClick={handleModalButtonClick}
        />
      </Grid>
    </Grid>
  );

  return <Layout content={content} navbarHeading="ASSIGN VENDOR" />;
};

export default AssignVendor;
