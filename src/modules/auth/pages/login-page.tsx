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

const LoginPage = (): JSX.Element => {
  const navigate = useNavigate();
  const { loading, user, getLogin } = useAuthContext();
  const { mode, systemMode } = useColorScheme();
  const currentMode = mode === "system" ? systemMode : mode;

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async () => {
    try {
      if (!email || !password) {
        alert("Preencha todos os campos");
        return;
      }
      await getLogin(email, password);
    } catch (error: any) {
      console.error({ error });
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

          <Box display="flex" flexDirection="column" gap={1}>
            <Typography variant="h5" component="div" gutterBottom>
              Login
            </Typography>

            <TextField
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <PasswordTextField
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="Password"
              variant="outlined"
              fullWidth
              margin="normal"
            />

            <Button
              variant="outlined"
              color="primary"
              size="large"
              onClick={handleLogin}
              endIcon={loading && <CircularProgress size={20} />}
              disabled={loading}
            >
              Entrar
            </Button>
          </Box>

          <Button
            variant="text"
            color="primary"
            size="large"
            onClick={() => navigate("/auth/register")}
            disabled={loading}
          >
            Criar conta
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

LoginPage.displayName = "LoginPage";
export default LoginPage;
