import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";

import { Chart } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { ArcElement, Legend, Tooltip } from "chart.js";

Chart.register(ArcElement, Tooltip, Legend);

const InfoCard = ({ title, value, subtitle, icon }) => {
  const data = {
    labels: ["Vendors", "Clients"],
    datasets: [
      {
        label: "Leads Approved",
        data: [10, 10],
        backgroundColor: [" #31BAF4", "#C6F5FF"],
        borderColor: ["#31BAF4", "#C6F5FF"],
      },
    ],
  };
  const chart = (
    <>
      <Doughnut data={data} className="doughnut-chart"></Doughnut>
    </>
  );
  return (
    <Card className="infoContainer">
      <CardContent>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item container xs={6}>
            <Grid item xs={12}>
              <Typography component="div" className="infoText">
                {value}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography component="div" className="infoText">
                {title}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography component="div" className="infoText">
                {subtitle}
              </Typography>
            </Grid>
          </Grid>
          <Grid item>{icon ? icon : chart}</Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
