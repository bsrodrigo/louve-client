import {
  Avatar,
  Box,
  Typography,
  useColorScheme,
  useTheme,
} from "@mui/material";

import { Logo, ThemeModeSwitch } from "@/modules/core/components/atoms";

interface TopBarProps {}

export const TopBar = ({}: TopBarProps): JSX.Element => {
  const theme = useTheme();
  const { mode, systemMode, setMode } = useColorScheme();

  const currentMode = mode === "system" ? systemMode : mode;

  return (
    <Box
      height={72}
      display="flex"
      justifyContent="flex-end"
      alignItems="center"
    >
      <Box>
        <ThemeModeSwitch
          sx={{ m: 1 }}
          checked={currentMode === "dark"}
          onChange={(_event, checked) => {
            setMode(checked ? "dark" : "light");
          }}
        />
      </Box>

      <Box
        display="flex"
        alignItems="center"
        borderRadius={8}
        height={64}
        bgcolor={theme.palette.background.paper}
        padding={1}
        gap={1}
      >
        <Box padding={1}>
          <Typography variant="caption">Seja muito,</Typography>
          <Typography variant="body2">Bem vindo!</Typography>
        </Box>

        <Avatar
          sx={{
            width: 48,
            height: 48,
            bgcolor: theme.palette.background.paper,
          }}
        >
          <Logo width={24} />
        </Avatar>
      </Box>
    </Box>
  );
};
