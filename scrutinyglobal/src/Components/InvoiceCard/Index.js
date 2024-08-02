import editIcon from "../../Images/Invoice/editIcon.png";
import { Checkbox, Chip, Grid, Typography } from "@mui/material";
import React from "react";
import "./Style.css";

const InvoiceCard = ({
  total,
  clientName,
  date,
  description,
  checked,
  onClick,
}) => {
  return (
    <Grid
      container
      className="invoice-card"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item container alignItems="center" justifyContent="space-between">
        <Grid item container alignItems="center" spacing={1} xs={10}>
          <Grid item onClick={onClick}>
            <Checkbox size="small" checked={checked} />
          </Grid>
          <Grid item>
            <Typography className="invoice-number" component="div">
              INVOICE-001
            </Typography>
          </Grid>
          <Grid item>
            {/* <Chip size="small" className="chip-class" label="Active" /> */}
            <Typography className="chip-class">Active</Typography>
          </Grid>
        </Grid>
        <Grid item xs={2} container justifyContent="flex-end">
          <img src={editIcon} alt="editIcon" />
        </Grid>
      </Grid>
      <Grid item container>
        <Grid item md={3}>
          <Typography className="invoice-text-key">Amount:</Typography>
        </Grid>
        <Grid item>
          <Typography className="invoice-text-value-total">{total}</Typography>
        </Grid>
      </Grid>
      <Grid item container>
        <Grid item md={3}>
          <Typography className="invoice-text-key">Client:</Typography>
        </Grid>
        <Grid item>
          <Typography className="invoice-text-value">{clientName}</Typography>
        </Grid>
      </Grid>
      <Grid item container>
        <Grid item md={3}>
          <Typography className="invoice-text-key">Date:</Typography>
        </Grid>
        <Grid item>
          <Typography className="invoice-text-value">{date}</Typography>
        </Grid>
      </Grid>
      <Grid item container>
        <Grid item md={3}>
          <Typography className="invoice-text-key">Description:</Typography>
        </Grid>
        <Grid item>
          <Typography className="invoice-text-value">{description}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default InvoiceCard;
