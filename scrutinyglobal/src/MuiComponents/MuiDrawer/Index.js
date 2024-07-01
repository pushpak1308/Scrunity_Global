import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import dummy from "../../Images/dummy1.png";
import logo from "../../logo_sg.png";
import {
  Add as AddIcon,
  FeedOutlined as FeedOutlinedIcon,
  GridViewOutlined as GridViewOutlinedIcon,
  PeopleAltOutlined as PeopleAltOutlinedIcon,
} from "@mui/icons-material";
import { Avatar, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./Style.css";
import CollapseButton from "./SidebarButtons/CollapseButton";
import LinkButton from "./SidebarButtons/LinkButton";
import { useSelector, useDispatch } from "react-redux";
import { toggleDrawer, selectDrawerOpen } from "../../Store/Slice/drawerSlice";
const drawerWidth = 240;

export default function MuiDrawer({ active }) {
  const openClient = useSelector(selectDrawerOpen);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleDrawer());
  };

  const userDetails = {
    name: "John Doe",
    email: "johndoe@example.com",
    avatar: dummy,
  };

  return (
    <Grid container className="sidebar-grid">
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Grid item container className="userDetails">
          <Grid item>
            <Link to="/dashboard">
              <img alt="SG logo" src={logo} className="avatarLogo" />
            </Link>
          </Grid>
          <Grid item container alignItems="center">
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
        </Grid>
        <Toolbar />
        {/* <Divider /> */}
        <List className="list-grid">
          <LinkButton
            text="Dashboard"
            icon={
              <GridViewOutlinedIcon
                color={active === "DASHBOARD" ? "primary" : "action"}
              />
            }
            link="dashboard"
            active={active === "DASHBOARD"}
          />
          <CollapseButton
            text="Client"
            icon={<FeedOutlinedIcon />}
            open={openClient}
            handleClick={handleClick}
          >
            <LinkButton
              text="Add Client"
              icon={
                <AddIcon
                  color={active === "ADD CLIENT" ? "primary" : "action"}
                />
              }
              link="add-client"
              active={active === "ADD CLIENT"}
            />
            <LinkButton
              text="Clients"
              icon={
                <PeopleAltOutlinedIcon
                  color={active === "CLIENTS" ? "primary" : "action"}
                />
              }
              link="clients"
              active={active === "CLIENTS"}
            />
          </CollapseButton>
          <LinkButton
            text="Projects"
            icon={
              <PeopleAltOutlinedIcon
                color={active === "PROJECTS" ? "primary" : "action"}
              />
            }
            active={active === "PROJECTS"}
          />
          <LinkButton
            text="Vendors"
            icon={
              <PeopleAltOutlinedIcon
                color={active === "VENDORS" ? "primary" : "action"}
              />
            }
            active={active === "VENDORS"}
          />
          <LinkButton
            text="Sales Module"
            icon={
              <PeopleAltOutlinedIcon
                color={active === "SALES MODULE" ? "primary" : "action"}
              />
            }
            link="invoice"
            active={active === "SALES MODULE"}
          />
        </List>
        <Divider />
        <List>
          <LinkButton
            text="Profile"
            icon={<PeopleAltOutlinedIcon color="action" />}
          />
          <LinkButton
            text="Settings"
            icon={<PeopleAltOutlinedIcon color="action" />}
          />
          <LinkButton
            text="Logout"
            icon={<PeopleAltOutlinedIcon color="error" />}
            className="logout"
          />
        </List>
      </Drawer>
    </Grid>
  );
}
