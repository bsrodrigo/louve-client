import { useState, useRef } from "react";
import { IconButton, TextField, TextFieldProps } from "@mui/material";
import { ViewIcon, ViewOffSlashIcon } from "hugeicons-react";

interface PasswordTextFieldProps extends Omit<TextFieldProps, "type"> {}

export const PasswordTextField = ({
  ...props
}: PasswordTextFieldProps): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleToggleShow = () => {
    setShowPassword((prev) => !prev);

    setTimeout(() => {
      inputRef.current?.focus();
      if (inputRef.current) {
        inputRef.current.setSelectionRange(
          inputRef.current.value.length,
          inputRef.current.value.length
        );
      }
    }, 0);
  };

  return (
    <TextField
      inputRef={inputRef}
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
