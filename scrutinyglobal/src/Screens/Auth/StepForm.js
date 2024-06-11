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

  const style = {
    mt: 1,
    fontWeight: 550,
    fontSize: "2.5vh",
  };

  switch (formStep) {
    case 0:
      return (
        <Grid container spacing={2}>
          <Grid item xs={12}>
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
          </Grid>
          <Grid item xs={12}>
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
          </Grid>
          <Grid item xs={12}>
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
          </Grid>
          <Grid item xs={12}>
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
              className="arimo-input-label"
              label="Birth Date"
              sx={style}
              onChange={onChangeBirthdate}
              required
            />
          </Grid>
          <Grid item xs={12}>
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
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <MuiTextField
                  name="city"
                  type="text"
                  value={city}
                  className="arimo-input-label"
                  label="City"
                  sx={style}
                  onChange={onChangeCity}
                  required
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <MuiTextField
                  name="state"
                  type="text"
                  value={state}
                  className="arimo-input-label"
                  label="State/Province"
                  sx={style}
                  onChange={onChangeState}
                  required
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
          </Grid>

          <Grid
            item
            xs={12}
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
              className="arimo-input-label"
              label="Profession"
              sx={style}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <MuiDropDown
              name="accountType"
              value={accountType}
              onChange={onChangeAccountType}
              options={["User", "Premium", "Vendor"]}
              label="Account Type"
              className="arimo-input-label"
              sx={style}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <MuiTextField
              name="monthlySalary"
              type="text"
              value={monthlySalary}
              className="arimo-input-label"
              label="Monthly Salary"
              placeholder={"50,000"}
              sx={style}
              onChange={onChangeMonthlySalary}
              required
            />
          </Grid>
          <Grid
            item
            xs={12}
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
          </Grid>
        </Grid>
      );
    default:
      return null;
  }
};

export default StepForm;
