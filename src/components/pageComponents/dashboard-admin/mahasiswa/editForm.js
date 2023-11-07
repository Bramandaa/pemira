import PasswordInput from "@/components/input/passwordInput";
import TextInput from "@/components/input/textInput";
import { Button, Typography } from "@mui/material";
import { useForm } from "react-hook-form";

export default function EditForm({ handleUpdate, form }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div>
      <form onSubmit={handleSubmit(handleUpdate)} className="space-y-4">
        <div className="font-semibold text-2xl text-center">Edit Data</div>
        <TextInput
          name="nim"
          type="text"
          label="NIM"
          errors={errors}
          control={control}
          placeholder="Input NIM"
          defaultValue={form.nim}
        />
        <TextInput
          name="nama"
          type="text"
          label="Nama"
          errors={errors}
          control={control}
          placeholder="Input Nama"
          defaultValue={form.nama}
        />
        <div className="flex space-x-4">
          <TextInput
            name="jurusan"
            type="text"
            label="Jurusan"
            errors={errors}
            control={control}
            placeholder="Input Jurusan"
            defaultValue={form.jurusan}
          />
          <TextInput
            name="program_studi"
            type="text"
            label="Program Studi"
            errors={errors}
            control={control}
            placeholder="Input Program Studi"
            defaultValue={form.program_studi}
          />
        </div>
        <div className="flex space-x-4">
          <TextInput
            name="semester"
            type="text"
            label="Semester"
            errors={errors}
            control={control}
            placeholder="Input Semester"
            defaultValue={form.semester}
          />
          <TextInput
            name="kelas"
            type="text"
            label="Kelas"
            errors={errors}
            control={control}
            placeholder="Input Kelas"
            defaultValue={form.kelas}
          />
        </div>
        <PasswordInput
          name="password"
          type="password"
          label="Password"
          errors={errors}
          control={control}
          placeholder="Input Password"
        />
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
