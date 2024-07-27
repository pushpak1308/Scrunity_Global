import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./Style.css";
import { MuiTextField } from "../../../MuiComponents/MuiTextField/Index";
import {
  Button,
  Grid,
  IconButton,
  Modal,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const AddProjectModal = ({
  open,
  handleClose,
  country,
  formData,
  onFormChange,
  onSave,
}) => {
  const handleChange = (field) => (event) => {
    onFormChange(field, event.target.value);
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Modal open={open}>
      <Grid container className="add-project-modal-container">
        <Grid item container>
          <Grid item xs={12} className="modal-close">
            <IconButton onClick={handleClose}>
              <CloseIcon fontSize="large" />
            </IconButton>
          </Grid>
          <Grid container justifyContent="center" item md={6} xs={12}>
            <Grid item className={"add-project-modal-heading"}>
              Sampling Requirements
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          direction={isMobile ? "column" : "row"}
          justifyContent={"space-between"}
        >
          <Grid item xs={12} md={5.5}>
            <Grid container direction="column" spacing={3}>
              <Grid item>
                <MuiTextField
                  type="text"
                  value={country}
                  label="Country"
                  disabled={true}
                  onChange={handleChange("country")}
                  className="forAddProject"
                />
              </Grid>
              <Grid item>
                <MuiTextField
                  type="text"
                  value={formData.IR}
                  label="IR%"
                  onChange={handleChange("IR")}
                  className="forAddProject"
                />
              </Grid>
              <Grid item>
                <MuiTextField
                  type="text"
                  value={formData.LOI}
                  onChange={handleChange("LOI")}
                  label="LOI(min)"
                  className="forAddProject"
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={5.5}>
            <Grid container direction="column" spacing={3}>
              <Grid item>
                <MuiTextField
                  type="text"
                  label="Completes Needed"
                  value={formData.completesNeeded}
                  onChange={handleChange("completesNeeded")}
                  className="forAddProject"
                />
              </Grid>
              <Grid item>
                <MuiTextField
                  type="text"
                  value={formData.completesFeasible}
                  onChange={handleChange("completesFeasible")}
                  label="Completes Feasible"
                  className="forAddProject"
                />
              </Grid>
              <Grid item>
                <MuiTextField
                  type="text"
                  value={formData.costPerSurvey}
                  onChange={handleChange("costPerSurvey")}
                  label="Cost/Survey"
                  className="forAddProject"
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={8} paddingTop={3}>
            <MuiTextField
              type="text"
              value={formData.surveyLink}
              onChange={handleChange("surveyLink")}
              label="Survey Link"
              className="forAddProject"
            />
          </Grid>

          {/* <Grid item md={4}>
            <img src={modalImage} />
          </Grid> */}

          <Grid item xs={12} md={12}>
            <Button
              variant="contained"
              className="modal-button-save"
              onClick={onSave}
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Modal>
  );
};

export default AddProjectModal;
