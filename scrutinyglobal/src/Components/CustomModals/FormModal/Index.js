import React from "react";
import { Typography, Modal, IconButton, Grid, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { MuiDropDown } from "../../../MuiComponents/MuiDropDown/Index";
import { MuiTextField } from "../../../MuiComponents/MuiTextField/Index";
import "./Style.css";
import MuiContainedButton from "../../../MuiComponents/MuiContainedButton/Index";

const FormModal = ({
  show,
  handleClose,
  handleSubmit,
  clientOptions,
  projectOptions,
  formData,
  onChangeClient,
  onChangeProject,
  onChangeDate,
  onChangeCountry,
  onChangeCurrency,
}) => {
  return (
    <Modal open={show}>
      <Grid container className="modal-container">
        <Grid item container>
          <Grid item xs={12} className="modal-close">
            <IconButton onClick={handleClose}>
              <CloseIcon fontSize="large" />
            </IconButton>
          </Grid>
        </Grid>
        <Grid item xs={12} className="modal-item form-content">
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <MuiDropDown
                  value={formData.project}
                  onChange={onChangeProject}
                  options={projectOptions}
                  label="Project"
                  className="forAddClient"
                />
              </Grid>
              <Grid item xs={12}>
                <MuiDropDown
                  value={formData.client}
                  onChange={onChangeClient}
                  options={clientOptions}
                  label="Client"
                  className="forAddClient"
                />
              </Grid>
              <Grid item xs={12}>
                <MuiTextField
                  type="date"
                  value={formData.date}
                  label="Select Date"
                  placeholder="01-02-2001"
                  onChange={onChangeDate}
                  className="forAddClient"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <MuiTextField
                  type="text"
                  value={formData.country}
                  label="Country"
                  onChange={onChangeCountry}
                  className="forAddClient"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <MuiTextField
                  type="text"
                  value={formData.currency}
                  label="Currency"
                  onChange={onChangeCurrency}
                  className="forAddClient"
                />
              </Grid>
              <Grid
                item
                xs={12}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <MuiContainedButton
                  type="submit"
                  buttonText="Generate Invoice"
                  width={true}
                  onClickFunction={handleSubmit}
                />
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Modal>
  );
};

export default FormModal;
