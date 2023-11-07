import PasswordInput from "@/components/input/passwordInput";
import TextInput from "@/components/input/textInput";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";

export default function AddForm({ handleCreate }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div>
      <form onSubmit={handleSubmit(handleCreate)} className="space-y-4">
        <div className="font-RalewayBold text-2xl text-center">Add Data</div>
        <TextInput
          name="nim"
          type="text"
          label="NIM"
          errors={errors}
          control={control}
          placeholder="Input NIM"
        />
        <TextInput
          name="nama"
          type="text"
          label="Nama"
          errors={errors}
          control={control}
          placeholder="Input Nama"
        />
        <div className="flex space-x-4">
          <TextInput
            name="jurusan"
            type="text"
            label="Jurusan"
            errors={errors}
            control={control}
            placeholder="Input Jurusan"
          />
          <TextInput
            name="program_studi"
            type="text"
            label="Program Studi"
            errors={errors}
            control={control}
            placeholder="Input Program Studi"
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
          />
          <TextInput
            name="kelas"
            type="text"
            label="Kelas"
            errors={errors}
            control={control}
            placeholder="Input Kelas"
          />
        </div>
        <PasswordInput
          name="password"
          type="password"
          label="Password"
          errors={errors}
          control={control}
          placeholder="Input Password"
          required={true}
        />
        <div className="w-full flex justify-end">
          <Button
            type="submit"
            variant="contained"
            className="font-RalewayMedium bg-[#1E5AF9] hover:bg-[#1E5AF9]/70"
          >
            Add
          </Button>
        </div>
      </form>
    </div>
  );
}
