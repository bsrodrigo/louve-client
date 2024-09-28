import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  useTheme,
} from "@mui/material";
import { Group } from "@/modules/group/models";
import { ArrowDown01Icon, UserGroupIcon } from "hugeicons-react";
import { useState } from "react";

interface SelectGroupProps {
  groups: Group[];
  onSelectGroup: (groupId: string) => void;
}

export const SelectGroup = ({ groups, onSelectGroup }: SelectGroupProps) => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Box
        display="flex"
        alignItems="center"
        borderRadius={8}
        height={64}
        bgcolor={theme.palette.background.paper}
        padding={1}
        gap={1}
        sx={{ flexGrow: 1, minWidth: 0 }} // Garante que o Box pode encolher
        onClick={handleOpen}
      >
        <Avatar
          sx={{
            width: 48,
            height: 48,
            bgcolor: theme.palette.primary.main,
          }}
        >
          <UserGroupIcon width={24} />
        </Avatar>

        <Box sx={{ flexGrow: 1, minWidth: 0 }}>
          <Typography variant="overline" color="textSecondary">
            Grupo
          </Typography>
          <Typography
            variant="body2"
            marginTop={-1}
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              minWidth: 0,
              // Media queries para definir larguras fixas
              width: {
                xs: "65px", // largura para telas pequenas
                sm: "150px", // largura para telas médias
                md: "200px", // largura para telas grandes
              },
            }}
          >
            UMADEBTS - Pq. Pinheiros
          </Typography>
        </Box>

        <IconButton>
          <ArrowDown01Icon />
        </IconButton>
      </Box>

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
        <MenuItem disabled>
          <Typography variant="overline">Selecione o grupo</Typography>
        </MenuItem>
        <MenuItem>
          <Typography variant="body1">UMADEBTS - Pq. Pinheiros</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};
