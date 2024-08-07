import { Checkbox, Grid, IconButton, Modal, Typography } from "@mui/material";
import React from "react";
import "./Style.css";
import "../SuccesErrorModal/Style.css";
import CloseIcon from "@mui/icons-material/Close";
import CustomContainedButton from "../../../MuiComponents/MuiContainedButton/Index";

const UserRoleAccess = ({
  show,
  handleClose,
  selectedUser,
  userRoles,
  handleCheckboxChange,
  handleAssign,
}) => {
  const roles = ["Client", "Projects", "Vendor", "Sales Module"];

  return (
    <Modal open={show}>
      <Grid container className="modal-container-successError">
        <Grid item container>
          <Grid item xs={12} className="modal-close">
            <IconButton onClick={handleClose}>
              <CloseIcon fontSize="large" />
            </IconButton>
          </Grid>
          <Grid item md={12}>
            <Typography component="div" className="user-role-access-heading">
              User Role Access
            </Typography>
          </Grid>
        </Grid>
        <Grid item container className="modal-padding">
          <Grid item container justifyContent={"space-between"}>
            <Grid item>
              <Typography className="userName" gutterBottom>
                User Name
              </Typography>
            </Grid>
            <Grid item>
              <Typography className="userName-value" gutterBottom>
                {selectedUser?.username}
              </Typography>
            </Grid>
          </Grid>
          {roles.map((role) => (
            <Grid
              item
              container
              key={role}
              alignItems="center"
              justifyContent={"space-between"}
            >
              <Grid item xs={8}>
                <Typography className="role-assigned">{role}</Typography>
              </Grid>
              <Grid item xs={4}>
                <Checkbox
                  checked={userRoles[role]}
                  onChange={() => handleCheckboxChange(role)}
                />
              </Grid>
            </Grid>
          ))}

          <Grid item xs={12} className="modal-item modal-item2" sx={{ my: 3 }}>
            <CustomContainedButton
              type="button"
              onClickFunction={handleAssign}
              buttonText={"Assign"}
              width={true}
            />
          </Grid>
        </Grid>
      </Grid>
    </Modal>
  );
};

export default UserRoleAccess;
