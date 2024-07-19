import { Grid } from "@mui/material";
import {
  DataGrid,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid";
import React from "react";
import { styled } from "@mui/material/styles";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import "./Style.css";

// Custom checkbox styles
function customCheckbox(theme) {
  return {
    "& .MuiCheckbox-root svg": {
      width: 16,
      height: 16,
      backgroundColor: "transparent",
      border: `1px solid ${
        theme.palette.mode === "light" ? "#d9d9d9" : "rgb(67, 67, 67)"
      }`,
      borderRadius: 2,
    },
    "& .MuiCheckbox-root svg path": {
      display: "none",
    },
    "& .MuiCheckbox-root.Mui-checked:not(.MuiCheckbox-indeterminate) svg": {
      backgroundColor: "#1890ff",
      borderColor: "#1890ff",
    },
    "& .MuiCheckbox-root.Mui-checked .MuiIconButton-label:after": {
      position: "absolute",
      display: "table",
      border: "2px solid #fff",
      borderTop: 0,
      borderLeft: 0,
      transform: "rotate(45deg) translate(-50%,-50%)",
      opacity: 1,
      transition: "all .2s cubic-bezier(.12,.4,.29,1.46) .1s",
      content: '""',
      top: "50%",
      left: "39%",
      width: 5.71428571,
      height: 9.14285714,
    },
    "& .MuiCheckbox-root.MuiCheckbox-indeterminate .MuiIconButton-label:after":
      {
        width: 8,
        height: 8,
        backgroundColor: "#1890ff",
        transform: "none",
        top: "39%",
        border: 0,
      },
  };
}

// Styled DataGrid
const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  border: 0,
  color:
    theme.palette.mode === "light"
      ? "rgba(0,0,0,.85)"
      : "rgba(255,255,255,0.85)",

  "& .MuiDataGrid-cell": {
    color:
      theme.palette.mode === "light"
        ? "rgba(0,0,0,.85)"
        : "rgba(255,255,255,0.65)",
  },
  "& .MuiPaginationItem-root": {
    borderRadius: 0,
  },
  ...customCheckbox(theme),
}));

// Custom Pagination Component
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
      renderItem={(props2) => <PaginationItem {...props2} disableRipple />}
      onChange={(event, value) => apiRef.current.setPage(value - 1)}
    />
  );
}

const PAGE_SIZE = 5;

const MuiDataGrid = ({
  rows,
  columns,
  onRowSelectionModelChange,
  checkboxSelection,
  rowSelectionModel,
  columnVisibilityModel,
  disablePagination,
}) => {
  const [paginationModel, setPaginationModel] = React.useState({
    pageSize: disablePagination ? rows.length : PAGE_SIZE,
    page: 0,
  });

  return (
    <Grid container className="data-grid-container">
      <StyledDataGrid
        rows={rows}
        columns={columns}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        pageSizeOptions={disablePagination ? [rows.length] : [PAGE_SIZE]}
        disableRowSelectionOnClick
        rowSelectionModel={rowSelectionModel}
        onRowSelectionModelChange={onRowSelectionModelChange}
        checkboxSelection={checkboxSelection}
        columnVisibilityModel={columnVisibilityModel}
        pagination={!disablePagination}
        slots={{
          pagination: CustomPagination,
        }}
      />
    </Grid>
  );
};

export default MuiDataGrid;
