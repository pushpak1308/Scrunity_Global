import React, { useState } from "react";
// import Navbar from "./Parts/Navbar";
import {
  Box,
  Button,
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import logo from "../../logo_sg.png";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-scroll";
import MuiContainedButton from "../../MuiComponents/MuiContainedButton/Index";

const drawerWidth = 240;
const navItems = ["Home", "About", "Services", "Contact", "Login", "Panel"];

const Landing = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Avatar alt="SG logo" src={logo} />
        SG
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Grid className="navGrid">
      {/* ----------------------------------- */}
      <AppBar
        component="nav"
        className="navBar"
        sx={{
          mb: 10,
          px: 10,
        }}
      >
        <Toolbar>
          <Avatar alt="SG logo" src={logo} />
          <Typography
            variant="h6"
            component="div"
            className="navLogo-text"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            SG
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <ul className="navList">
              {navItems.map((item) => (
                <li key={item}>
                  {item === "Panel" ? (
                    <MuiContainedButton type={"button"} buttonText={item} />
                  ) : (
                    <Button key={item} className="navButtons">
                      <Link
                        activeClass="active"
                        smooth
                        spy
                        to={item.toLowerCase()}
                      >
                        {item}
                      </Link>
                    </Button>
                  )}
                </li>
              ))}
            </ul>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      {/* ------------------------------------ */}
      <Box component="main" sx={{ pt: 10 }}>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Services />
        </section>
      </Box>
    </Grid>
  );
};

export default Landing;
