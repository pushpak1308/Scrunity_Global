import React from "react";
import { Avatar, Divider, Grid, Typography } from "@mui/material";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { Link } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import logo from "../../logo_sg.png";
import dummy from "../../Images/dummy1.png";
import {
  Add as AddIcon,
  FeedOutlined as FeedOutlinedIcon,
  GridViewOutlined as GridViewOutlinedIcon,
  PeopleAltOutlined as PeopleAltOutlinedIcon,
} from "@mui/icons-material";
import "./Style.css";

const Sidebar = () => {
  const userDetails = {
    name: "John Doe",
    email: "johndoe@example.com",
    avatar: dummy,
  };

  const SidebarButton = ({
    icon,
    text,
    link,
    className = "sidebar-button",
  }) => (
    <Grid item className={className} xs={12}>
      <Grid container alignItems="center" spacing={1}>
        <Grid item>{icon}</Grid>
        <Grid item>
          {link ? (
            <Link to={link}>
              <Typography className="sidebar-text" component="div">
                {text}
              </Typography>
            </Link>
          ) : (
            <Typography className="sidebar-text" component="div">
              {text}
            </Typography>
          )}
        </Grid>
      </Grid>
    </Grid>
  );

  const SidebarAccordion = ({ summaryIcon, summaryText, details }) => (
    <Grid item xs={12}>
      <Accordion elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${summaryText.toLowerCase()}-content`}
          id={`${summaryText.toLowerCase()}-header`}
        >
          <Grid container spacing={1}>
            <Grid item>{summaryIcon}</Grid>
            <Grid item>
              <Typography className="sidebar-text" component="div">
                {summaryText}
              </Typography>
            </Grid>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>{details}</AccordionDetails>
      </Accordion>
    </Grid>
  );

  const clientIcons = (
    <Grid container>
      <SidebarButton icon={<AddIcon />} text="Add Client" link="/add-client" />
      <SidebarButton
        icon={<PeopleAltOutlinedIcon />}
        text="Client"
        link="/clients"
      />
    </Grid>
  );

  const vendorIcons = (
    <Grid container>
      <SidebarButton icon={<AddIcon />} text="Add Vendor" link="/add-vendor" />
      <SidebarButton
        icon={<PeopleAltOutlinedIcon />}
        text="Vendor"
        link="/vendors"
      />
    </Grid>
  );

  return (
    <Grid
      container
      className="sidebar-grid"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <Link to="/dashboard" className="logo-grid">
          <img alt="SG logo" src={logo} className="avatarLogo" />
        </Link>
      </Grid>
      <Grid item container alignItems="center" xs={12}>
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
      <Grid container className="sidebar-button-grid">
        <Grid item container className="sidebar-section-1">
          <SidebarButton
            icon={<GridViewOutlinedIcon color="action" />}
            text="Dashboard"
            link="/"
          />
          <SidebarAccordion
            summaryIcon={<FeedOutlinedIcon color="action" />}
            summaryText="Clients"
            details={clientIcons}
          />
          <SidebarButton
            icon={<PeopleAltOutlinedIcon color="action" />}
            text="Projects"
            link="/projects"
          />
          <SidebarAccordion
            summaryIcon={<PeopleAltOutlinedIcon color="action" />}
            summaryText="Vendors"
            details={vendorIcons}
          />
          <SidebarButton
            icon={<PeopleAltOutlinedIcon color="action" />}
            text="Sales Module"
            link="/invoice"
          />
        </Grid>
        <Divider component="div" role="presentation" />
        <Grid item container className="sidebar-section-2">
          <SidebarButton
            icon={<PeopleAltOutlinedIcon color="action" />}
            text="Profile"
            link="/profile"
          />
          <SidebarButton
            icon={<PeopleAltOutlinedIcon color="action" />}
            text="Settings"
            link="/settings"
          />
          <SidebarButton
            icon={<PeopleAltOutlinedIcon color="error" />}
            text="Log Out"
            className="sidebar-button logout"
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Sidebar;
