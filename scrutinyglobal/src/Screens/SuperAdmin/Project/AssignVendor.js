import React, { useState } from "react";
import Layout from "../Layout";
import { Grid } from "@mui/material";
import { MuiDropDown } from "../../../MuiComponents/MuiDropDown/Index";

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

  const handleVendorChange = (newValue) => {
    setSelectedVendors(newValue);
  };

  const content = (
    <Grid container>
      <Grid item>
        {/* <MuiDropDown
          value={selectedVendors}
          onChange={handleVendorChange}
          options={vendors}
          label="Select Vendors"
        /> */}
      </Grid>
    </Grid>
  );

  return <Layout content={content} navbarHeading="ASSIGN VENDOR" />;
};

export default AssignVendor;
