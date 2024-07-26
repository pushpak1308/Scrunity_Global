import React, { useRef, useState } from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  TextField,
  InputAdornment,
  Paper,
  IconButton,
} from "@mui/material";
import logo from "../../logo_sg.png";
import SearchIcon from "@mui/icons-material/Search";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { useTheme, useMediaQuery } from "@mui/material";
import "./Style.css";
import { Link } from "react-router-dom";

const NavBar = ({ navbarHeading, handleDrawerToggle }) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const containerRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleSearchToggle = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <>
      <AppBar position="static" className="adminNavbar">
        <Toolbar>
          <Grid container alignItems="center">
            {isMobile && (
              <Grid item xs={4}>
                <Link to="/dashboard">
                  <img alt="SG logo" src={logo} className="navbarLogo" />
                </Link>
              </Grid>
            )}
            <Grid
              item
              xs={2}
              container
              alignItems="center"
              justifyContent={"flex-start"}
              direction={"column"}
            >
              <Paper
                elevation={0}
                className={isMobile ? "navbarText-1-mobile" : "navbarText-1"}
              >
                {navbarHeading}
              </Paper>
              <Paper
                elevation={0}
                className={isMobile ? "navbarText-2-mobile" : "navbarText-2"}
              >
                Super Admin
              </Paper>
            </Grid>
          </Grid>

          {isMobile ? (
            <Grid container justifyContent="flex-end" alignItems="center">
              <IconButton onClick={handleSearchToggle}>
                <NotificationsNoneOutlinedIcon color="disabled" />
              </IconButton>
              <IconButton onClick={handleDrawerToggle}>
                <GridViewOutlinedIcon />
              </IconButton>
            </Grid>
          ) : (
            <Grid
              container
              justifyContent="flex-end"
              alignItems="center"
              spacing={2}
            >
              <Grid item>
                <TextField
                  className="search-input"
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
                />
              </Grid>
              <Grid item>
                <NotificationsNoneOutlinedIcon color="disabled" />
              </Grid>
            </Grid>
          )}
        </Toolbar>
      </AppBar>
      {/* {searchOpen && (
        <Slide in={searchOpen} container={containerRef.current}>
          <TextField
            className="search-input-mobile"
            placeholder="Search"
            variant="outlined"
            fullWidth
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Slide>
      )} */}
    </>
  );
};

export default NavBar;
