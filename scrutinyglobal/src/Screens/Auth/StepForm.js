import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { MuiTextField } from "../../MuiComponents/MuiTextField/Index";
import { MuiDropDown } from "../../MuiComponents/MuiDropDown/Index";
import CustomContainedButton from "../../MuiComponents/MuiContainedButton/Index";
import axios from "axios";
import { useSelector } from "react-redux";

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
  console.log("reduxData111 :>> ", reduxData);

  const [countriesData, setCountriesData] = useState([""]);
  useEffect(() => {
    fetch("http://localhost:8080/ScrutinyGlobal/getCountries", {
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
        console.log("countries data seting ", countriesData);
      });
  }, []);

  const countryOptions = () => {
    return countriesData;
  };

  switch (formStep) {
    case 0:
      return (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <MuiTextField
              type="text"
              value={name}
              defaultValue={reduxData?.name || ""}
              label="Name"
              onChange={onChangeName}
              className="forRegister"
            />
          </Grid>

          <Grid item xs={12}>
            <MuiTextField
              type="text"
              value={email}
              defaultValue={reduxData?.email || ""}
              label="Email"
              onChange={onChangeEmail}
              className="forRegister"
            />
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={5}>
              <Grid item xs={12} md={6}>
                <MuiTextField
                  type="password"
                  value={password}
                  label="Password"
                  defaultValue={reduxData?.password || ""}
                  onChange={onChangePassword}
                  className="forRegister"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <MuiTextField
                  type="password"
                  value={confirmPassword}
                  label="Confirm Password"
                  defaultValue={reduxData?.confirmPassword || ""}
                  onChange={onChangeConfirmPassword}
                  className="forRegister"
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
              onClickFunction={incrementFormStep}
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
              defaultValue={reduxData?.accountType || ""}
              onChange={onChangeAccountType}
              options={["User", "Premium", "Vendor"]}
              label="Account Type"
              className="forRegister"
            />
          </Grid>

          <Grid item xs={12}>
            <MuiTextField
              type="text"
              value={number}
              defaultValue={reduxData?.number || ""}
              label="Number"
              onChange={onChangeNumber}
              className="forRegister"
            />
          </Grid>
          <Grid item xs={12}>
            <MuiTextField
              type="date"
              value={birthdate}
              label="Birth Date"
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
              onClickFunction={decrementFormStep}
              buttonText={"Previous"}
            />
            <CustomContainedButton
              type="button"
              onClickFunction={incrementFormStep}
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
              value={address}
              label="Address"
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
                  value={city}
                  label="City"
                  defaultValue={reduxData?.city || ""}
                  onChange={onChangeCity}
                  className="forRegister"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <MuiTextField
                  type="text"
                  value={state}
                  label="State/Province"
                  defaultValue={reduxData?.state || ""}
                  onChange={onChangeState}
                  className="forRegister"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <MuiTextField
                  name="zipcode"
                  type="text"
                  value={zipcode}
                  label="Zip Code"
                  defaultValue={reduxData?.zipcode || ""}
                  onChange={onChangeZipcode}
                  className="forRegister"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <MuiDropDown
                  value={country}
                  onChange={onChangeCountry}
                  defaultValue={reduxData?.country || ""}
                  options={countryOptions()} // Example options
                  label="Country"
                  className="forRegister"
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
              onClickFunction={decrementFormStep}
              buttonText={"Previous"}
            />
            <CustomContainedButton
              type="button"
              onClickFunction={incrementFormStep}
              buttonText={"Next"}
            />
          </Grid>
        </Grid>
      );
    case 3:
      return (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <MuiDropDown
              name="profession"
              value={profession}
              onChange={onChangeProfession}
              defaultValue={reduxData?.profession || ""}
              options={["profession1", "profession2", "profession2"]} // Example options
              placeholder={"Ex: Software Developer"}
              label="Profession"
              className="forRegister"
            />
          </Grid>

          <Grid item xs={12}>
            <MuiTextField
              name="experience"
              value={experience}
              defaultValue={reduxData?.experience || ""}
              onChange={onChangeExperience}
              type="text"
              label="Experience"
              className="forRegister"
            />
          </Grid>

          <Grid item xs={12}>
            <MuiTextField
              name="monthlySalary"
              type="text"
              value={monthlySalary}
              label="Monthly Salary"
              placeholder={"50,000"}
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
              onClickFunction={decrementFormStep}
              buttonText={"Previous"}
            />
            <CustomContainedButton
              type="button"
              onClickFunction={onClick}
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
