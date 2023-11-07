import { FormControl, FormHelperText, TextField } from "@mui/material";
import { Controller } from "react-hook-form";

export default function TextInput({
  control,
  name,
  label,
  type,
  rows,
  errors,
  disabled,
  placeholder,
  endAdornment,
  defaultValue,
}) {
  return (
    <FormControl fullWidth size="small">
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue ? defaultValue : ""}
        rules={{ required: `${label} is required` }}
        render={({ field: { value, onChange, onBlur } }) => {
          const handleChange = (event) => {
            let inputValue = event.target.value;

            if (type === "number") {
              const numericValue = parseInt(inputValue);
              if (!isNaN(numericValue) && numericValue >= 0) {
                inputValue = numericValue;
              } else {
                inputValue = "";
              }
            }
            onChange(inputValue);
          };
          return (
            <>
              <TextField
                type={type}
                label={label}
                onBlur={onBlur}
                rows={rows || 1}
                value={value || ""}
                onChange={handleChange}
                error={!!errors[name]}
                placeholder={placeholder}
                disabled={disabled ? disabled : false}
                multiline={rows ? true : false}
                autoComplete="off"
                InputProps={{
                  endAdornment: endAdornment,
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
    </FormControl>
  );
}
