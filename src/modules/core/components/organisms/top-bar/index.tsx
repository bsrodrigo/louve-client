import {
  Avatar,
  Box,
  Typography,
  useColorScheme,
  useTheme,
} from "@mui/material";

import { Logo, ThemeModeSwitch } from "@/modules/core/components/atoms";
import { useAuthContext } from "@/modules/auth/context/auth-context";
import { UserDropdown } from "@/modules/core/components/organisms";

interface TopBarProps {}

export const TopBar = ({}: TopBarProps): JSX.Element => {
  const theme = useTheme();
  const { user } = useAuthContext();
  const { mode, systemMode, setMode } = useColorScheme();

  const currentMode = mode === "system" ? systemMode : mode;
  const firstName = user?.displayName?.split(" ")[0];

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

      <UserDropdown />
    </Box>
  );
};
