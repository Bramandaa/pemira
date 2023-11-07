import DynamicInput from "@/components/input/dynamicInput";
import ImageInput from "@/components/input/imageInput";
import PasswordInput from "@/components/input/passwordInput";
import TextInput from "@/components/input/textInput";
import { Button, Typography } from "@mui/material";
import { useForm } from "react-hook-form";

export default function EditForm({ handleUpdate, setImage, form }) {
  let misi = [];
  form.misi.forEach((item) => {
    misi.push({ text: item });
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      misi,
    },
  });
  return (
    <div>
      <form onSubmit={handleSubmit(handleUpdate)} className="space-y-4">
        <div className="font-RalewayBold text-2xl text-center">Add Data</div>
        <div className="flex w-full h-full space-x-4">
          <div className="w-[50%] space-y-4">
            <TextInput
              name="nomor"
              type="text"
              label="Nomor"
              errors={errors}
              control={control}
              placeholder="Input Nomor"
              defaultValue={form.nomor}
            />
            <ImageInput
              name="image"
              type="text"
              label="Image"
              errors={errors}
              control={control}
              placeholder="Input Image"
              setImage={setImage}
            />
            <TextInput
              name="nama_ketua"
              type="text"
              label="Nama Calon Ketua"
              errors={errors}
              control={control}
              placeholder="Input Nama Calon Ketua"
              defaultValue={form.nama_ketua}
            />
            <TextInput
              name="nama_wakil"
              type="text"
              label="Nama Calon Wakil Ketua"
              errors={errors}
              control={control}
              placeholder="Input Nama Calon Wakil Ketua"
              defaultValue={form.nama_wakil}
            />
            <TextInput
              name="visi"
              type="text"
              label="Visi"
              errors={errors}
              control={control}
              placeholder="Input Visi"
              defaultValue={form.visi}
            />
          </div>
          <div className="w-[50%]">
            <DynamicInput
              name="misi"
              label="Misi"
              errors={errors}
              control={control}
            />
          </div>
        </div>

        <div className="w-full flex justify-end">
          <Button
            type="submit"
            variant="contained"
            className="font-RalewayMedium bg-[#1E5AF9] hover:bg-[#1E5AF9]/70"
          >
            Update
          </Button>
        </div>
      </form>
    </div>
  );
}
