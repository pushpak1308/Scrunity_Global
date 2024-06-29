import React from "react";
import { Card, CardContent, Typography, Grid, Paper } from "@mui/material";
import "./Style.css";
import { Chart } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { ArcElement, Tooltip } from "chart.js";

Chart.register(ArcElement, Tooltip);

const InfoCard = ({ title, value, subtitle, image }) => {
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

  const options = {
    cutout: "70%", // inner radius
    radius: "90%", // outer radius
  };

  const chart = (
    <>
      <Doughnut
        data={data}
        options={options}
        className="doughnut-chart"
      ></Doughnut>
    </>
  );
  return (
    <Card className="infoContainer">
      <CardContent>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item container xs={8}>
            <Grid item xs={12}>
              <Paper className="infoText-1" elevation={0}>
                {value}
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className="infoText-2" elevation={0}>
                {title}
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className="infoText-3" elevation={0}>
                {subtitle}
              </Paper>
            </Grid>
          </Grid>
          <Grid item xs={3}>
            {image ? <img src={image} /> : chart}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
