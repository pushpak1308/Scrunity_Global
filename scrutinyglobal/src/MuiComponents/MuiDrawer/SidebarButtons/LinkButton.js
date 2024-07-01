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

const StyledListItemText = styled(ListItemText)(({ theme, isActive }) => ({
  fontFamily: "Arimo",
  fontSize: "1rem",
  fontWeight: isActive ? "700" : "400",
  textDecoration: "none",
  color: isActive ? "#31BAF4" : "",
}));

const StyledListItemButton = styled(ListItemButton)(({ theme, isActive }) => ({
  backgroundColor: isActive ? "#DEF5FF" : "sssss",
  borderRadius: "50px",
}));

const LinkButton = ({
  text,
  icon,
  link,
  className = "sidebar-text",
  active,
}) => (
  <ListItem key={text} disablePadding>
    <StyledListItemButton isActive={active}>
      <ListItemIcon>{icon}</ListItemIcon>
      <Link to={`/${link}`} className={className}>
        <StyledListItemText isActive={active} className={className}>
          {text}
        </StyledListItemText>
      </Link>
    </StyledListItemButton>
  </ListItem>
);

export default LinkButton;
