import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { Controller } from "react-hook-form";

export default function PasswordInput({
  control,
  name,
  required,
  label,
  placeholder,
  errors,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <FormControl fullWidth size="small">
      <Controller
        name={name}
        control={control}
        rules={required && { required: `${label} is required` }}
        render={({ field: { value, onChange, onBlur } }) => (
          <>
            <TextField
              label={label}
              value={value || ""}
              onBlur={onBlur}
              onChange={onChange}
              type={showPassword ? "text" : "password"}
              placeholder={placeholder}
              autoComplete="current-password"
              error={!!errors[name]}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleTogglePasswordVisibility}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            {errors[name] && (
              <FormHelperText error>{errors[name].message}</FormHelperText>
            )}
          </>
        )}
      />
    </FormControl>
  );
}
