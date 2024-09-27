import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  TextField,
  Button,
  Typography,
  Box,
  useColorScheme,
  Paper,
  CircularProgress,
} from "@mui/material";

import {
  LogoWithName,
  LogoWithNameLight,
  PasswordTextField,
} from "@/modules/core/components/atoms";
import { useAuthContext } from "@/modules/auth/context/auth-context";

const RegisterPage = (): JSX.Element => {
  const { user, loading, createUser } = useAuthContext();
  const { mode, systemMode } = useColorScheme();
  const navigate = useNavigate();

  const currentMode = mode === "system" ? systemMode : mode;

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [name, setName] = useState<string>("");

  const handleRegister = async () => {
    try {
      if (!email || !password || !confirmPassword) {
        alert("Preencha todos os campos");
        return;
      }
      if (password.length < 6) {
        alert("A senha deve ter no mínimo 6 caracteres");
        return;
      }
      if (password !== confirmPassword) {
        alert("As senhas não conferem");
        return;
      }

      createUser(email, password, name);
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error({ errorCode, errorMessage });
    }
  };

  useEffect(() => {
    if (user?.uid) {
      navigate("/");
    }
  }, [user]);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      width="100%"
      padding={1}
    >
      <Paper>
        <Box
          display="flex"
          flexDirection="column"
          maxWidth={600}
          width="85vw"
          gap={3}
          padding={3}
        >
          <Box display="flex" justifyContent="center">
            <Box width="80%" maxWidth={200}>
              {currentMode === "dark" ? (
                <LogoWithNameLight width="100%" />
              ) : (
                <LogoWithName width="100%" />
              )}
            </Box>
          </Box>

          <Box display="flex" flexDirection="column" gap={2}>
            <Typography variant="h5" component="div">
              Cadastro
            </Typography>

            <TextField
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              label="Nome"
              variant="outlined"
              placeholder="Nome e sobrenome"
              fullWidth
            />
            <TextField
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
              variant="outlined"
              placeholder="email@exemplo.com"
              fullWidth
            />
            <TextField
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="Password"
              type="password"
              variant="outlined"
              placeholder="**********"
              fullWidth
            />
            <PasswordTextField
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              label="Confirme a senha"
              variant="outlined"
              placeholder="**********"
              fullWidth
            />

            <Button
              variant="outlined"
              color="primary"
              size="large"
              onClick={handleRegister}
              endIcon={loading && <CircularProgress size={20} />}
              disabled={loading}
            >
              Cadastrar
            </Button>
          </Box>

          <Button
            variant="text"
            color="primary"
            size="large"
            onClick={() => navigate("/auth")}
            disabled={loading}
          >
            Fazer login
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

RegisterPage.displayName = "RegisterPage";

export default RegisterPage;
