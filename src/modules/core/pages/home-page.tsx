import { useNavigate } from "react-router-dom";
import { LinkSquare02Icon, Share08Icon } from "hugeicons-react";
import {
  Box,
  Card,
  CardHeader,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import { Header } from "@/modules/core/components/molecules";
import { FileViewer } from "@/modules/core/components/organisms";

const HomePage = (): JSX.Element => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleShare = async () => {
    const shareUrl = "https://louveweb.vercel.app/music-details";
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Louve App",
          text: "Tenha acesso aos louvores do seu grupo na palma da sua mão!",
          url: shareUrl,
        });
        console.log("Conteúdo compartilhado com sucesso!");
      } catch (error) {
        console.error("Erro ao compartilhar:", error);
      }
    } else {
      navigator.clipboard.writeText(shareUrl).then(
        () => {
          alert("Link copiado para a área de transferência!");
        },
        (err) => {
          console.error("Erro ao copiar link:", err);
        }
      );
    }
  };

  return (
    <Box>
      <Header
        title="Congresso 2024"
        breadcrumbs={[
          {
            label: "Home",
            redirectTo: "/",
          },
          { label: "Congresso " },
        ]}
      />

      <Box display="flex" alignItems="center" flexWrap="wrap" gap={4}>
        <Card
          sx={{
            flexGrow: 1,
            maxWidth: 600,
          }}
        >
          <Box display="flex" flexDirection="column" gap={4}>
            <Box>
              <Typography variant="h6">
                Tu és poderoso + Vida aos sepulcros
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Atualizado em: 22/01/2024
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="flex-end"
              alignItems="center"
              gap={1}
            >
              <IconButton
                color="primary"
                size="large"
                sx={{ bgcolor: theme.palette.action.hover }}
                aria-label="Compartilhar"
                onClick={handleShare}
              >
                <Share08Icon />
              </IconButton>
              <IconButton
                color="primary"
                size="large"
                aria-label="Abrir"
                sx={{ bgcolor: theme.palette.action.hover }}
                onClick={() => navigate("/music-details")}
              >
                <LinkSquare02Icon />
              </IconButton>
            </Box>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};
HomePage.displayName = "HomePage";

export default HomePage;
