import React from "react";
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
    educationLevel,
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
    onChangeEducationLevel,
    onChangeAccountType,
    onChangeMonthlySalary,
  } = onChangeHandlers;

  const style = {
    mt: 1,
    fontWeight: 550,
    fontSize: "2.5vh",
  };

  switch (formStep) {
    case 0:
      return (
        <>
          <MuiTextField
            name="name"
            type="text"
            value={name}
            className="arimo-input-label"
            label="Name"
            sx={style}
            onChange={onChangeName}
            required
          />
          <MuiTextField
            name="number"
            type="text"
            value={number}
            className="arimo-input-label"
            label="Number"
            sx={style}
            onChange={onChangeNumber}
            required
          />
          <MuiTextField
            name="email"
            type="text"
            value={username}
            className="arimo-input-label"
            label="Email"
            sx={style}
            onChange={onChangeUsername}
            required
          />
          <Grid container spacing={5}>
            <Grid item xs={12} md={6}>
              <MuiTextField
                name="password"
                type="password"
                value={password}
                className="arimo-input-label"
                label="Password"
                sx={style}
                onChange={onChangePassword}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <MuiTextField
                name="confirmPassword"
                type="password"
                value={confirmPassword}
                className="arimo-input-label"
                label="Confirm Password"
                sx={style}
                onChange={onChangeConfirmPassword}
                required
              />
            </Grid>
          </Grid>
          <Box display="flex" justifyContent="right" alignItems="center">
            <CustomContainedButton
              type="button"
              onClickFunction={incrementFormStep}
              buttonText={"Next"}
            />
          </Box>
        </>
      );
    case 1:
      return (
        <>
          <MuiTextField
            name="birthdate"
            type="date"
            value={birthdate}
            className="arimo-input-label"
            label="Birth Date"
            sx={style}
            onChange={onChangeBirthdate}
            required
          />
          <MuiTextField
            name="address"
            type="text"
            value={address}
            className="arimo-input-label"
            label="Address"
            sx={style}
            onChange={onChangeAddress}
            required
          />

          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <MuiDropDown
                name="city"
                value={city}
                onChange={onChangeCity}
                options={["New York", "Los Angeles", "Chicago"]} // Example options
                label="City"
                className="arimo-input-label"
                sx={style}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <MuiDropDown
                name="state"
                value={state}
                onChange={onChangeState}
                options={["California", "New York", "Texas"]} // Example options
                label="State/Province"
                className="arimo-input-label"
                sx={style}
                required
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <MuiTextField
                name="zipcode"
                type="text"
                value={zipcode}
                className="arimo-input-label"
                label="Zip Code"
                sx={style}
                onChange={onChangeZipcode}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <MuiDropDown
                name="country"
                value={country}
                onChange={onChangeCountry}
                options={["USA", "Canada", "UK"]} // Example options
                label="Country"
                className="arimo-input-label"
                sx={style}
                required
              />
            </Grid>
          </Grid>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt={2}
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
          </Box>
        </>
      );
    case 2:
      return (
        <>
          <MuiDropDown
            name="educationLevel"
            value={educationLevel}
            onChange={onChangeEducationLevel}
            options={["B.Tech", "BCA", "Law"]} // Example options
            label="Education Level"
            className="arimo-input-label"
            sx={style}
            required
          />
          <MuiTextField
            name="accountType"
            type="text"
            value={accountType}
            className="arimo-input-label"
            label="Account Type"
            sx={style}
            onChange={onChangeAccountType}
            required
          />
          <MuiTextField
            name="monthlySalary"
            type="text"
            value={monthlySalary}
            className="arimo-input-label"
            label="Monthly Salary"
            sx={style}
            onChange={onChangeMonthlySalary}
            required
          />
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt={2}
          >
            <CustomContainedButton
              type="button"
              onClickFunction={decrementFormStep}
              buttonText={"Previous"}
            />
            <CustomContainedButton
              type="button"
              onClickFunction={() => setShow(true)}
              buttonText={"Save"}
            />
          </Box>
        </>
      );
    default:
      return null;
  }
};

export default StepForm;
