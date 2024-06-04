import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Box,
} from "@mui/material";

const CardComponent2 = ({ image, title, text }) => {
  return (
    <Card sx={{ display: "flex", alignItems: "center", padding: 2 }}>
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{ width: 100, height: 100, objectFit: "cover", borderRadius: 1 }}
      />
      <CardContent sx={{ flex: 1, paddingLeft: 2 }}>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardComponent2;
