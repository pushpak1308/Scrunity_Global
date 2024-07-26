import React, { useState, useEffect } from "react";
import Layout from "../Layout";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import { useNavigate } from "react-router-dom";
import MuiDataGrid from "../../../MuiComponents/MuiDataGrid/Index";
import {
  Button,
  Grid,
  IconButton,
  Paper,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import { useDispatch } from "react-redux";
import { setSelectedRows } from "../../../Store/Slice/rowSelectionSlice";
import { API_PREFIX } from "../../../config";

const Projects = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [rowSelectionModel, setRowSelectionModel] = useState([]);
  const [checkedRows, setCheckedRows] = useState([]);
  const [responseData, setResponseData] = useState([]);
  const [surveyResponseData, setSurveyResponseData] = useState([]);
  const [projectDetailsData, setProjectDetailsData] = useState([]);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  let projectData = {
    id: [],
    status: [],
    projectName: [],
    clientName: [],
    projectHead: [],
    audienceType: [],
    country: [],
    billingCurrency: [],
    contactName: [],
    startDate: [],
    endDate: [],
    projectBudget: [],
    SPOC: [],
    IR: [],
    LOI: [],
  };

  const columns = [
    {
      field: "id",
      headerName: "S.No.",
      width: 90,
      align: "center",
      editable: false,
      cellClassName: "dataGrid-cell",
      headerClassName: "dataGrid-header",
    },
    {
      field: "status",
      headerName: "Status",
      width: 130,
      editable: true,
      headerAlign: "center",
      // align: "center",
      cellClassName: "dataGrid-cell",
      headerClassName: "dataGrid-header",
      type: "singleSelect",
      valueOptions: ["Initiated", "Running", "Completed", "Cancelled"],
      renderCell: (params) => {
        const status = params.value || "Initiated";

        const getColor = (status) => {
          switch (status) {
            case "Completed":
              return "success";
            case "Cancelled":
              return "error";
            case "Initiated":
              return "primary";
            case "Running":
              return "warning";
            default:
              return "";
          }
        };
        return (
          <div style={{ display: "flex", alignItems: "center" }}>
            <CircleIcon fontSize="small" color={getColor(status)} />
            <Paper elevation={0} style={{ marginLeft: 8 }}>
              {status}
            </Paper>
          </div>
        );
      },
    },
    {
      field: "projectName",
      headerName: "Project Name",
      align: "center",
      width: 180,
      editable: false,
      headerAlign: "center",
      cellClassName: "dataGrid-cell",
      headerClassName: "dataGrid-header",
    },
    {
      field: "clientName",
      headerName: "Client Name",
      width: 180,
      align: "center",
      editable: false,
      headerClassName: "dataGrid-header",
      cellClassName: "dataGrid-cell",
      headerAlign: "center",
    },
    {
      field: "projectHead",
      headerName: "Project Head",
      width: 180,
      align: "center",
      editable: false,
      headerClassName: "dataGrid-header",
      cellClassName: "dataGrid-cell",
      headerAlign: "center",
    },
    {
      field: "audienceType",
      headerName: "Audience Type",
      width: 200,
      align: "center",
      editable: false,
      headerClassName: "dataGrid-header",
      cellClassName: "dataGrid-cell",
      headerAlign: "center",
    },
    {
      field: "country",
      headerName: "Country",
      width: 160,
      align: "center",
      editable: false,
      headerClassName: "dataGrid-header",
      cellClassName: "dataGrid-cell",
      headerAlign: "center",
    },
    {
      field: "billingCurrency",
      headerName: "Billing Currency",
      width: 200,
      align: "center",
      editable: false,
      headerClassName: "dataGrid-header",
      cellClassName: "dataGrid-cell",
      headerAlign: "center",
    },
    {
      field: "contactName",
      align: "center",
      editable: false,
      headerName: "Contact Name",
      width: 190,
      cellClassName: "dataGrid-cell",
      headerClassName: "dataGrid-header",
      headerAlign: "center",
    },
    {
      field: "startDate",
      headerName: "Start Date",
      align: "center",
      editable: false,
      width: 170,
      cellClassName: "dataGrid-cell",
      headerClassName: "dataGrid-header",
      headerAlign: "center",
    },
    {
      field: "endDate",
      headerName: "End Date",
      align: "center",
      editable: false,
      width: 170,
      cellClassName: "dataGrid-cell",
      headerClassName: "dataGrid-header",
      headerAlign: "center",
    },
    {
      field: "projectBudget",
      headerName: "Project Budget",
      align: "center",
      editable: false,
      width: 190,
      cellClassName: "dataGrid-cell",
      headerClassName: "dataGrid-header",
      headerAlign: "center",
    },
    {
      field: "SPOC",
      editable: false,
      headerName: "Pre Sales SPOC",
      width: 200,
      cellClassName: "dataGrid-cell",
      headerClassName: "dataGrid-header",
      headerAlign: "center",
      align: "center",
    },
  ];

  useEffect(() => {
    getProjectData();
    getSurveyLinkData();
  }, []);

  function getSurveyLinkData() {
    fetch(`${API_PREFIX}getSurveyDetails`, {
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
        setSurveyResponseData(data);
        // console.log("response Data", data);
      })
      .catch(function (error) {
        console.error("Error fetching data:", error);
      });
  }

  function getProjectData() {
    fetch(`${API_PREFIX}getProjectList`, {
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
    // console.log("responseData", responseData);
    setProjectDetailsData(convertData(responseData));
  }, [responseData]);

  function convertData(projectdetailsData) {
    for (const key in projectData) {
      projectData[key] = [];
    }

    projectdetailsData.forEach((element) => {
      projectData.id.push(element.project_id);
      projectData.projectName.push(element.project_name);
      projectData.startDate.push(element.project_start_time);
      projectData.clientName.push(element.name);
      projectData.projectHead.push(element.project_head_id);
      projectData.audienceType.push(element.audience_type);
      projectData.country.push(element.country);
      projectData.billingCurrency.push(element.billing_currency);
      projectData.contactName.push(element.contact_name);
      projectData.endDate.push(element.project_end_time);
      projectData.projectBudget.push(element.project_minimum_fee);
      projectData.SPOC.push(element.pre_salespoc);
    });
    // console.log(projectData);

    let projectDataConverted = [];
    const keys = Object.keys(projectData);
    const numObjects = projectData[keys[0]].length;
    for (let i = 0; i < numObjects; i++) {
      const newObj = {};
      keys.forEach((key) => {
        newObj[key] = projectData[key][i];
      });
      projectDataConverted.push(newObj);
    }

    return projectDataConverted;
  }

  const [columnVisibilityModel, setColumnVisibilityModel] = useState({
    id: false,
  });

  const handleRowClick = () => {
    navigate(`/project/${checkedRows[0].project_id}`);
  };

  const handleRowSelection = (newRowSelectionModel) => {
    setRowSelectionModel(newRowSelectionModel);
    const selectedRowData = newRowSelectionModel.map((id) =>
      responseData.find((row) => row.project_id === id)
    );
    setCheckedRows(selectedRowData);
    dispatch(setSelectedRows(selectedRowData));
  };

  const handleAssignVendor = () => {
    navigate(`/assignVendor/${checkedRows[0].project_id}`);
  };
  // console.log("Selected Rows:", checkedRows);

  const content = (
    <Grid container>
      <Grid
        item
        container
        className={isMobile ? "heading-grid2-mobile" : "heading-grid2"}
        jclassName={"heading-grid2"}
        justifyContent="space-between"
        alignItems="end"
      >
        <Grid item>
          <Paper
            elevation={0}
            className={isMobile ? "screenHeading-mobile" : "screenHeading"}
          >
            PROJECT LIST
          </Paper>
        </Grid>
        <Grid
          item
          container
          justifyContent="flex-end"
          spacing={2}
          xs={12}
          md={7}
        >
          <Grid item>
            {isMobile ? (
              <IconButton
                onClick={handleAssignVendor}
                disabled={checkedRows.length === 0}
                className="mobile-button success-background"
              >
                <DescriptionOutlinedIcon color="success" />
              </IconButton>
            ) : (
              <Button
                variant="outlined"
                color="success"
                onClick={handleAssignVendor}
                className="client-button add-class"
                disabled={checkedRows.length === 0}
                startIcon={
                  <DescriptionOutlinedIcon color="success" fontSize="large" />
                }
              >
                Assign Vendor
              </Button>
            )}
          </Grid>
          <Grid item>
            {isMobile ? (
              <IconButton
                onClick={handleRowClick}
                disabled={checkedRows.length === 0}
                className="mobile-button primary-background"
              >
                <DescriptionOutlinedIcon color="primary" />
              </IconButton>
            ) : (
              <Button
                variant="outlined"
                color="primary"
                onClick={handleRowClick}
                className="client-button export-class"
                disabled={checkedRows.length === 0}
                startIcon={
                  <DescriptionOutlinedIcon color="primary" size="large" />
                }
              >
                View Details
              </Button>
            )}
          </Grid>
          <Grid item>
            {isMobile ? (
              <IconButton
                disabled={checkedRows.length === 0}
                className="mobile-button error-background"
              >
                <DeleteOutlinedIcon color="error" />
              </IconButton>
            ) : (
              <Button
                variant="outlined"
                color="error"
                disabled={checkedRows.length === 0}
                className="client-button delete-class"
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

      <Grid item className="client-list-datagrid">
        <MuiDataGrid
          rows={projectDetailsData}
          getRowId={(row) => row.id}
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

  return <Layout content={content} navbarHeading="PROJECTS" />;
};

export default Projects;
