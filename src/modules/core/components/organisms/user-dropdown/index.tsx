import { useState } from "react";

import {
  Avatar,
  Box,
  Menu,
  MenuItem,
  Typography,
  useTheme,
} from "@mui/material";

import { Logo } from "@/modules/core/components/atoms";
import { useAuthContext } from "@/modules/auth/context/auth-context";
import { Logout04Icon } from "hugeicons-react";
import { useNavigate } from "react-router-dom";

interface UserDropdownProps {}

export const UserDropdown = ({}: UserDropdownProps): JSX.Element => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { user, logout } = useAuthContext();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const firstName = user?.displayName?.split(" ")[0];
  const open = Boolean(anchorEl);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderMenu = (): JSX.Element => {
    if (user?.uid) {
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
              logout();
            }}
          >
            <Logout04Icon color={theme.palette.error.main} />
            <Typography typography="body2" ml={1}>
              Logout
            </Typography>
          </MenuItem>
          <MenuItem />
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
        gap={1}
        onClick={handleOpen}
      >
        <Box padding={1}>
          <Typography variant="caption">Olá,</Typography>
          <Typography variant="body2">
            {firstName ? firstName : "Faça login"}
          </Typography>
        </Box>

        <Avatar
          sx={{
            width: 48,
            height: 48,
            bgcolor: firstName
              ? theme.palette.primary.main
              : theme.palette.background.paper,
          }}
        >
          {firstName ? firstName?.[0] : <Logo width={24} />}
        </Avatar>
      </Box>

      {renderMenu()}
    </>
  );
};
