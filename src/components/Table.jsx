import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "Date", headerName: "Date", width: 150 },
  { field: "Fajr", headerName: "Fajr", width: 150 },
  { field: "Sunrise", headerName: "Sunrise", width: 150 },
  { field: "Dhuhr", headerName: "Dhuhr", width: 150 },
  { field: "Asr", headerName: "Asr", width: 150 },
  { field: "Sunset", headerName: "Sunset", width: 150 },
  { field: "Maghrib", headerName: "Maghrib", width: 150 },
  { field: "Isha", headerName: "Isha", width: 150 },
];

const paginationModel = { page: 0, pageSize: 31 };

export default function DataTable({ data }) {
  const rows = data.data
    ? data.data.map((item, index) => ({
        id: index + 1,
        Date: item.date.gregorian.date, // Add Date field from Gregorian date
        ...item.timings, // Spread all timings
      }))
    : [];

  return (
    <Paper sx={{ height: "80vh", width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10, 30]}
        checkboxSelection
        sx={{
          border: 0,
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "", // Header background color
            color: "black", // Header text color
            fontSize: "1.4rem", // Header font size
          },
          "& .MuiDataGrid-row": {
            "&:nth-of-type(odd)": {
              backgroundColor: "#f5f5f5", // Odd row background color
            },
            "&:nth-of-type(even)": {
              backgroundColor: "#e0f7fa", // Even row background color
            },
          },
        }}
      />
    </Paper>
  );
}
