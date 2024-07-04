import { Grid } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import "./Style.css";

const MuiDataGrid = ({
  rows,
  columns,
  onRowSelectionModelChange,
  checkboxSelection,
  rowSelectionModel,
  columnVisibilityModel,
}) => {
  return (
    <Grid container className="data-grid-container">
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
        rowSelectionModel={rowSelectionModel}
        onRowSelectionModelChange={onRowSelectionModelChange}
        checkboxSelection={checkboxSelection}
        columnVisibilityModel={columnVisibilityModel}
      />
    </Grid>
  );
};

export default MuiDataGrid;
