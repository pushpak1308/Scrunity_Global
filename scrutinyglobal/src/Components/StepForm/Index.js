import React, { useState } from "react";
import { Grid } from "@mui/material";
import CustomContainedButton from "../../MuiComponents/MuiContainedButton/Index";
import { useDispatch, useSelector } from "react-redux";
import {
  setAddClientStep,
  selectAddClientStep,
  setAddVendorStep,
  selectAddVendorStep,
  setAddProjectStep,
  selectAddProjectStep,
} from "../../Store/Slice/stepSlice";

const StepForm = ({ steps, onSave, formType }) => {
  const dispatch = useDispatch();

  const currentStep = useSelector((state) => {
    switch (formType) {
      case "add-client":
        return selectAddClientStep(state);
      case "add-project":
        return selectAddProjectStep(state);
      default:
        return selectAddVendorStep(state);
    }
  });

  const [formData, setFormData] = useState({});

  const updateStep = (stepChange) => {
    switch (formType) {
      case "add-client":
        dispatch(setAddClientStep(currentStep + stepChange));
        break;
      case "add-project":
        dispatch(setAddProjectStep(currentStep + stepChange));
        break;
      default:
        dispatch(setAddVendorStep(currentStep + stepChange));
    }
  };

  const handleNext = () => updateStep(1);
  const handlePrev = () => updateStep(-1);
  const handleSave = () => onSave(formData);

  const isLastStep = currentStep === steps.length - 1;

  return (
    <Grid container spacing={2}>
      {steps[currentStep]?.map((FieldComponent, index) => (
        <Grid item xs={12} key={index}>
          {FieldComponent}
        </Grid>
      ))}
      <Grid
        item
        xs={12}
        display="flex"
        justifyContent={currentStep > 0 ? "space-between" : "flex-end"}
        alignItems="center"
      >
        {currentStep > 0 && (
          <CustomContainedButton
            type="button"
            onClickFunction={handlePrev}
            buttonText={"Previous"}
            variant="outlined"
            className="StepForm-previous"
          />
        )}
        {!isLastStep ? (
          <CustomContainedButton
            type="button"
            onClickFunction={handleNext}
            buttonText={"Next"}
            className="StepForm-next"
          />
        ) : (
          <CustomContainedButton
            type="button"
            onClickFunction={handleSave}
            buttonText={"Save"}
            className="StepForm-next"
          />
        )}
      </Grid>
    </Grid>
  );
};

export default StepForm;
