import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";

const InfoCard = ({ title, value, bgcolor }) => {
  return (
    <Card className="infoContainer" sx={{ backgroundColor: bgcolor }}>
      <CardContent>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="body" className="infoText">
              {title}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h3" className="infoText">
              {value}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
