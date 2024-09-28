import { useState } from "react";

import {
  useColorScheme,
  Avatar,
  Box,
  Menu,
  MenuItem,
  Typography,
  useTheme,
  useMediaQuery,
  IconButton,
} from "@mui/material";

import { Logo, ThemeModeSwitch } from "@/modules/core/components/atoms";
import { useAuthContext } from "@/modules/auth/context/auth-context";
import {
  ArrowDown01Icon,
  Logout04Icon,
  MoreVerticalCircle01Icon,
  MoreVerticalIcon,
  MoreVerticalSquare01Icon,
} from "hugeicons-react";
import { useNavigate } from "react-router-dom";

interface UserDropdownProps {}

export const UserDropdown = ({}: UserDropdownProps): JSX.Element => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  const { mode, systemMode, setMode } = useColorScheme();
  const { user, logout } = useAuthContext();

  const currentMode = mode === "system" ? systemMode : mode;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const firstName = user?.name?.split(" ")[0];
  const open = Boolean(anchorEl);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderMenu = (): JSX.Element => {
    if (user?.id) {
      return (
        <Menu
          sx={{ marginTop: 1 }}
          id="user-dropdown-menu"
          disableScrollLock={false}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <MenuItem>
            <ThemeModeSwitch
              checked={currentMode === "dark"}
              onChange={(_event, checked) => {
                setMode(checked ? "dark" : "light");
              }}
            />
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose();
              logout();
            }}
          >
            <Logout04Icon color={theme.palette.error.main} />
            <Typography typography="body2" ml={1}>
              Logout
            </Typography>
          </MenuItem>
        </Menu>
      );
    }

    return (
      <Menu
        sx={{ marginTop: 1 }}
        id="user-dropdown-menu"
        disableScrollLock={false}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            navigate("/auth");
          }}
        >
          <Typography typography="body2">Fazer Login</Typography>
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            navigate("/auth/register");
          }}
        >
          <Typography typography="body2">Cadatrar</Typography>
        </MenuItem>
        <MenuItem>
          <ThemeModeSwitch
            checked={currentMode === "dark"}
            onChange={(_event, checked) => {
              setMode(checked ? "dark" : "light");
            }}
          />
        </MenuItem>
      </Menu>
    );
  };

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        borderRadius={8}
        height={64}
        bgcolor={theme.palette.background.paper}
        padding={1}
        onClick={handleOpen}
        sx={{ cursor: "pointer" }}
      >
        <Avatar
          sx={{
            width: 48,
            height: 48,
            bgcolor: firstName
              ? theme.palette.primary.main
              : theme.palette.background.paper,
            marginRight: 1,
          }}
        >
          {firstName ? firstName?.[0] : <Logo width={24} />}
        </Avatar>

        {!isMobile && (
          <Box>
            <Typography variant="caption">Olá,</Typography>
            <Typography variant="body2">
              {firstName ? firstName : "Faça login"}
            </Typography>
          </Box>
        )}

        <IconButton size="small">
          <MoreVerticalCircle01Icon />
        </IconButton>
      </Box>

      {renderMenu()}
    </>
  );
};
