import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Controller } from "react-hook-form";

export default function SelectInput({
  name,
  data,
  control,
  defaultValue,
  label,
  placeholder,
  errors,
  setProvince,
}) {
  return (
    <FormControl fullWidth size="small">
      <InputLabel id="invoice-status-select" sx={{ pt: 1 }}>
        {label}
      </InputLabel>

      <Controller
        name={name}
        control={control}
        rules={{ required: `${label} is required` }}
        defaultValue={defaultValue ? defaultValue : ""}
        render={({ field }) => {
          const handleChange = (event) => {
            if (setProvince) {
              const filterProvince = data?.filter(
                (province) => province.name === event.target.value
              );
              setProvince(filterProvince[0].id);
            }
            field.onChange(event.target.value);
          };
          return (
            <>
              <Select
                {...field}
                fullWidth
                onChange={handleChange}
                label={label}
                placeholder={placeholder}
                value={field.value ? field.value : ""}
                error={!!errors[name]}
                size="medium"
              >
                {data?.map((item, index) => (
                  <MenuItem
                    key={index}
                    value={item?._id ? item?._id : item?.name}
                  >
                    {item?.name || item?.propertyName}
                  </MenuItem>
                ))}
              </Select>
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
