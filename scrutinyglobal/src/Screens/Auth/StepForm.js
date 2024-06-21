import React from "react";
import { Grid } from "@mui/material";
import { MuiTextField } from "../../MuiComponents/MuiTextField/Index";
import { MuiDropDown } from "../../MuiComponents/MuiDropDown/Index";
import CustomContainedButton from "../../MuiComponents/MuiContainedButton/Index";

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
    experience,
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
    onChangeExperience,
    onChangeAccountType,
    onChangeMonthlySalary,
  } = onChangeHandlers;

  const [countries,setCountries] = useState([]);

  

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
              name="birthdate"
              type="date"
              value={birthdate}
              label="Birth Date"
              onChange={onChangeBirthdate}
              className="forRegister"
            />
          </Grid>
<<<<<<< Updated upstream
=======
          <Grid item xs={12}>
            <MuiTextField
              name="address"
              type="text"
              value={address}
              label="Address"
              onChange={onChangeAddress}
              
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
                  
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <MuiTextField
                  name="state"
                  type="text"
                  value={state}
                  label="State/Province"
                  onChange={onChangeState}
                  
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
                
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <MuiDropDown
                  name="country"
                  value={country}
                  onChange={onChangeCountry}
                  options={countries} // Example options
                  label="Country"
                  className="arimo-input-label"
                />
              </Grid>
            </Grid>
          </Grid>
>>>>>>> Stashed changes

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
    case 3:
      return (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <MuiDropDown
              name="profession"
              value={profession}
              onChange={onChangeProfession}
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
