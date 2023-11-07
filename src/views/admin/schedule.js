"use client";
import CustomAlert from "@/components/alerts/customAlert";
import BasicTable from "@/components/table/basicTable";
import { SetSchedule, UpdateData } from "@/libs/functions";
import imagekit from "@/libs/imagekit";
import { Button } from "@mui/material";
import React, { useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import BlockIcon from "@mui/icons-material/Block";

export default function Schedule({ tableName, item }) {
  const row = {
    list: [
      {
        id: "1",
        jurusan: "Teknik Elektro",
      },
      {
        id: "2",
        jurusan: "Administrasi Bisnis",
      },
      {
        id: "3",
        jurusan: "Akuntansi",
      },
      {
        id: "4",
        jurusan: "Pariwisata",
      },
      {
        id: "5",
        jurusan: "Teknik Mesin",
      },
      {
        id: "6",
        jurusan: "Teknik Sipil",
      },
    ],
  };
  const [data, setData] = useState(row);
  const [modal, setModal] = useState(null);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 10,
  });

  const uri = "schedule";
  const handleUpdate = async (e) => {
    setLoading(true);
    setModal(null);
    await SetSchedule({
      e: e,
      uri: uri,
      setMessage: setMessage,
    });
    setLoading(false);
  };

  const columns = [
    {
      field: "id",
      headerName: "Nomor",
      flex: 1 / 2,
    },
    {
      field: "jurusan",
      headerName: "Jurusan",
      flex: 1,
    },
    {
      field: "action",
      headerName: "Action",
      headerAlign: "center",
      align: "center",
      flex: 1,
      renderCell: (params) => (
        <div className="flex space-x-2">
          <div>
            <Button
              onClick={() => {
                handleUpdate({ data: "Eligible", jurusan: params.row.jurusan });
              }}
              size="small"
              className="bg-green-500 hover:bg-green-500/70 text-white"
            >
              <DoneIcon />
            </Button>
          </div>
          <div>
            <Button
              onClick={() => {
                handleUpdate({
                  data: "NotEligible",
                  jurusan: params.row.jurusan,
                });
              }}
              size="small"
              className="bg-red-500 hover:bg-red-500/70 text-white"
            >
              <BlockIcon />
            </Button>
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="space-y-4">
        <div className="flex w-full justify-between items-center">
          <div className="font-bold text-2xl ">{tableName}</div>
        </div>
        {message && (
          <CustomAlert
            severity={"success"}
            setOpen={setMessage}
            message={message}
          />
        )}
        <div>
          <BasicTable
            uri={uri}
            setData={setData}
            setPaginationModel={setPaginationModel}
            columns={columns}
            data={data}
            loading={loading}
            paginationModel={paginationModel}
          />
        </div>
      </div>
    </>
  );
}
