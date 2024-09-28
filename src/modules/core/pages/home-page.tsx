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

const HomePage = (): JSX.Element => {
  const theme = useTheme();
  const navigate = useNavigate();

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
        {/* <Typography variant="h4" color={theme.palette.grey[500]}>
          Seja muito bem vindo!
        </Typography> */}
        <Box maxWidth={700}>
          <RenderSvg type="SINGING_BIRD" />
        </Box>

        <Box textAlign="center">
          <Typography variant="body1">
            Huumm... Parece que você ainda não está e nenhum grupo
          </Typography>
          <Typography variant="body1">
            Que tal você criar um grupo pra gente começar a cantar por aí?
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
            onClick={() =>
              alert(
                "Isso ainda está em desenvolvimento :( \nPor enquanto você pode acessar as músicas demos, que são as músicas do congresso da UMADEBTS - Pq. Pinheiros"
              )
            }
            size="large"
            fullWidth
          >
            Criar um grupo
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
HomePage.displayName = "HomePage";

export default HomePage;
