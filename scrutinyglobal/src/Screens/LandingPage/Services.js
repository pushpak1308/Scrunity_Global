import { Grid } from "@mui/material";
import React from "react";
import CenteredTextSection from "../../Components/CenteredTextSection/Index";
import SurveyCard from "../../Components/SurveyCard/Index";

const Services = () => {
  const cardArray = [
    {
      title1: "Survey Sampling:",
      title2: "Quantitative Research",
      color: "light blue",
      content: `1. Web Interviewing (CAWI): Engage respondents through accessible and user-friendly web surveys. Our CAWI method ensures efficient data collection without compromising participant convenience.
  
      2. Phone Interviewing (CATI): Harness CATI for profound phone interviews. Our skilled interviewers navigate conversations adeptly, ensuring accurate responses.
      
      3. Face To Face Interviewing (CAPI): Forge personal connections through face-to-face interviews. Particularly effective for complex topics, CAPI builds rapport for comprehensive insights.
      
      4. Complex (Mixed) Mode Interviewing: Recognizing respondent preferences, our complex mode approach combines web, phone, and face-to-face methods for comprehensive data collection.`,
    },
    {
      title1: "Survey Sampling:",
      title2: "Quantitative Research",
      color: "orange",
      content: `1. Focus Groups: Dive into group dynamics through focus group discussions. Our facilitators create an open environment for meaningful insights.

2. In-depth Interviews: Explore individual perspectives with deep-dive interviews. Skilled interviewers unveil nuanced insights for holistic audience understanding.

3. Consumer Immersion/Ethnography: Immerse in customer worlds with ethnographic research. Observe behavior in natural settings for authentic insights.

4. In-home Usage Tests (IHUTs): Test products in real-life settings. IHUTs offer hands-on feedback on usability and user experience.

5. Diary Journal Studies: Capture real-time experiences with diary journals. Track evolving attitudes and behaviors over time.`,
    },
    {
      title1: "Charting and Visualization:",
      title2: "Transforming Data into Impactful Narratives",
      color: "lavender",
      content: `1. Interactive Visualizations: Transform complex data into interactive visuals for insightful exploration.

2. Meaningful Storytelling: Unearth narratives within data, crafting compelling stories for data-driven decisions.

3. Real-time Dashboards: Agile decision-making thrives on real-time insights. Our dashboards offer dynamic, timely snapshots of key metrics.`,
    },
    {
      title1: "Survey Designing & Survey Programming",
      title2: "",
      color: "light green",
      content: `Our survey design uses platforms like Confirmit and Decipher to create engaging surveys. Expertly structured surveys yield actionable insights. Survey programming ensures seamless data collection across platforms and devices.`,
    },
    {
      title1: "Data Processing:",
      title2: "Meticulous Refinement",
      color: "red",
      content: `Our skilled team transforms raw data into analysis-ready formats. Utilizing SPSS, SAS, and Python, we refine data, conduct advanced statistical analysis, and formulate actionable insights.`,
    },
    {
      title1: "At Scrutiny Global",
      title2: "",
      color: "pink",
      content: `Our services aren't just offerings - they're pathways to knowledge, empowerment, and actionable insights. Join us on this journey of exploration, understanding, and growth`,
    },
  ];

  return (
    <Grid container id="services" className="about-grid ">
      <Grid item>
        <CenteredTextSection
          title={"SERVICES"}
          subtitle={
            "Our Comprehensive Services: Unlocking Insights with Precision"
          }
        />
      </Grid>
      <Grid container spacing={2}>
        {cardArray.map((item, index) => (
          <Grid item xs={12} md={4} key={index}>
            <SurveyCard
              title1={item.title1}
              title2={item.title2}
              content={item.content}
              color={item.color}
            />
          </Grid>
        ))}
      </Grid>
      <Grid item>
        <CenteredTextSection
          title={"F.A.Q"}
          subtitle={"Frequently Asked Questions"}
        />
      </Grid>
    </Grid>
  );
};

export default Services;
