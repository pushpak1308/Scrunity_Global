import React from "react";
import {
  AppBar,
  Toolbar,
  ButtonGroup,
  Button,
  Avatar,
  Grid,
  Typography,
} from "@mui/material";
import dummy from "../../Images/dummy1.png";
import logo from "../../logo_sg.png";
import "./Style.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  const userDetails = {
    name: "John Doe",
    email: "johndoe@example.com",
    avatar: dummy,
  };

  return (
    <AppBar position="static" className="adminNavbar">
      <Toolbar>
        <Link to="/dashboard">
          <Avatar alt="SG logo" src={logo} />
        </Link>
        <ButtonGroup
          variant="text"
          aria-label="Basic button group"
          sx={{
            "& .MuiButton-root": {
              color: "white",
              borderColor: "white",
            },
          }}
        >
          <Link to="/invoice">
            <Button className="buttons">Sales Module</Button>
          </Link>
          <Button className="buttons">Add Project</Button>
          <Button className="buttons">View Vendor</Button>
        </ButtonGroup>
        <Grid
          container
          sx={{ flexGrow: 1 }}
          justifyContent="flex-end"
          alignItems="center"
        >
          <Grid item>
            <Typography
              variant="h6"
              component="div"
              sx={{ textAlign: "center", fontSize: "14px" }}
            >
              {userDetails.name}
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={{ textAlign: "center", fontSize: "14px" }}
            >
              {userDetails.email}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              alt={userDetails.name}
              src={userDetails.avatar}
              sx={{ marginLeft: 2 }}
            />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
