import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import aboutImage from "./../../Images/LandingImages/AboutImages/aboutImage.png";
import cardImage1 from "./../../Images/LandingImages/AboutImages/CardImage/cardImage1.png";
import cardImage2 from "./../../Images/LandingImages/AboutImages/CardImage/cardImage2.png";
import cardImage3 from "./../../Images/LandingImages/AboutImages/CardImage/cardImage3.png";
import CardComponentImage from "../../MuiComponents/MuiCards/CardComponentImage";
import CardComponentIcon from "../../MuiComponents/MuiCards/CardComponentIcon";
import HappyClients from "./../../Images/LandingImages/AboutImages/CardImage/HappyClients.png";
import Projects from "./../../Images/LandingImages/AboutImages/CardImage/Projects.png";
import CustomerSupport from "./../../Images/LandingImages/AboutImages/CardImage/CustomerSupport.png";
import Hardworkers from "./../../Images/LandingImages/AboutImages/CardImage/hardworkers.png";
import MuiContainedButton from "../../MuiComponents/MuiContainedButton/Index";
import CenteredTextSection from "../../Components/CenteredTextSection/Index";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import aboutImage2 from "./../../Images/LandingImages/AboutImages/aboutImage2.png";
import CheckBoxWithText from "../../MuiComponents/MuiCards/CheckBoxWithText";

const About = () => {
  const textArray = [
    "Survey Panel Recruitment",
    "Survey Creation",
    "Data Collection and Management",
    "Survey Analytics and Reporting",
    "Multi-Language & Country Support",
    "Multi-Device Compatibility",
    "Multi-Device Compatibility",
    "Survey Security and Compliance",
    "Survey Integrations & Personalization",
    "Survey Scoring and Grading",
  ];

  return (
    <Grid id="about" sx={{ mx: 5 }}>
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

          <MuiContainedButton
            buttonText={"Read More"}
            type={"button"}
            endIcon={<ArrowForwardIcon />}
          />
        </Grid>
        <Grid item xs={12} md={6} sx={{ padding: 3 }}>
          <img
            src={aboutImage}
            alt="About Image"
            style={{ width: "100%", height: "auto", borderRadius: "8px" }}
          />
        </Grid>
      </Grid>

      <CenteredTextSection
        title={"WHY SCRUTINY GLOBAL...."}
        subtitle={
          "We recognize the importance of expediency and thus, operate with swiftness and efficacy to ensure the punctual delivery of your outcomes, as delineated by the following aspects."
        }
      />
      <Grid container spacing={1} sx={{ px: 6 }}>
        <Grid item xs={12} sm={6} md={4}>
          <CardComponentImage
            image={cardImage1}
            title="Diversity in Departments"
            text="Our prowess is multi-faceted. We excel in Quantitative and Qualitative research, conduct Online Surveys, gauge Public Opinion, curate meticulous Data Collections, dissect Media intricacies, and unravel profound Covid-19 Insights. This versatility tailors our platform for clients in pursuit of diverse viewpoints or specific market niches."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardComponentImage
            image={cardImage2}
            title="Global Reach"
            text="Seizing opportunities on a global scale, we empower our clients to connect with respondents spanning the farthest reaches. We specialize in procuring top-tier responses from the most elusive participants – be it IT professionals, HR experts, Finance wizards, Sales mavens, or even esteemed C-Level executives and department heads."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardComponentImage
            image={cardImage3}
            title="Multiple Target Platforms"
            text="Scrutiny Global seamlessly navigates both Business-to-Business (B2B) and Business-to-Consumer (B2C) terrains. Our versatility ensures that clients effortlessly tap into their desired demographic, whether it's childcare professionals, caregivers, skilled tradespeople like plumbers and electricians, or any other target group."
          />
        </Grid>
      </Grid>
      {/* <Grid
        container
        className="iconCardGrid"
        spacing={1}
        sx={{ px: 6, mx: 3 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <CardComponentIcon
            image={HappyClients}
            title="1000"
            text="Happy Clients"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CardComponentIcon image={Projects} title="1000" text="Projects" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CardComponentIcon
            image={CustomerSupport}
            title="1000"
            text="Hours Of Support"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CardComponentIcon
            image={Hardworkers}
            title="1000"
            text="Hardworkers"
          />
        </Grid>
      </Grid> */}
      <CenteredTextSection
        title={"FEATURES"}
        subtitle={
          "We offers the powerful survey features for any research need"
        }
      />

      <Grid container sx={{ px: 6 }}>
        <Grid item xs={12} md={6} className="flex-and-center aboutSection2">
          <img
            src={aboutImage2}
            alt="features"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            {textArray.map((text, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <CheckBoxWithText text={text} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
