import { Edit } from "@mui/icons-material";
import { Checkbox, Chip, Grid, Typography } from "@mui/material";
import React from "react";

const InvoiceCard = ({
  total,
  clientName,
  date,
  description,
  checked,
  onClick,
}) => {
  return (
    <Grid container>
      <Grid item container>
        <Grid item onClick={onClick}>
          <Checkbox checked={checked} />
        </Grid>
        <Grid item>
          <Typography>INVOICE-001</Typography>{" "}
          <Chip color="success">Active</Chip>
        </Grid>
        <Grid item>
          {" "}
          <Edit />
        </Grid>
      </Grid>
      <Grid item container>
        <Grid item>
          <Typography>Amount:</Typography>
        </Grid>
        <Grid item>
          <Typography>{total}</Typography>
        </Grid>
      </Grid>
      <Grid item container>
        <Grid item>
          <Typography>Client:</Typography>
        </Grid>
        <Grid item>
          <Typography>{clientName}</Typography>
        </Grid>
      </Grid>
      <Grid item container>
        <Grid item>
          <Typography>Date:</Typography>
        </Grid>
        <Grid item>
          <Typography>{date}</Typography>
        </Grid>
      </Grid>
      <Grid item container>
        <Grid item>
          <Typography>Description:</Typography>
        </Grid>
        <Grid item>
          <Typography>{description}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default InvoiceCard;
