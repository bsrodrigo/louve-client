import { Box, Button, Typography } from "@mui/material";
import { RenderSvg } from "@/modules/core/components/atoms";
import { Header } from "../components/molecules";
import { MusicNote01Icon, UserGroupIcon, UserIcon } from "hugeicons-react";
import { useNavigate } from "react-router-dom";
import { useGroupContext } from "@/modules/group/context/group-context";
import { GroupForm } from "@/modules/group/components/organisms";
import { useMemo, useState } from "react";
import { useAuthContext } from "@/modules/auth/context/auth-context";

const HomePage = (): JSX.Element => {
  const navigate = useNavigate();
  const { group } = useGroupContext();
  const { user } = useAuthContext();

  const [open, setOpen] = useState(false);

  const subTitle = useMemo(
    () => (group?.name ? `Bem vindo ao grupo ${group?.name}` : "Bem vindo!"),
    [group?.name]
  );

  const infoText = useMemo(() => {
    if (!user?.id) {
      return (
        <Typography variant="body1">
          Para dar início nessa jornada, você pode acessar seu usuário ou criar
          um.
        </Typography>
      );
    }

    if (!group?.id) {
      return (
        <Typography variant="body1">
          Para dar continuarmos nessa jornada, você pode criar um grupo ou
          acessar um já existente.
        </Typography>
      );
    }

    return (
      <Typography variant="body1">
        Vamos dar início a essa jornada, de ensaios organizados? Acesse suas
        músicas.
      </Typography>
    );
  }, [user?.id, group?.id]);

  const { buttonAction, buttonText, ButtonIcon } = useMemo(() => {
    if (!user?.id) {
      return {
        buttonAction: () => navigate("/auth"),
        buttonText: "Entrar",
        ButtonIcon: UserIcon,
      };
    }

    if (!group?.id) {
      return {
        buttonAction: () => setOpen(true),
        buttonText: "Criar um grupo",
        ButtonIcon: UserGroupIcon,
      };
    }

    return {
      buttonAction: () => navigate("/musics/folders/00002"),
      buttonText: "Músicas - Congresso 2024",
      ButtonIcon: MusicNote01Icon,
    };
  }, [user?.id, group?.id]);

  return (
    <>
      <Header
        title="Home"
        subTitle={subTitle}
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
          <Typography variant="body1" fontWeight={500}>
            Estou feliz em te ver por aqui!
          </Typography>

          {infoText}
        </Box>

        <Box display="flex" flexWrap="wrap" gap={2}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<ButtonIcon size={20} />}
            onClick={buttonAction}
            size="large"
            fullWidth
          >
            {buttonText}
          </Button>
        </Box>
      </Box>

      <GroupForm open={open} onClose={() => setOpen(false)} />
    </>
  );
};

HomePage.displayName = "HomePage";

export default HomePage;
