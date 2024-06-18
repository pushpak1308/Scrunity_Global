import React from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import MessageIcon from "@mui/icons-material/Message";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./Style.css";

const SurveyCard = ({ title1, title2, content, color }) => {
  return (
    <Card className="survey-card">
      <CardContent>
        <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
          <MessageIcon className="icon" color="color" />
        </Box>
        <Typography variant="h6" align="center" color="textPrimary">
          {title1}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          {title2}
        </Typography>
        <Typography
          variant="body2"
          align="center"
          color="textSecondary"
          paragraph
        >
          {content}
        </Typography>
        <Box display="flex" justifyContent="center">
          <Button
            className="read-more-btn"
            variant="text"
            endIcon={<ArrowForwardIcon />}
          >
            Read More
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default SurveyCard;
