import { CloudDownloadIcon, Link01Icon } from "hugeicons-react";

import {
  Box,
  Button,
  Container,
  IconButton,
  Link,
  Typography,
  useTheme,
} from "@mui/material";
import { AudioPlayer, FileViewer } from "@/modules/core/components/molecules";

export interface MusicItemSectionProps {
  title?: string;
  src?: string;
  documentType?: string;
  type?: "audio" | "document" | "link";
  link?: string;
  noBgColorAudioPlayer?: string;
}

export const MusicItemSection = ({
  title,
  link,
  src,
  documentType,
  type,
}: MusicItemSectionProps): JSX.Element => {
  const theme = useTheme();

  const handleDownload = () => {
    if (!src) {
      alert("Arquivo não encontrado");
      return;
    }

    const link = document.createElement("a");
    link.href = src;
    link.download = title || "file-downloaded";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!src && !link) {
    return <></>;
  }

  if (type === "link" && link) {
    return (
      <Box
        id={`music-section-item-${type}-${documentType}`}
        display="flex"
        alignItems="center"
        gap={1}
      >
        <Link01Icon />

        <Link href={link} target="_blank" rel="noopener noreferrer">
          {title || link}
        </Link>
      </Box>
    );
  }

  return (
    <Box id={`music-section-item-${type}-${documentType}`} width="100%">
      {type === "audio" && src && (
        <>
          {title && (
            <Typography variant="overline" color="textSecondary">
              {title}
            </Typography>
          )}

          <Box
            display="flex"
            alignItems="center"
            gap={1}
            maxWidth={840}
            width="100%"
          >
            <AudioPlayer src={src} />

            <IconButton
              aria-label="download"
              size="small"
              color="primary"
              onClick={handleDownload}
            >
              <CloudDownloadIcon />
            </IconButton>
          </Box>
        </>
      )}

      {type === "document" && src && documentType && (
        <Box
          bgcolor={theme.palette.background.default}
          borderRadius={4}
          paddingTop={2}
          paddingBottom={2}
        >
          <Container sx={{ padding: "0 !important" }} maxWidth="lg">
            <Box
              display="flex"
              alignItems="center"
              justifyContent="flex-end"
              paddingRight={2}
            >
              <Button
                endIcon={<CloudDownloadIcon />}
                aria-label="download"
                size="large"
                color="primary"
                onClick={handleDownload}
              >
                Baixar
              </Button>
            </Box>
            <FileViewer file={src} type={documentType} />
          </Container>
        </Box>
      )}
    </Box>
  );
};
