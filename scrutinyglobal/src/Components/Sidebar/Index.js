import { Avatar, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import logo from "../../logo_sg.png";
import dummy from "../../Images/dummy1.png";
import { Link } from "react-router-dom";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import "./Style.css";

const Sidebar = () => {
  const userDetails = {
    name: "John Doe",
    email: "johndoe@example.com",
    avatar: dummy,
  };

  return (
    <Grid
      container
      className="sidebar-grid"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <Link to="/dashboard">
          <Avatar alt="SG logo" src={logo} className="avatarLogo" />
        </Link>
      </Grid>
      <Grid item container alignItems="center" xs={12} className="user-details">
        <Grid item>
          <Avatar alt={userDetails.name} src={userDetails.avatar} />
        </Grid>
        <Grid item direction="column">
          <Typography component="div">{userDetails.name}</Typography>
          <Typography variant="body2" component="div">
            {userDetails.email}
          </Typography>
        </Grid>
      </Grid>
      <Grid item className="sidebar-button" xs={12}>
        <Grid container alignItems="center">
          <Grid item>
            <GridViewOutlinedIcon color="action" />
          </Grid>
          <Grid item>
            <Typography className="sidebar-text" component="div">
              Dashboard
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item className="sidebar-button" xs={12}>
        <Grid container alignItems="center">
          <Grid item>
            <FeedOutlinedIcon color="action" />
          </Grid>
          <Grid item>
            <Typography className="sidebar-text" component="div">
              Clients
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item className="sidebar-button" xs={12}>
        <Grid container alignItems="center">
          <Grid item>
            <PeopleAltOutlinedIcon color="action" />
          </Grid>
          <Grid item>
            <Typography className="sidebar-text" component="div">
              Projects
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item className="sidebar-button" xs={12}>
        <Grid container alignItems="center">
          <Grid item>
            <PeopleAltOutlinedIcon color="action" />
          </Grid>
          <Grid item>
            <Typography className="sidebar-text" component="div">
              Vendors
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item className="sidebar-button" xs={12}>
        <Grid container alignItems="center">
          <Grid item>
            <PeopleAltOutlinedIcon color="action" />
          </Grid>
          <Grid item>
            <Typography className="sidebar-text" component="div">
              Sales Module
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Divider color="primary" />
      <Grid item className="sidebar-button" xs={12}>
        <Grid container alignItems="center">
          <Grid item>
            <PeopleAltOutlinedIcon color="action" />
          </Grid>
          <Grid item>
            <Typography className="sidebar-text" component="div">
              Profile
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item className="sidebar-button" xs={12}>
        <Grid container alignItems="center">
          <Grid item>
            <PeopleAltOutlinedIcon color="action" />
          </Grid>
          <Grid item>
            <Typography className="sidebar-text" component="div">
              Settings
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item className="sidebar-button" xs={12}>
        <Grid container alignItems="center">
          <Grid item>
            <PeopleAltOutlinedIcon color="action" />
          </Grid>
          <Grid item>
            <Typography className="logout" component="div">
              Log Out
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Sidebar;
