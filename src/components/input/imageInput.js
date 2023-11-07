import { FormHelperText, TextField } from "@mui/material";
import { Controller } from "react-hook-form";

export default function ImageInput({
  control,
  name,
  label,
  setImage,
  errors,
  required,
}) {
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };
  return (
    <Controller
      name={name}
      control={control}
      rules={required && { required: `${label} is required` }}
      render={({ field: { onChange } }) => {
        return (
          <>
            <TextField
              fullWidth={true}
              type="file"
              label={label}
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                inputProps: { accept: "image/*" },
              }}
              onChange={(e) => {
                handleImageChange(e);
                onChange(e);
              }}
            />
            {errors[name] && (
              <FormHelperText sx={{ marginX: 1 }} error>
                {errors[name].message}
              </FormHelperText>
            )}
          </>
        );
      }}
    />
  );
}
