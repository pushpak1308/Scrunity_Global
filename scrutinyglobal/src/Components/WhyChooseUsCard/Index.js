import React from "react";
import { Grid, Card, CardContent, Typography, Box } from "@mui/material";

const WhyChooseUsCard = ({ title, description, image }) => {
  return (
    <Card sx={{ display: "flex", marginBottom: 2 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 2,
        }}
      >
        <img src={image} alt={title} style={{ width: 80, height: 80 }} />
      </Box>
      <CardContent>
        <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ marginTop: 1 }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WhyChooseUsCard;
