import { Grid, useMediaQuery, useTheme } from "@mui/material";
import {
  DataGrid,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid";
import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import "./Style.css";

function CustomPagination() {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  return (
    <Pagination
      color="primary"
      variant="outlined"
      shape="rounded"
      page={page + 1}
      count={pageCount}
      renderItem={(props) => <PaginationItem {...props} disableRipple />}
      onChange={(event, value) => apiRef.current.setPage(value - 1)}
    />
  );
}

const MuiDataGrid = ({
  rows,
  columns,
  onRowSelectionModelChange,
  checkboxSelection,
  rowSelectionModel,
  columnVisibilityModel,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const PAGE_SIZE = 5;
  const MOBILE_PAGE_SIZE = 10;
  const [paginationModel, setPaginationModel] = useState({
    pageSize: isMobile ? MOBILE_PAGE_SIZE : PAGE_SIZE,
    page: 0,
  });

  useEffect(() => {
    setPaginationModel({
      pageSize: isMobile ? MOBILE_PAGE_SIZE : PAGE_SIZE,
      page: 0,
    });
  }, [isMobile]);

  return (
    <Grid container className="data-grid-container">
      <DataGrid
        rows={rows}
        columns={columns}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        pageSizeOptions={isMobile ? [MOBILE_PAGE_SIZE] : [PAGE_SIZE]}
        disableRowSelectionOnClick
        rowSelectionModel={rowSelectionModel}
        onRowSelectionModelChange={onRowSelectionModelChange}
        checkboxSelection={checkboxSelection}
        columnVisibilityModel={columnVisibilityModel}
        slots={{
          pagination: CustomPagination,
        }}
      />
    </Grid>
  );
};

export default MuiDataGrid;
