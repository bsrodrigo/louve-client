import { Box, Button, Typography, useTheme } from "@mui/material";
import { RenderSvg } from "@/modules/core/components/atoms";
import { Header } from "../components/molecules";
import {
  GroupItemsIcon,
  MusicNote01Icon,
  UserGroupIcon,
  UserIcon,
} from "hugeicons-react";
import { useNavigate } from "react-router-dom";
import { GroupProvider } from "@/modules/group/context/group-context";
import { GroupForm } from "@/modules/group/components/organisms";
import { useState } from "react";

const HomePage = (): JSX.Element => {
  const theme = useTheme();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  return (
    <Box>
      <Header
        title="Olá, bem vindo!"
        breadcrumbs={[
          {
            label: "Home",
          },
        ]}
      />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        width="100%"
        gap={2}
      >
        <Box maxWidth={700}>
          <RenderSvg type="SINGING_BIRD" />
        </Box>

        <Box textAlign="center">
          <Typography variant="body1">
            Huumm... Parece que você ainda não está em nenhum grupo
          </Typography>
          <Typography variant="body1">
            Que tal criar um grupo pra gente começar a cantar por aí?
          </Typography>
        </Box>

        <Box display="flex" flexWrap="wrap" gap={2}>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<MusicNote01Icon />}
            onClick={() => navigate("/musics")}
            size="large"
            fullWidth
          >
            Acessar músicas do Demo
          </Button>
          <Button
            variant="contained"
            color="primary"
            startIcon={<UserGroupIcon />}
            onClick={() => setOpen(true)}
            size="large"
            fullWidth
          >
            Criar um grupo
          </Button>
        </Box>
        <GroupProvider>
          <GroupForm open={open} onClose={() => setOpen(false)} />
        </GroupProvider>
      </Box>
    </Box>
  );
};
HomePage.displayName = "HomePage";

export default HomePage;
