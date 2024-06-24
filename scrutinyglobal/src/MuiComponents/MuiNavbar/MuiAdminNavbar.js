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

const NavBar = () => {
  return (
    <AppBar position="static" className="adminNavbar">
      <Toolbar>
        <Grid item direction="column">
          <Typography component="div" className="navbarText-1">
            DASHBOARD
          </Typography>
          <Typography variant="body2" className="navbarText-2" component="div">
            Super Admin
          </Typography>
        </Grid>
        <Grid
          item
          container
          sx={{ flexGrow: 1 }}
          justifyContent="flex-end"
          alignItems="center"
        >
          <TextField
            className="search-input"
            placeholder="Search"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              classes: { notchedOutline: "no-border" },
            }}
          />
          <NotificationsNoneOutlinedIcon color="disabled" fontSize="large" />
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
