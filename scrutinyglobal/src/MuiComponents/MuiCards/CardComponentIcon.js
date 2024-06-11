import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import "./Style.css";

const CardComponentIcon = ({ image, title, text }) => {
  return (
    <Card className="iconCard">
      <CardMedia
        component="img"
        image={image}
        alt={title}
        className="iconCardMedia"
      />
      <CardContent>
        <Typography className="iconCard-title">{title}</Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          className="iconCard-subtitle"
        >
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardComponentIcon;
