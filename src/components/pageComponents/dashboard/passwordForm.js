import PasswordInput from "@/components/input/passwordInput";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";

export default function PasswordForm({ handleChangePassword }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div>
      <form onSubmit={handleSubmit(handleChangePassword)} className="space-y-4">
        <div className="font-RalewayBold text-2xl text-center">
          Change Password
        </div>
        <PasswordInput
          name="old_password"
          type="password"
          label="Old Password"
          errors={errors}
          control={control}
          placeholder="Input Old Password"
          required={true}
        />
        <PasswordInput
          name="new_password"
          type="password"
          label="New Password"
          errors={errors}
          control={control}
          placeholder="Input New Password"
          required={true}
        />
        <div className="w-full flex justify-end">
          <Button
            type="submit"
            variant="contained"
            className="font-RalewayMedium bg-[#1E5AF9] hover:bg-[#1E5AF9]/70"
          >
            Change
          </Button>
        </div>
      </form>
    </div>
  );
}
