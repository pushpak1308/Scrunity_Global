import React, { useEffect, useState } from "react";
import {
  Grid,
  Paper,
  useMediaQuery,
  useTheme,
  Button,
  Typography,
} from "@mui/material";
// import StepForm from "../../../Components/StepForm/Index";
import { MuiTextField } from "../../../MuiComponents/MuiTextField/Index";
import { MuiDropDown } from "../../../MuiComponents/MuiDropDown/Index";
import Layout from "../Layout";
import "../Client/Style.css";
import tickFrame from "../../../Images/ModalImages/tickFrame.png";
import CrossFrame from "../../../Images/ModalImages/CrossFrame.png";
import "./Style.css";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import { selectAddProjectStep } from "../../../Store/Slice/stepSlice";
import SuccessErrorModal from "../../../Components/CustomModals/SuccesErrorModal/Index";
import { selectedRow } from "../../../Store/Slice/rowSelectionSlice";
import MuiMultiSelectDropdown from "../../../MuiComponents/MuiMultiSelectDropdown/Index";
import { API_PREFIX } from "../../../config";
import AddProjectModal from "../../../Components/CustomModals/AddProjectModal/Index";
// import EditIcon from "@mui/icons-material/Edit";

const AddProject = () => {
  const clientData = useSelector(selectedRow);
  const navigate = useNavigate();
  // const currentStep = useSelector(selectAddProjectStep);
  const [clientName, setClientName] = useState(clientData[0]?.clientName || "");
  const [projectName, setProjectName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [contactNumber, setContactNumber] = useState(
    clientData[0]?.contactNumber || ""
  );
  const [alternateContactNumber, setAlternateContactNumber] = useState("");
  const [audienceType, setAudienceType] = useState("");
  const [projectHead, setProjectHead] = useState("");
  // const [projectBudget, setProjectBudget] = useState("");
  const [description, setDescription] = useState("");
  const [spoc, setSpoc] = useState("");
  const [billingCurrency, setBillingCurrency] = useState("");
  // const [document, setDocument] = useState(null);
  const [countriesData, setCountriesData] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState(
    clientData[0]?.country ? [clientData[0].country] : []
  );
  const [countryData, setCountryData] = useState({});

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showCountryModal, setShowCountryModal] = useState(false);
  const [countryModalContent, setCountryModalContent] = useState("");
  const [countryFormData, setCountryFormData] = useState({
    country: "",
    IR: "",
    LOI: "",
    completesNeeded: "",
    completesFeasible: "",
    costPerSurvey: "",
    surveyLink: "",
  });
  const onChangeClientName = (e) => {
    setClientName(e.target.value);
  };

  const onChangeProjectName = (e) => {
    setProjectName(e.target.value);
  };

  const onChangeContactNumber = (e) => {
    setContactNumber(e.target.value);
  };

  const onChangeAlternateContactNumber = (e) => {
    setAlternateContactNumber(e.target.value);
  };

  const onChangeStartDate = (e) => {
    setStartDate(e.target.value);
  };

  const onChangeEndDate = (e) => {
    setEndDate(e.target.value);
  };

  const onChangeProjectHead = (e) => {
    setProjectHead(e.target.value);
  };

  const onChangeAudienceType = (e) => {
    setAudienceType(e.target.value);
  };

  // const onChangeProjectBudget = (e) => {
  //   setProjectBudget(e.target.value);
  // };

  const onChangeSPOC = (e) => {
    setSpoc(e.target.value);
  };

  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const onChangeBillingCurrency = (e) => {
    setBillingCurrency(e.target.value);
  };

  const onChangeCountry = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedCountries(typeof value === "string" ? value.split(",") : value);
  };

  // const onChangeDocument = (event) => {
  //   const file = event.target.files[0];
  //   setDocument(file);
  // };

  useEffect(() => {
    fetch(`${API_PREFIX}getCountries`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCountriesData(
          data.map((element) => {
            return element.countryName;
          })
        );
      });
  }, []);

  const form = (
    <Grid container>
      <Grid item container spacing={2} justifyContent="space-between">
        <Grid item xs={12} md={5}>
          <MuiTextField
            type="text"
            value={projectName}
            label="Project Name"
            // defaultValue={reduxData?.city || ""}
            onChange={onChangeProjectName}
            className="forAddProject"
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <MuiTextField
            type="text"
            value={clientName}
            label="Client Name"
            // defaultValue={reduxData?.city || ""}
            onChange={onChangeClientName}
            className="forAddProject"
          />
        </Grid>
      </Grid>
      <Grid item container spacing={2} justifyContent="space-between">
        <Grid item xs={12} md={5}>
          <MuiTextField
            type="text"
            value={contactNumber}
            label="Contact Number"
            // defaultValue={reduxData?.city || ""}
            onChange={onChangeContactNumber}
            className="forAddProject"
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <MuiTextField
            type="text"
            value={alternateContactNumber}
            label="Alternate Contact Number"
            // defaultValue={reduxData?.state || ""}
            onChange={onChangeAlternateContactNumber}
            className="forAddProject"
          />
        </Grid>
      </Grid>

      <Grid item container spacing={2} justifyContent="space-between">
        <Grid item xs={12} md={5}>
          <MuiTextField
            type="date"
            value={startDate}
            label="Start Date"
            // defaultValue={reduxData?.city || ""}
            onChange={onChangeStartDate}
            placeholder="01-07-2024"
            className="forAddProject"
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <MuiTextField
            type="date"
            value={endDate}
            label="End Date"
            // defaultValue={reduxData?.city || ""}
            onChange={onChangeEndDate}
            placeholder="01-07-2024"
            className="forAddProject"
          />
        </Grid>
      </Grid>

      <Grid item container spacing={2} justifyContent="space-between">
        <Grid item xs={12} md={5}>
          <MuiTextField
            type="text"
            value={projectHead}
            label="Project Head"
            onChange={onChangeProjectHead}
            className="forAddProject"
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <MuiTextField
            type="text"
            value={spoc}
            label="Pre Sales SPOC"
            // defaultValue={reduxData?.state || ""}
            onChange={onChangeSPOC}
            className="forAddProject"
          />
        </Grid>
      </Grid>

      <Grid item container spacing={2} justifyContent="space-between">
        <Grid item xs={12} md={5}>
          <MuiDropDown
            value={audienceType}
            //   defaultValue={reduxData?.accountType || ""}
            onChange={onChangeAudienceType}
            placeholder="College Students"
            options={["B2B", "B2C", "Heathcare", "Tracker", "Others"]}
            label="Project Type"
            className="forAddProject"
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <MuiTextField
            type="text"
            value={billingCurrency}
            //   defaultValue={reduxData?.accountType || ""}
            onChange={onChangeBillingCurrency}
            placeholder="USD"
            label="Billing Currency"
            className="forAddProject"
          />
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <MuiTextField
          type="text"
          value={description}
          label="Description"
          multiline={true}
          rows={6}
          onChange={onChangeDescription}
          className="forAddProject"
        />
      </Grid>
      <Grid item xs={12}>
        <MuiMultiSelectDropdown
          label={"Country"}
          placeholder={"(Select more countries)"}
          value={selectedCountries}
          onChange={onChangeCountry}
          options={countriesData}
          className="forAddProject"
        />
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          {selectedCountries.map((country, index) => (
            <Grid
              item
              key={index}
              xs={12}
              style={{ marginTop: "8px", cursor: "pointer" }}
              onClick={() => handleCountryClick(country)}
            >
              <Typography
                component="div"
                display="flex"
                paddingTop={"1rem"}
                alignItems={"center"}
              >
                <AddIcon />
                {country}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
      {/* <Grid item xs={12}>
        <MuiTextField
          type="file"
          value={document}
          label="Document(id any)"
          placeholder=""
          onChange={onChangeDocument}
          className="forAddProject"
        />
      </Grid> */}
      <Grid item xs={12} style={{ marginTop: "16px" }}>
        <Button
          variant="contained"
          className="modal-button-save"
          onClick={() =>
            handleSave({
              clientName,
              projectName,
              startDate,
              endDate,
              contactNumber,
              alternateContactNumber,
              audienceType,
              projectHead,
              description,
              spoc,
              billingCurrency,
              selectedCountries,
              countryData,
            })
          }
        >
          {" "}
          Save
        </Button>
      </Grid>
    </Grid>
  );

  const handleSave = (formData) => {
    // Save form data
    console.log("Form data to be saved:", formData);
    setShowSuccessModal(!showSuccessModal);
  };
  // console.log("Form countryFormData:", countryFormData);

  const handleCloseAddProjectModal = () => {
    setShowCountryModal(false);
  };
  const handleClose = () => {
    setShowSuccessModal(!showSuccessModal);
  };

  const handleGoToProjectList = () => {
    navigate("/projects");
  };

  const handleCountryClick = (country) => {
    setCountryModalContent(country);
    setCountryFormData(
      countryData[country] || {
        country: country,
        IR: "",
        LOI: "",
        completesNeeded: "",
        completesFeasible: "",
        costPerSurvey: "",
        surveyLink: "",
      }
    );
    setShowCountryModal(true);
  };

  const handleCountryFormChange = (field, value) => {
    setCountryFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleCountryFormSave = () => {
    setCountryData((prevData) => ({
      ...prevData,
      [countryModalContent]: countryFormData,
    }));
    setShowCountryModal(false);
  };

  const content = (
    <Grid container alignItems="center" justifyContent="center">
      <Grid
        item
        container
        xs={12}
        md={10}
        className="form-grid-add-project"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item className="heading-grid">
          <Paper
            elevation={0}
            background="#f5f6f8"
            className={isMobile ? "screenHeading-mobile" : "screenHeading"}
          >
            Add Project
          </Paper>
        </Grid>
        <Grid item container className="content-grid-project">
          {/* <Grid
            item
            className={isMobile ? "fixed-heading-mobile" : "fixed-heading"}
          >
            {currentStep > 2
              ? "Sampling Requirements"
              : "Project Specifications"}
          </Grid> */}

          <Paper elevation={isMobile ? 0 : 6} className="form-sub-grid">
            {form}
          </Paper>
        </Grid>
      </Grid>

      <Grid item>
        <SuccessErrorModal
          show={showSuccessModal}
          handleClose={handleClose}
          imageSrc={tickFrame}
          clientName={projectName}
          isSuccess={true}
          text={"has been saved. You can view the details on Projects screen."}
          buttonPrimaryText="Ok"
          handleModalButtonClick={handleGoToProjectList}
        />
        <SuccessErrorModal
          // show={showErrorModal}
          handleClose={handleClose}
          imageSrc={CrossFrame}
          clientName={projectName}
          isSuccess={false}
          text={"could not be saved due to some reason.Please try again"}
          buttonPrimaryText="Ok"
          handleModalButtonClick={handleGoToProjectList}
        />
        <AddProjectModal
          open={showCountryModal}
          onClose={handleCloseAddProjectModal}
          country={countryModalContent}
          formData={countryFormData}
          onFormChange={handleCountryFormChange}
          onSave={handleCountryFormSave}
        />
      </Grid>
    </Grid>
  );

  return <Layout content={content} navbarHeading="ADD PROJECT" />;
};

export default AddProject;
