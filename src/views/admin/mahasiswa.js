"use client";
import CustomAlert from "@/components/alerts/customAlert";
import BasicDropdown from "@/components/dropdown/basicDropdown";
import BasicModal from "@/components/modals/basicModal";
import AddForm from "@/components/pageComponents/dashboard-admin/mahasiswa/addForm";
import EditForm from "@/components/pageComponents/dashboard-admin/mahasiswa/editForm";
import BasicTable from "@/components/table/basicTable";
import { CreateData, DeleteData, UpdateData } from "@/libs/functions";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function Mahasiswa({ tableName, item }) {
  const [data, setData] = useState(item);
  const [form, setForm] = useState();
  const [modal, setModal] = useState(null);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 5,
  });

  const { reset } = useForm();

  const uri = "mahasiswa";

  const handleCreate = async (e) => {
    setModal(null);
    setLoading(true);
    CreateData({
      e: e,
      uri: uri,
      data: data,
      setData: setData,
      paginationModel: paginationModel,
      setPaginationModel: setPaginationModel,
      setModal: setModal,
      reset: reset,
      setMessage: setMessage,
      setLoading: setLoading,
      setError: setError,
    });
  };

  const handleUpdate = async (e) => {
    setModal(null);
    setLoading(true);
    UpdateData({
      e: e,
      form: form,
      uri: uri,
      setData: setData,
      paginationModel: paginationModel,
      setPaginationModel: setPaginationModel,
      setModal: setModal,
      setMessage: setMessage,
      setLoading: setLoading,
      setError: setError,
    });
  };

  const handleDelete = async (id) => {
    setModal(null);
    setLoading(true);
    DeleteData({
      id: id,
      uri: uri,
      data: data,
      setData: setData,
      paginationModel: paginationModel,
      setPaginationModel: setPaginationModel,
      setModal: setModal,
      setMessage: setMessage,
      setLoading: setLoading,
      setError: setError,
    });
  };

  const columns = [
    {
      field: "nim",
      headerName: "NIM",
      flex: 1,
    },
    {
      field: "nama",
      headerName: "Nama",
      flex: 1,
    },
    {
      field: "jurusan",
      headerName: "Jurusan",
      flex: 1,
    },
    {
      field: "kelas",
      headerName: "Kelas",
      flex: 1,
    },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      renderCell: (params) => (
        <BasicDropdown
          params={params}
          setForm={setForm}
          setModal={setModal}
          Delete={handleDelete}
        />
      ),
    },
  ];

  return (
    <>
      <div className="space-y-4">
        <div className="flex w-full justify-between items-center">
          <div className="font-bold text-2xl ">{tableName}</div>
          <div>
            <Button
              className="bg-[#1E5AF9] hover:bg-[#1E5AF9]/70"
              variant="contained"
              onClick={() => {
                reset(), setModal("Add");
              }}
            >
              Add Data
            </Button>
          </div>
        </div>
        {message && (
          <CustomAlert
            severity={"success"}
            setOpen={setMessage}
            message={message}
          />
        )}
        {error && (
          <CustomAlert severity={"error"} setOpen={setError} message={error} />
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
        <BasicModal
          name="Add"
          modal={modal}
          setForm={setForm}
          resetForm={reset}
          setModal={setModal}
        >
          <AddForm handleCreate={handleCreate} />
        </BasicModal>
        <BasicModal
          name="Edit"
          modal={modal}
          setForm={setForm}
          resetForm={reset}
          setModal={setModal}
        >
          <EditForm handleUpdate={handleUpdate} form={form} />
        </BasicModal>
      </div>
    </>
  );
}
