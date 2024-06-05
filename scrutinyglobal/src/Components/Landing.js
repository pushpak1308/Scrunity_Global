import React from "react";
// import Navbar from "./Parts/Navbar";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import Home from "./Parts/Home";
import About from "./Parts/About";
import Services from "./Parts/Services";
import Drawer from '@mui/material/Drawer';
import logo from "../logo_sg.png";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import { Link } from "react-scroll";

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Services','Contact'];

const Landing = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
      <Avatar alt="SG logo" src={logo} />
        SG
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex" }}>
      {/* ----------------------------------- */}
      <AppBar component="nav" sx={{bgcolor:"#fff",color:"black"}}>
        <Toolbar>
          
          <Avatar alt="SG logo" src={logo} />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            
        SG
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <ul style={{display:"flex",listStyleType: "none"}}>
            
            {navItems.map((item) => (
              <li key={item}>
              <Button key={item} >
                <Link activeClass="active" smooth spy to={item.toLowerCase()}>
                {item}
              </Link>
                
              </Button>
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
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      {/* ------------------------------------ */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="services"><Services /></section>
      </Box>
    </Box>
  );
};

export default Landing;
