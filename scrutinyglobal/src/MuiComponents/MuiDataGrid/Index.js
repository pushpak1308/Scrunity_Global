import { Grid } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";

const MuiDataGrid = ({ rows, columns }) => {
  return (
    <Grid container>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
      />
    </Grid>
  );
};

export default MuiDataGrid;
