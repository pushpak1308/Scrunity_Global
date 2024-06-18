import React, { useState } from "react";
import { Grid, Button, Box, Typography } from "@mui/material";
import { MuiTextField } from "../../MuiComponents/MuiTextField/Index";
import { MuiDropDown } from "../../MuiComponents/MuiDropDown/Index";
import CustomContainedButton from "../../MuiComponents/MuiContainedButton/Index";

const StepForm = ({
  formStep,
  formData,
  onChangeHandlers,
  incrementFormStep,
  decrementFormStep,
  setShow,
  onClick,
}) => {
  const {
    name,
    number,
    username,
    password,
    confirmPassword,
    birthdate,
    address,
    city,
    state,
    zipcode,
    country,
    profession,
    accountType,
    monthlySalary,
  } = formData;
  const {
    onChangeName,
    onChangeNumber,
    onChangeUsername,
    onChangePassword,
    onChangeConfirmPassword,
    onChangeBirthdate,
    onChangeAddress,
    onChangeCity,
    onChangeState,
    onChangeZipcode,
    onChangeCountry,
    onChangeProfession,
    onChangeAccountType,
    onChangeMonthlySalary,
  } = onChangeHandlers;

  switch (formStep) {
    case 0:
      return (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <MuiTextField
              name="name"
              type="text"
              value={name}
              label="Name"
              onChange={onChangeName}
              className="forRegister"
            />
          </Grid>
          <Grid item xs={12}>
            <MuiTextField
              name="number"
              type="text"
              value={number}
              label="Number"
              onChange={onChangeNumber}
              className="forRegister"
            />
          </Grid>
          <Grid item xs={12}>
            <MuiTextField
              name="email"
              type="text"
              value={username}
              label="Email"
              onChange={onChangeUsername}
              className="forRegister"
            />
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={5}>
              <Grid item xs={12} md={6}>
                <MuiTextField
                  name="password"
                  type="password"
                  value={password}
                  label="Password"
                  onChange={onChangePassword}
                  className="forRegister"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <MuiTextField
                  name="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  label="Confirm Password"
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
            <MuiTextField
              name="birthdate"
              type="date"
              value={birthdate}
              label="Birth Date"
              onChange={onChangeBirthdate}
              className="forRegister"
            />
          </Grid>
          <Grid item xs={12}>
            <MuiTextField
              name="address"
              type="text"
              value={address}
              label="Address"
              onChange={onChangeAddress}
              className="forRegister"
            />
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <MuiTextField
                  name="city"
                  type="text"
                  value={city}
                  label="City"
                  onChange={onChangeCity}
                  className="forRegister"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <MuiTextField
                  name="state"
                  type="text"
                  value={state}
                  label="State/Province"
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
                  onChange={onChangeZipcode}
                  className="forRegister"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <MuiDropDown
                  name="country"
                  value={country}
                  onChange={onChangeCountry}
                  options={["USA", "Canada", "UK"]} // Example options
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
    case 2:
      return (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <MuiTextField
              name="profession"
              value={profession}
              onChange={onChangeProfession}
              type="text"
              placeholder={"Ex: Software Developer"}
              label="Profession"
              className="forRegister"
            />
          </Grid>
          <Grid item xs={12}>
            <MuiDropDown
              name="accountType"
              value={accountType}
              onChange={onChangeAccountType}
              options={["User", "Premium", "Vendor"]}
              label="Account Type"
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
