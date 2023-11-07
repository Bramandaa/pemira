import { getData } from "@/libs/functions";
import { DataGrid, GridColDef, GridPaginationModel } from "@mui/x-data-grid";
import { useState } from "react";

export default function BasicTable({
  uri,
  data,
  setData,
  columns,
  loading,
  paginationModel,
  setPaginationModel,
}) {
  const [Load, setLoad] = useState(false);

  const handlePageChange = async (event) => {
    setLoad(true);
    const url = uri + "?limit=" + event.pageSize + "&page=" + event.page;
    const pageData = await getData({ uri: url });
    setData(pageData);
    setPaginationModel({ page: event.page, pageSize: event.pageSize });
    setLoad(false);
  };
  return (
    <>
      <DataGrid
        sx={{
          "& .MuiDataGrid-columnHeader:focus-within, & .MuiDataGrid-cell:focus-within":
            {
              outline: "none !important",
            },
        }}
        autoHeight
        columns={columns}
        paginationMode="server"
        rows={data.list || []}
        pageSizeOptions={[5, 10]}
        loading={loading || Load}
        disableRowSelectionOnClick
        rowCount={data?.totalData || 0}
        paginationModel={paginationModel}
        onPaginationModelChange={handlePageChange}
        getRowId={(row) => (row.id ? row.id : row._id)}
      />
    </>
  );
}
