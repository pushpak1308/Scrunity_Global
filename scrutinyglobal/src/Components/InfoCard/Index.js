import React from "react";
import { Card, CardContent, Grid, Paper } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";
import "./Style.css";

const InfoCard = ({ title, value, subtitle, image }) => {
  const pieParams = { height: 100, width: 100 };

  const chart = (
    <PieChart
      series={[
        {
          data: [
            { value: 10, color: "#31BAF4" },
            { value: 10, color: "#C6F5FF" },
          ],
          innerRadius: 25,
          outerRadius: 40,
          paddingAngle: 0,
          cornerRadius: 0,
        },
      ]}
      {...pieParams}
    />
  );

  return (
    <Card className="infoContainer">
      <CardContent>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          className="info-subcontainer"
        >
          <Grid item container xs={6}>
            <Grid item>
              <Paper className="infoText-1" elevation={0}>
                {value}
              </Paper>
            </Grid>
            <Grid item>
              <Paper className="infoText-2" elevation={0}>
                {title}
              </Paper>
            </Grid>
            <Grid item>
              <Paper className="infoText-3" elevation={0}>
                {subtitle}
              </Paper>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            {image ? <img src={image} alt={title} /> : chart}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
