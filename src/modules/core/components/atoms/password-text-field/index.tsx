import { useState } from "react";
import { IconButton, TextField, TextFieldProps } from "@mui/material";
import { ViewIcon, ViewOffSlashIcon } from "hugeicons-react";

interface PasswordTextFieldProps extends Omit<TextFieldProps, "type"> {}

export const PasswordTextField = ({
  ...props
}: PasswordTextFieldProps): JSX.Element => {
  const [showPassword, setShowPassword] = useState(false);

  const handleToggleShow = () => {
    setShowPassword(!showPassword);
  };

  return (
    <TextField
      type={showPassword ? "text" : "password"}
      label="Senha"
      slotProps={{
        input: {
          endAdornment: (
            <IconButton
              aria-label={showPassword ? "Esconder a senha" : "Mostrar a senha"}
              onClick={handleToggleShow}
            >
              {showPassword ? <ViewIcon /> : <ViewOffSlashIcon />}
            </IconButton>
          ),
        },
      }}
      {...props}
    />
  );
};
