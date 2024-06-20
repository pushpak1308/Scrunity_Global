import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Grid, Typography } from "@mui/material";
import "./Style.css";

export default function MuiAccordion({ content }) {
  // const [classforExpand, setClassforExpand] = React.useState(false);
  return (
    <Grid className="accordion-container">
      {content.map((item, index) => (
        <Accordion key={index} className="accordion" elevation={0}>
          <AccordionSummary
            // expandIcon={<ExpandMoreIcon onClick={setClassforExpand(true)} />}
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography
              // className={
              //   classforExpand
              //     ? "accordion-summary-expanded"
              //     : "accordion-summary"
              // }
              className="accordion-summary"
            >
              {item.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="accordion-details">
            {item.content}
          </AccordionDetails>
        </Accordion>
      ))}
    </Grid>
  );
}
