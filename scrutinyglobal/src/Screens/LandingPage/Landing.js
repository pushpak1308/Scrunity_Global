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
import "./Style.css";
import { Link as RouteLink } from "react-router-dom";
import MuiContainedButton from "../../MuiComponents/MuiContainedButton/Index";

const drawerWidth = 240;
const navItems = ["Home", "About", "Services", "Contact", "Login", "Panel"];

const Landing = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

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
              {item === "Panel" ? (
                <MuiContainedButton type={"button"} buttonText={item} />
              ) : item === "Login" ? (
                <RouteLink to={item.toLowerCase()}>{item}</RouteLink>
              ) : (
                <Link activeClass="active" smooth spy to={item.toLowerCase()}>
                  {item}
                </Link>
              )}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Grid>
      <AppBar component="nav" className="navBar">
        <Toolbar>
          <Avatar alt="SG logo" src={logo} />
          <Typography className="navLogo-text">SG</Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <ul className="navList">
              {navItems.map((item) => (
                <li key={item}>
                  {item === "Panel" ? (
                    <MuiContainedButton type={"button"} buttonText={item} />
                  ) : item === "Login" ? (
                    <RouteLink to={`/${item.toLowerCase()}`}>
                      <Button className="navButtons">{item}</Button>
                    </RouteLink>
                  ) : (
                    <Link
                      activeClass="active"
                      smooth
                      spy
                      to={item.toLowerCase()}
                    >
                      <Button className="navButtons">{item}</Button>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
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
      <Grid component="main">
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Services />
        </section>
      </Grid>
    </Grid>
  );
};

export default Landing;
