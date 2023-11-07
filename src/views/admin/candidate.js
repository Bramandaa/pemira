"use client";
import CustomAlert from "@/components/alerts/customAlert";
import BasicDropdown from "@/components/dropdown/basicDropdown";
import BasicModal from "@/components/modals/basicModal";
import AddForm from "@/components/pageComponents/dashboard-admin/candidate/addForm";
import EditForm from "@/components/pageComponents/dashboard-admin/candidate/editForm";
import BasicTable from "@/components/table/basicTable";
import {
  CreateData,
  CreateDataWithImage,
  DeleteData,
  UpdateData,
} from "@/libs/functions";
import imagekit from "@/libs/imagekit";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function Candidate({ tableName, item }) {
  const [data, setData] = useState(item);
  const [form, setForm] = useState();
  const [modal, setModal] = useState(null);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState();
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 5,
  });

  const { reset } = useForm();

  const uri = "candidate";

  const handleCreate = async (e) => {
    setLoading(true);
    setModal(null);

    e.misi = e.misi.filter((item) => item.text !== "").map((item) => item.text);
    const uploadResponse = await imagekit.upload({
      file: image,
      fileName: image.name,
    });
    setImage(null);
    e.image = uploadResponse.url;
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
    setLoading(true);
    setModal(null);

    e.misi = e.misi.filter((item) => item.text !== "").map((item) => item.text);
    if (image) {
      const uploadResponse = await imagekit.upload({
        file: image,
        fileName: image.name,
      });
      setImage(null);
      e.image = uploadResponse.url;
    }
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
    setLoading(true);
    setModal(null);

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
      field: "nomor",
      headerName: "Nomor",
      flex: 1 / 2,
    },
    {
      field: "nama_ketua",
      headerName: "Nama Calon Ketua",
      flex: 1,
    },
    {
      field: "nama_wakil",
      headerName: "Nama Calon Wakil Ketua",
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
          width={50}
        >
          <AddForm handleCreate={handleCreate} setImage={setImage} />
        </BasicModal>
        <BasicModal
          name="Edit"
          modal={modal}
          setForm={setForm}
          resetForm={reset}
          setModal={setModal}
        >
          <EditForm
            handleUpdate={handleUpdate}
            setImage={setImage}
            form={form}
          />
        </BasicModal>
      </div>
    </>
  );
}
