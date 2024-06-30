import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";

import { styled } from "@mui/system";
import React from "react";
import "../Style.css";
import { Link } from "react-router-dom";

const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  fontFamily: "Arimo",
  fontSize: "1rem",
  fontWeight: 400,
  textDecoration: "none",
}));

const LinkButton = ({ text, icon, link, className = "sidebar-text" }) => (
  <ListItem key={text} disablePadding>
    <ListItemButton>
      <ListItemIcon>{icon}</ListItemIcon>
      <Link to={`/${link}`} className={className}>
        <StyledListItemText className={className}>{text}</StyledListItemText>
      </Link>
    </ListItemButton>
  </ListItem>
);

export default LinkButton;
