import { useNavigate } from "react-router-dom";

import { LinkSquare02Icon, Share08Icon } from "hugeicons-react";

import { MusicKitsFolder } from "@/modules/music/models";
import { Box, Card, IconButton, Typography, useTheme } from "@mui/material";

interface MusicKitsFolderCardProps {
  musicKitsFolder: MusicKitsFolder;
}

export const MusicKitsFolderCard = ({
  musicKitsFolder,
}: MusicKitsFolderCardProps): JSX.Element => {
  const theme = useTheme();
  const navigate = useNavigate();

  const redirectPath = `/musics/folders/${musicKitsFolder?.id}`;

  const handleShare = async () => {
    const shareUrl = `https://louveweb.vercel.app${redirectPath}`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Louve App",
          text: "Tenha acesso aos louvores do seu grupo na palma da sua mão!",
          url: shareUrl,
        });
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
    <Card
      sx={{
        flexGrow: 1,
        width: 480,
        [theme.breakpoints.down("sm")]: {
          width: "100%",
        },
      }}
    >
      <Box display="flex" flexDirection="column" gap={4}>
        <Box>
          <Typography variant="h6">{musicKitsFolder?.name}</Typography>
          {musicKitsFolder?.description && (
            <Typography variant="body1" color="textSecondary" fontWeight={700}>
              {musicKitsFolder.description}
            </Typography>
          )}
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
            onClick={() => navigate(redirectPath)}
          >
            <LinkSquare02Icon />
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
};
