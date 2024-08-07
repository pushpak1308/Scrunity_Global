import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { MuiTextField } from "../../MuiComponents/MuiTextField/Index";
import { MuiDropDown } from "../../MuiComponents/MuiDropDown/Index";
import CustomContainedButton from "../../MuiComponents/MuiContainedButton/Index";
// import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { API_PREFIX } from "../../config";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const StepForm = ({
  formStep,
  formData,
  onChangeHandlers,
  incrementFormStep,
  decrementFormStep,
  onClick,
}) => {
  const {
    name,
    number,
    email,
    password,
    confirmPassword,
    birthdate,
    address,
    city,
    state,
    zipcode,
    country,
    profession,
    experience,
    accountType,
    monthlySalary,
  } = formData;
  const {
    onChangeName,
    onChangeNumber,
    onChangeEmail,
    onChangePassword,
    onChangeConfirmPassword,
    onChangeBirthdate,
    onChangeAddress,
    onChangeCity,
    onChangeState,
    onChangeZipcode,
    onChangeCountry,
    onChangeProfession,
    onChangeExperience,
    onChangeAccountType,
    onChangeMonthlySalary,
  } = onChangeHandlers;

  const reduxData = useSelector((state) => state.user);
  const [errors, setErrors] = useState({});

  // Validation for Step 1
  const validateStep1 = () => {
    const newErrors = {};
    if (name?.trim() === "") newErrors.name = "This field is required";
    if (!emailRegex.test(email)) newErrors.email = "Invalid email address";
    if (password?.trim() === "" || password !== confirmPassword)
      newErrors.password = "Passwords do not match";
    return newErrors;
  };
  // Validation for Step 2
  const validateStep2 = () => {
    const newErrors = {};
    if (accountType?.trim() === "")
      newErrors.accountType = "This field is required";
    if (number?.trim() === "") newErrors.number = "This field is required";
    if (birthdate?.trim() === "")
      newErrors.birthdate = "This field is required";
    return newErrors;
  };

  // Validation for Step 3
  const validateStep3 = () => {
    const newErrors = {};
    if (address?.trim() === "") newErrors.address = "This field is required";
    if (city?.trim() === "") newErrors.city = "This field is required";
    if (state?.trim() === "") newErrors.state = "This field is required";
    if (zipcode?.trim() === "") newErrors.zipcode = "This field is required";
    if (country?.trim() === "") newErrors.country = "This field is required";
    return newErrors;
  };

  // Validation for Step 4
  const validateStep4 = () => {
    const newErrors = {};
    if (profession?.trim() === "")
      newErrors.profession = "This field is required";
    if (experience?.trim() === "")
      newErrors.experience = "This field is required";
    if (monthlySalary?.trim() === "")
      newErrors.monthlySalary = "This field is required";
    return newErrors;
  };

  const handleNext = () => {
    let validationErrors = {};
    switch (formStep) {
      case 0:
        validationErrors = validateStep1();
        break;
      case 1:
        validationErrors = validateStep2();
        break;
      case 2:
        validationErrors = validateStep3();
        break;
      case 3:
        validationErrors = validateStep4();
        break;
      default:
        break;
    }
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      if (formStep === 3) {
        onClick();
      } else {
        incrementFormStep();
      }
      setErrors({});
    }
  };

  const handlePrevious = () => {
    decrementFormStep();
    setErrors({});
  };

  const [countriesData, setCountriesData] = useState([""]);
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
        // console.log("countries data seting ", countriesData);
      });
  }, []);

  const countryOptions = () => {
    return countriesData;
    // return ["India","USA"];
  };

  switch (formStep) {
    case 0:
      return (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <MuiTextField
              type="text"
              required={true}
              value={name}
              defaultValue={reduxData?.name || ""}
              label="Organization Name"
              onChange={onChangeName}
              className="forRegister"
              error={!!errors.name}
              helperText={errors.name || ""}
            />
          </Grid>

          <Grid item xs={12}>
            <MuiTextField
              type="text"
              value={email}
              required={true}
              defaultValue={reduxData?.email || ""}
              label="Email"
              onChange={onChangeEmail}
              className="forRegister"
              error={!!errors.email}
              helperText={errors.email || ""}
            />
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={5}>
              <Grid item xs={12} md={6}>
                <MuiTextField
                  type="password"
                  value={password}
                  required={true}
                  label="Password"
                  defaultValue={reduxData?.password || ""}
                  onChange={onChangePassword}
                  error={!!errors.password}
                  helperText={errors.password || ""}
                  className="forRegister"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <MuiTextField
                  type="password"
                  value={confirmPassword}
                  required={true}
                  label="Confirm Password"
                  defaultValue={reduxData?.confirmPassword || ""}
                  onChange={onChangeConfirmPassword}
                  className="forRegister"
                  error={!!errors.password}
                  helperText={errors.password || ""}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            display="flex"
            justifyContent="right"
            alignItems="center"
          >
            <CustomContainedButton
              type="button"
              onClickFunction={handleNext}
              buttonText={"Next"}
            />
          </Grid>
        </Grid>
      );
    case 1:
      return (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <MuiDropDown
              value={accountType}
              required={true}
              defaultValue={reduxData?.accountType || ""}
              onChange={onChangeAccountType}
              error={!!errors.accountType}
              helperText={errors.accountType || ""}
              options={["Client", "Admin", "Vendor"]}
              label="Account Type"
              className="forRegister"
            />
          </Grid>

          <Grid item xs={12}>
            <MuiTextField
              type="text"
              value={number}
              required={true}
              defaultValue={reduxData?.number || ""}
              label="Number"
              error={!!errors.number}
              helperText={errors.number || ""}
              onChange={onChangeNumber}
              className="forRegister"
            />
          </Grid>
          <Grid item xs={12}>
            <MuiTextField
              type="date"
              required={true}
              value={birthdate}
              label="Birth Date"
              error={!!errors.birthdate}
              helperText={errors.birthdate || ""}
              defaultValue={reduxData?.dob || ""}
              onChange={onChangeBirthdate}
              className="forRegister"
            />
          </Grid>

          <Grid
            item
            xs={12}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <CustomContainedButton
              type="button"
              onClickFunction={handlePrevious}
              buttonText={"Previous"}
            />
            <CustomContainedButton
              type="button"
              onClickFunction={handleNext}
              buttonText={"Next"}
            />
          </Grid>
        </Grid>
      );
    case 2:
      return (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <MuiTextField
              type="text"
              required={true}
              value={address}
              label="Address"
              error={!!errors.address}
              helperText={errors.address || ""}
              defaultValue={reduxData?.address || ""}
              onChange={onChangeAddress}
              className="forRegister"
            />
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <MuiTextField
                  type="text"
                  required={true}
                  value={city}
                  label="City"
                  error={!!errors.city}
                  helperText={errors.city || ""}
                  defaultValue={reduxData?.city || ""}
                  onChange={onChangeCity}
                  className="forRegister"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <MuiTextField
                  type="text"
                  value={state}
                  required={true}
                  label="State/Province"
                  defaultValue={reduxData?.state || ""}
                  onChange={onChangeState}
                  className="forRegister"
                  error={!!errors.state}
                  helperText={errors.state || ""}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <MuiTextField
                  type="text"
                  required={true}
                  value={zipcode}
                  label="Zip Code"
                  defaultValue={reduxData?.zipcode || ""}
                  onChange={onChangeZipcode}
                  className="forRegister"
                  error={!!errors.zipcode}
                  helperText={errors.zipcode || ""}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <MuiDropDown
                  value={country}
                  required={true}
                  onChange={onChangeCountry}
                  defaultValue={reduxData?.country || ""}
                  options={countryOptions()}
                  label="Country"
                  className="forRegister"
                  error={!!errors.country}
                  helperText={errors.country || ""}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid
            item
            xs={12}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <CustomContainedButton
              type="button"
              onClickFunction={handlePrevious}
              buttonText={"Previous"}
            />
            <CustomContainedButton
              type="button"
              onClickFunction={handleNext}
              buttonText={"Next"}
            />
          </Grid>
        </Grid>
      );
    case 3:
      return (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <MuiTextField
              required={true}
              value={profession}
              onChange={onChangeProfession}
              defaultValue={reduxData?.profession || ""}
              // options={["profession1", "profession2", "profession2"]} // Example options
              placeholder={"Ex: Software Developer"}
              label="Profession"
              type="text"
              error={!!errors.profession}
              helperText={errors.profession || ""}
              className="forRegister"
            />
          </Grid>

          <Grid item xs={12}>
            <MuiTextField
              value={experience}
              required={true}
              error={!!errors.experience}
              helperText={errors.experience || ""}
              defaultValue={reduxData?.experience || ""}
              onChange={onChangeExperience}
              type="text"
              label="Experience"
              className="forRegister"
            />
          </Grid>

          <Grid item xs={12}>
            <MuiTextField
              type="text"
              required={true}
              value={monthlySalary}
              label="Monthly Salary"
              placeholder={"50,000"}
              error={!!errors.monthlySalary}
              helperText={errors.monthlySalary || ""}
              defaultValue={reduxData?.salary || ""}
              onChange={onChangeMonthlySalary}
              className="forRegister"
            />
          </Grid>
          <Grid
            item
            xs={12}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <CustomContainedButton
              type="button"
              onClickFunction={handlePrevious}
              buttonText={"Previous"}
            />
            <CustomContainedButton
              type="button"
              onClickFunction={handleNext}
              buttonText={"Save"}
            />
          </Grid>
        </Grid>
      );
    default:
      return null;
  }
};

export default StepForm;
