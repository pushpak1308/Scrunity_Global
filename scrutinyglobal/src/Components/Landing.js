import React from "react";
import Navbar from "./Parts/Navbar";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import Home from "./Parts/Home";
import About from "./Parts/About";
import Services from "./Parts/Services";
const Landing = (props) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Home />
        <About />
        <Services />
      </Box>
    </Box>
  );
};

export default Landing;
