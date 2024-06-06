import React from "react";
import { Grid, Button, Box, Typography } from "@mui/material";
import { CustomTextField } from "../../MuiComponents/CustomTextField";
import { CustomDropdown } from "../../MuiComponents/CustomDropDown";
import CustomContainedButton from "../../MuiComponents/CustomContainedButton";

const StepForm = ({
  formStep,
  formData,
  onChangeHandlers,
  incrementFormStep,
  decrementFormStep,
  setShow
}) => {

  const { name, number, username, password, confirmPassword, birthdate, address, city, state, zipcode, country, educationLevel, accountType, monthlySalary } = formData;
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
    onChangeMonthlySalary
  } = onChangeHandlers;

  const style = {
    borderRadius: "10px",
    boxShadow: "3px 3px 6px 0px rgba(12, 218, 255, 0.5)",
    "&:hover": {
      boxShadow: "4px 4px 9px 0px rgba(25, 118, 210, 0.4)",
    },
    border: "1px solid white",
    background:
      "linear-gradient(274deg, rgba(83,89,231,1) 0%, rgba(12,218,255,1) 100%)",
    fontSize: "16px"
  }

  switch (formStep) {
    case 0:
      return (
        <>
          <CustomTextField
            name="name"
            type="text"
            value={name}
            className="arimo-input-label"
            label="Name"
            sx={{ mt: 1, fontWeight: 550, fontSize: "2.5vh" }}
            onChange={onChangeName}
            required
          />
          <CustomTextField
            name="number"
            type="text"
            value={number}
            className="arimo-input-label"
            label="Number"
            sx={{ mt: 1, fontWeight: 550, fontSize: "2.5vh" }}
            onChange={onChangeNumber}
            required
          />
          <CustomTextField
            name="email"
            type="text"
            value={username}
            className="arimo-input-label"
            label="Email"
            sx={{ mt: 1, fontWeight: 550, fontSize: "2.5vh" }}
            onChange={onChangeUsername}
            required
          />
          <Grid container spacing={5}>
            <Grid item xs={12} md={6}>
              <CustomTextField
                name="password"
                type="password"
                value={password}
                className="arimo-input-label"
                label="Password"
                sx={{ mt: 1, fontWeight: 550, fontSize: "2.5vh" }}
                onChange={onChangePassword}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomTextField
                name="confirmPassword"
                type="password"
                value={confirmPassword}
                className="arimo-input-label"
                label="Confirm Password"
                sx={{ mt: 1, fontWeight: 550, fontSize: "2.5vh" }}
                onChange={onChangeConfirmPassword}
                required
              />
            </Grid>
          </Grid>
          <Box display="flex" justifyContent="right" alignItems="center">
            <CustomContainedButton type="button" onClickFunction={incrementFormStep} buttonText={"Next"} />
          </Box>
        </>
      );
    case 1:
      return (
        <>
          <CustomTextField
            name="birthdate"
            type="date"
            value={birthdate}
            className="arimo-input-label"
            label="Birth Date"
            sx={{ mt: 1, fontWeight: 550, fontSize: "2.5vh" }}
            onChange={onChangeBirthdate}
            required
          />
          <CustomTextField
            name="address"
            type="text"
            value={address}
            className="arimo-input-label"
            label="Address"
            sx={{ mt: 1, fontWeight: 550, fontSize: "2.5vh" }}
            onChange={onChangeAddress}
            required
          />

          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <CustomDropdown
                name="city"
                value={city}
                onChange={onChangeCity}
                options={["New York", "Los Angeles", "Chicago"]} // Example options
                label="City"
                className="arimo-input-label"
                sx={{ mt: 1, fontWeight: 550, fontSize: "2.5vh" }}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomDropdown
                name="state"
                value={state}
                onChange={onChangeState}
                options={["California", "New York", "Texas"]} // Example options
                label="State/Province"
                className="arimo-input-label"
                sx={{ mt: 1, fontWeight: 550, fontSize: "2.5vh" }}
                required
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <CustomTextField
                name="zipcode"
                type="text"
                value={zipcode}
                className="arimo-input-label"
                label="Zip Code"
                sx={{ mt: 1, fontWeight: 550, fontSize: "2.5vh" }}
                onChange={onChangeZipcode}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomDropdown
                name="country"
                value={country}
                onChange={onChangeCountry}
                options={["USA", "Canada", "UK"]} // Example options
                label="Country"
                className="arimo-input-label"
                sx={{ mt: 1, fontWeight: 550, fontSize: "2.5vh" }}
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
            <CustomContainedButton type="button" onClickFunction={decrementFormStep} buttonText={"Previous"} />
            <CustomContainedButton type="button" onClickFunction={incrementFormStep} buttonText={"Next"} />
          </Box>
        </>
      );
    case 2:
      return (
        <>
          <CustomDropdown
            name="educationLevel"
            value={educationLevel}
            onChange={onChangeEducationLevel}
            options={["B.Tech", "BCA", "Law"]} // Example options
            label="Education Level"
            className="arimo-input-label"
            sx={{ mt: 1, fontWeight: 550, fontSize: "2.5vh" }}
            required
          />
          <CustomTextField
            name="accountType"
            type="text"
            value={accountType}
            className="arimo-input-label"
            label="Account Type"
            sx={{ mt: 1, fontWeight: 550, fontSize: "2.5vh" }}
            onChange={onChangeAccountType}
            required
          />
          <CustomTextField
            name="monthlySalary"
            type="text"
            value={monthlySalary}
            className="arimo-input-label"
            label="Monthly Salary"
            sx={{ mt: 1, fontWeight: 550, fontSize: "2.5vh" }}
            onChange={onChangeMonthlySalary}
            required
          />
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt={2}
          >
            <CustomContainedButton type="button" onClickFunction={decrementFormStep} buttonText={"Previous"} />
            <CustomContainedButton type="button" onClickFunction={() => setShow(true)} buttonText={"Save"} />
          </Box>

        </>
      );
    default:
      return null;
  }
};

export default StepForm;