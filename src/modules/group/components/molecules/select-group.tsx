import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Select,
  Typography,
  useTheme,
} from "@mui/material";
import { Group } from "@/modules/group/models";
import {
  AddCircleIcon,
  ArrowDown01Icon,
  Share01Icon,
  TimeManagementCircleIcon,
  UserGroupIcon,
} from "hugeicons-react";
import { useMemo, useState } from "react";
import { GroupForm } from "../organisms";
import { useGroupContext } from "../../context/group-context";

// interface SelectGroupProps {}

export const SelectGroup = () => {
  const theme = useTheme();
  const {
    group: selectedGroup,
    groupsList,
    updateSelectedGroup,
  } = useGroupContext();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [openGroupForm, setOpenGroupForm] = useState(false);

  const handleUpdateGroupSelected = (group: Group) => {
    updateSelectedGroup(group);
    handleClose();
  };

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    if (!selectedGroup?.id) {
      setOpenGroupForm(true);
      return;
    }

    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const groupsListOptions = useMemo(
    () => groupsList?.filter((group) => group.id !== selectedGroup?.id),
    [groupsList, selectedGroup?.id]
  );

  return (
    <>
      <Box>
        <Box
          display="flex"
          alignItems="center"
          borderRadius={8}
          height={64}
          bgcolor={theme.palette.background.paper}
          padding={1}
          gap={1}
          sx={{ flexGrow: 1, minWidth: 0, cursor: "pointer" }}
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
                width: {
                  xs: "65px",
                  sm: "150px",
                  md: "200px",
                },
              }}
            >
              {selectedGroup?.name || "Crie um grupo"}
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
          {selectedGroup?.id && (
            <Box>
              <MenuItem color="primary" disabled>
                <Box display="flex" alignItems="center" gap={1}>
                  <TimeManagementCircleIcon
                    size={20}
                    color={theme.palette.primary.main}
                  />
                  <Typography variant="body1" color="primary">
                    Administrar grupo
                  </Typography>
                </Box>
              </MenuItem>
              <MenuItem disabled>
                <Box display="flex" alignItems="center" gap={1}>
                  <Share01Icon size={20} color={theme.palette.primary.main} />
                  <Typography variant="body1" color="primary">
                    Convidar para o grupo
                  </Typography>
                </Box>
              </MenuItem>
            </Box>
          )}

          {!!groupsListOptions?.length && (
            <MenuItem disabled>
              <Typography variant="overline">Trocar de grupo</Typography>
            </MenuItem>
          )}

          {groupsListOptions?.map((group: Group) => (
            <MenuItem
              key={group.id}
              onClick={() => handleUpdateGroupSelected(group)}
            >
              <Typography variant="body1">{group.name}</Typography>
            </MenuItem>
          ))}

          <Divider />
          <Box display="flex" justifyContent="center" padding={1}>
            <Button
              variant="contained"
              size="small"
              startIcon={<AddCircleIcon size={20} />}
              onClick={() => setOpenGroupForm(true)}
            >
              Novo grupo
            </Button>
          </Box>
        </Menu>
      </Box>

      <GroupForm open={openGroupForm} onClose={() => setOpenGroupForm(false)} />
    </>
  );
};
