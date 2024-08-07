import { Checkbox, Grid, IconButton, Modal, Typography } from "@mui/material";
import React from "react";
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
        <Grid item container sx={{ m: 1 }}>
          <Grid item xs={12} className="modal-close">
            <IconButton onClick={handleClose}>
              <CloseIcon fontSize="large" />
            </IconButton>
          </Grid>
          <Grid container justifyContent="center" item md={12}>
            <Typography component="div">User Role Access</Typography>
          </Grid>
        </Grid>

        <Grid item container>
          <Grid item>
            <Typography>User Name</Typography>
          </Grid>
          <Grid item>
            <Typography>{selectedUser?.username}</Typography>
          </Grid>
        </Grid>
        {roles.map((role) => (
          <Grid item container key={role} alignItems="center">
            <Grid item>
              <Typography>{role}</Typography>
            </Grid>
            <Grid item>
              <Checkbox
                checked={!!userRoles[role]}
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
    </Modal>
  );
};

export default UserRoleAccess;
