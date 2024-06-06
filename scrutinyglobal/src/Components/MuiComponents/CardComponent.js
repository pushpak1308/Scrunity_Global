import React from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";

const CardComponent = ({ image, title, text }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: "auto",
        "&:hover": {
          transform: "scale(1.05)",
          transition: "transform 0.3s ease-in-out",
        },
      }}
    >
      <Box
        sx={{
          overflow: "hidden",
          "&:hover img": {
            transform: "scale(0.95)",
            transition: "transform 0.3s ease-in-out",
          },
        }}
      >
        <CardMedia
          component="img"
          image={image}
          alt={title}
          sx={{ width: "100%", height: "auto" }}
        />
      </Box>
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
