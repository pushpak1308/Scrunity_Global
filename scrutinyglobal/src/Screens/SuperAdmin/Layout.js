import { Grid } from "@mui/material";
import React from "react";
import Sidebar from "../../Components/Sidebar/Index";
import MuiAdminNavbar from "../../MuiComponents/MuiNavbar/MuiAdminNavbar";

const Layout = ({ content, navbarHeading }) => {
  return (
    <Grid container>
      <Grid item md={2}>
        <Sidebar />
      </Grid>
      <Grid item container md={10}>
        <Grid item xs={12}>
          <MuiAdminNavbar navbarHeading={navbarHeading} />
        </Grid>
        <Grid item xs={12}>
          {content}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Layout;
