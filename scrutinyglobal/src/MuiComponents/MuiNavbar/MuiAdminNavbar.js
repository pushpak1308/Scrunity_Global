import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  TextField,
  InputAdornment,
} from "@mui/material";
import "./Style.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

const NavBar = ({ navbarHeading }) => {
  return (
    <AppBar position="static" className="adminNavbar">
      <Toolbar>
        <Grid item direction="column">
          <Typography className="navbarText-1">{navbarHeading}</Typography>
          <Typography variant="body2" className="navbarText-2" component="div">
            Super Admin
          </Typography>
        </Grid>
        <Grid
          item
          container
          justifyContent="flex-end"
          alignItems="center"
          spacing={2}
        >
          <Grid item>
            <TextField
              placeholder="Search"
              variant="outlined"
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              className="search-input"
            />
          </Grid>
          <Grid item>
            <NotificationsNoneOutlinedIcon color="disabled" />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
