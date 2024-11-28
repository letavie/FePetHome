import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const DataTable = ({ rows, columns }) => {
  return (
    <div style={{ width: "100%" }}>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          sx={{
            "& .css-yrdy0g-MuiDataGrid-columnHeaderRow": {
              background: "#58bbf9 !important",
              color: "white",
            },
            "& .MuiButtonBase-root": {
              color: "white",
            },
            "& .MuiDataGrid-row": {
              minHeight: "52px",
            },
          }}
        />
      </div>
    </div>
  );
};

export default DataTable;
