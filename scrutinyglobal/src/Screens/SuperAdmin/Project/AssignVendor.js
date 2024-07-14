import React, { useState } from "react";
import Layout from "../Layout";
import { Grid } from "@mui/material";
import MuiMultiSelectDropdown from "../../../MuiComponents/MuiMultiSelectDropdown/Index"; // Update the import to the correct path

const AssignVendor = () => {
  const [selectedVendors, setSelectedVendors] = useState([]);

  const vendors = [
    {
      id: 1,
      vendorName: "Vendor 1",
      successURL: "exampleURL.com",
      terminateURL: "exampleURL.com",
      quotafullURL: "exampleURL.com",
      costPerSurvey: "45",
    },
    {
      id: 2,
      vendorName: "Vendor 2",
      successURL: "exampleURL.com",
      terminateURL: "exampleURL.com",
      quotafullURL: "exampleURL.com",
      costPerSurvey: "45",
    },
    {
      id: 3,
      vendorName: "Vendor 3",
      successURL: "exampleURL.com",
      terminateURL: "exampleURL.com",
      quotafullURL: "exampleURL.com",
      costPerSurvey: "45",
    },
  ];

  const handleVendorChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedVendors(typeof value === "string" ? value.split(",") : value);
  };

  const content = (
    <Grid container>
      <Grid item>
        <MuiMultiSelectDropdown
          label={"Vendor"}
          value={selectedVendors}
          onChange={handleVendorChange}
          options={vendors.map((item) => item.vendorName)}
        />
      </Grid>
    </Grid>
  );

  return <Layout content={content} navbarHeading="ASSIGN VENDOR" />;
};

export default AssignVendor;
