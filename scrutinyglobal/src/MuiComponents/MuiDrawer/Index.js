import React from "react";
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
import {
  Avatar,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import CollapseButton from "./SidebarButtons/CollapseButton";
import LinkButton from "./SidebarButtons/LinkButton";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleDrawerClient,
  toggleDrawerVendor,
  toggleDrawerSales,
  selectDrawerOpenVendor,
  selectDrawerOpenClient,
  selectDrawerOpenSalesModule,
} from "../../Store/Slice/drawerSlice";
import "./Style.css";

const drawerWidth = 240;

export default function MuiDrawer({ active, mobileOpen, handleDrawerToggle }) {
  const openClient = useSelector(selectDrawerOpenClient);
  const openVendor = useSelector(selectDrawerOpenVendor);
  const openSalesModule = useSelector(selectDrawerOpenSalesModule);
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClientClick = () => {
    dispatch(toggleDrawerClient());
  };

  const handleVendorClick = () => {
    dispatch(toggleDrawerVendor());
  };

  const handleSalesClick = () => {
    dispatch(toggleDrawerSales());
  };

  const userDetails = {
    name: "John Doe",
    email: "johndoe@example.com",
    avatar: dummy,
  };
  const reduxData = useSelector((state) => state.loginDetails);

  const drawerContent = (
    <div>
      <Grid item container className="userDetails">
        <Grid item>
          <Link to="/dashboard">
            <img alt="SG logo" src={logo} className="avatarLogo" />
          </Link>
        </Grid>
        <Grid item container alignItems="center">
          <Grid item className="userDetails-photo">
            <Avatar alt={userDetails.name} src={userDetails.avatar} />
          </Grid>
          <Grid item>
            <Typography component="div" className="userDetails-text">
              {userDetails.name}
            </Typography>
            <Typography variant="body2" className="userDetails-text">
              {userDetails.email}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Toolbar />
      <List className="list-grid">
        {(reduxData.roles.includes("dashboard") ||
          reduxData.roles.includes("ALL")) && (
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
        )}
        {(reduxData.roles.includes("client") ||
          reduxData.roles.includes("ALL")) && (
          <CollapseButton
            text="Client"
            icon={<FeedOutlinedIcon />}
            open={openClient}
            handleClick={handleClientClick}
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
                  color={
                    active === "CLIENTS" ||
                    active === "CLIENT DETAILS" ||
                    active === "ADD PROJECT"
                      ? "primary"
                      : "action"
                  }
                />
              }
              link="clients"
              active={
                active === "CLIENTS" ||
                active === "CLIENT DETAILS" ||
                active === "ADD PROJECT"
              }
            />
          </CollapseButton>
        )}
        {(reduxData.roles.includes("project") ||
          reduxData.roles.includes("ALL")) && (
          <LinkButton
            text="Projects"
            icon={
              <PeopleAltOutlinedIcon
                color={
                  active === "PROJECT DETAILS" ||
                  active === "PROJECTS" ||
                  active === "ASSIGN VENDOR"
                    ? "primary"
                    : "action"
                }
              />
            }
            link="projects"
            active={
              active === "PROJECTS" ||
              active === "PROJECT DETAILS" ||
              active === "ASSIGN VENDOR"
            }
          />
        )}
        {(reduxData.roles.includes("vendor") ||
          reduxData.roles.includes("ALL")) && (
          <CollapseButton
            text="Vendors"
            icon={<PeopleAltOutlinedIcon />}
            open={openVendor}
            handleClick={handleVendorClick}
          >
            <LinkButton
              text="Add Vendor"
              icon={
                <AddIcon
                  color={active === "ADD VENDOR" ? "primary" : "action"}
                />
              }
              link="add-vendor"
              active={active === "ADD VENDOR"}
            />
            <LinkButton
              text="Vendors"
              icon={
                <PeopleAltOutlinedIcon
                  color={
                    active === "VENDORS" || active === "VENDOR DETAILS"
                      ? "primary"
                      : "action"
                  }
                />
              }
              link="vendors"
              active={active === "VENDORS" || active === "VENDOR DETAILS"}
            />
          </CollapseButton>
        )}
        {(reduxData.roles.includes("sales_module") ||
          reduxData.roles.includes("ALL")) && (
          <CollapseButton
            // <LinkButton
            text="Sales Module"
            icon={<FeedOutlinedIcon />}
            open={openSalesModule}
            handleClick={handleSalesClick}
          >
            <LinkButton
              text="Invoice"
              icon={
                <AddIcon
                  color={active === "SALES MODULE" ? "primary" : "action"}
                />
              }
              link="invoice"
              active={active === "SALES MODULE"}
            />
            <LinkButton
              text="PO"
              icon={
                <PeopleAltOutlinedIcon
                  color={active === "PO" ? "primary" : "action"}
                />
              }
              link="po"
              active={active === "PO"}
            />
          </CollapseButton>
        )}
      </List>
      <Divider />
      <List>
        <LinkButton
          text="Profile"
          icon={
            <PeopleAltOutlinedIcon
              color={active === "USER PROFILE" ? "primary" : "action"}
            />
          }
          link="profile"
          active={active === "USER PROFILE"}
        />
        <LinkButton
          text="Settings"
          icon={<PeopleAltOutlinedIcon color="action" />}
        />
        <LinkButton
          link="login"
          text="Logout"
          icon={<PeopleAltOutlinedIcon color="error" />}
          className="logout"
        />
      </List>
    </div>
  );

  return (
    <Grid container className="sidebar-grid">
      <CssBaseline />
      {isMobile ? (
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawerContent}
        </Drawer>
      ) : (
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "17%",
            },
          }}
          open
        >
          {drawerContent}
        </Drawer>
      )}
    </Grid>
  );
}
