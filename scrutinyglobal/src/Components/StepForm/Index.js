import React, { useState } from "react";
import { Grid } from "@mui/material";
import CustomContainedButton from "../../MuiComponents/MuiContainedButton/Index";

const StepForm = ({ steps, onSave }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSave = () => {
    onSave(formData);
  };

  const isLastStep = currentStep === steps.length - 1;

  return (
    <Grid container spacing={2}>
      {steps[currentStep].map((FieldComponent, index) => (
        <Grid item xs={12} key={index}>
          {FieldComponent}
        </Grid>
      ))}
      <Grid
        item
        xs={12}
        display="flex"
        justifyContent={currentStep > 0 ? "space-between" : "right"}
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
