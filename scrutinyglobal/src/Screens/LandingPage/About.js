import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import aboutImage from "./../../aboutImage.png";
import cardImage1 from "./../../cardImage1.png";
import cardImage2 from "./../../cardImage2.png";
import cardImage3 from "./../../cardImage3.png";
import CardComponent from "../../MuiComponents/CardComponent";
import CardComponent2 from "../../MuiComponents/CardComponent2";
import HappyClients from "./../../HappyClients.png";
import Projects from "./../../Projects.png";
import CustomerSupport from "./../../CustomerSupport.png";
import hardworkers from "./../../hardworkers.png";

const About = () => {
  return (
    <Box id="about" sx={{ m: 5 }}>
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="center"
        sx={{
          maxWidth: 1200,
          margin: "0 auto",
          backgroundColor: "#e0f7fa",
          padding: 3,
          borderRadius: 2,
        }}
      >
        <Grid item xs={12} md={6} sx={{ padding: 3 }}>
          <Typography variant="h4" gutterBottom>
            WHO WE ARE
          </Typography>
          <Typography variant="h5" gutterBottom>
            Scrutiny Global: Your Partner in Market Research
          </Typography>
          <Typography variant="body1" paragraph>
            Scrutiny Global is a market research firm that provides businesses
            with the insights they need to make informed decisions. We offer a
            wide range of services, including quantitative and qualitative
            research, online surveys, public opinion polling, data collection,
            and media research.
          </Typography>
          <Typography variant="body1" paragraph>
            Our team of experienced researchers is committed to providing our
            clients with accurate, reliable, and actionable data. We understand
            that the success of your business depends on your ability to make
            sound decisions based on the latest market intelligence. That's why
            we work with you every step of the way to ensure that your research
            project is a success.
          </Typography>
          <Button variant="contained" color="primary">
            Read More
          </Button>
        </Grid>
        <Grid item xs={12} md={6} sx={{ padding: 3 }}>
          <img
            src={aboutImage}
            alt="About Image"
            style={{ width: "100%", height: "auto", borderRadius: "8px" }}
          />
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          m: 5,
          p: 3,
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Grid item xs={12}>
          <Typography
            variant="body2"
            component="p"
            sx={{ textTransform: "uppercase", fontSize: "0.875rem" }}
          >
            WHY SCRUTINY GLOBAL....
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="body1"
            component="h1"
            sx={{ fontSize: "1.25rem" }}
          >
            We recognize the importance of expediency and thus, operate with
            swiftness and efficacy to ensure the punctual delivery of your
            outcomes, as delineated by the following aspects.
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={1} justifyContent="center" sx={{ p: 3 }}>
        <Grid item xs={12} sm={6} md={4}>
          <CardComponent
            image={cardImage1}
            title="Diversity in Departments"
            text="Our prowess is multi-faceted. We excel in Quantitative and Qualitative research, conduct Online Surveys, gauge Public Opinion, curate meticulous Data Collections, dissect Media intricacies, and unravel profound Covid-19 Insights. This versatility tailors our platform for clients in pursuit of diverse viewpoints or specific market niches."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardComponent
            image={cardImage2}
            title="Global Reach"
            text="Seizing opportunities on a global scale, we empower our clients to connect with respondents spanning the farthest reaches. We specialize in procuring top-tier responses from the most elusive participants – be it IT professionals, HR experts, Finance wizards, Sales mavens, or even esteemed C-Level executives and department heads."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardComponent
            image={cardImage3}
            title="Multiple Target Platforms"
            text="Scrutiny Global seamlessly navigates both Business-to-Business (B2B) and Business-to-Consumer (B2C) terrains. Our versatility ensures that clients effortlessly tap into their desired demographic, whether it's childcare professionals, caregivers, skilled tradespeople like plumbers and electricians, or any other target group."
          />
        </Grid>
      </Grid>
      <Grid container spacing={3} justifyContent="center" sx={{ m: 5 }}>
        <Grid item xs={12} sm={6} md={3}>
          <CardComponent2
            image={HappyClients}
            title="1000"
            text="Happy Clients"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CardComponent2 image={Projects} title="1000" text="Projects" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CardComponent2
            image={CustomerSupport}
            title="1000"
            text="Hours Of Customer Support"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CardComponent2 image={hardworkers} title="1000" text="Hardworkers" />
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          m: 5,
          p: 3,
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Grid item xs={12}>
          <Typography
            variant="body2"
            component="p"
            sx={{ textTransform: "uppercase", fontSize: "0.875rem" }}
          >
            Features
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="body1"
            component="h1"
            sx={{ fontSize: "1.25rem" }}
          >
            We offers the powerful survey features for any research need
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
