import {
  ArrowExpand01Icon,
  ArrowExpandIcon,
  CancelCircleIcon,
  CloudDownloadIcon,
  Link01Icon,
  SquareArrowDiagonal01Icon,
  SquareArrowShrink02Icon,
} from "hugeicons-react";

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
import { useEffect, useRef, useState } from "react";
import { useAnimate } from "framer-motion";

export interface MusicItemSectionProps {
  title?: string;
  src?: string;
  artist?: string;
  documentType?: string;
  type?: "audio" | "document" | "link";
  link?: string;
  noBgColorAudioPlayer?: string;
  hideTitle?: boolean;
}

export const MusicItemSection = ({
  title,
  link,
  src,
  artist,
  documentType,
  type,
  hideTitle,
}: MusicItemSectionProps): JSX.Element => {
  const theme = useTheme();
  const [scope, animate] = useAnimate();
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  useEffect(() => {
    console.log({ isExpanded });
    console.log({ scope: scope?.current });
    if (!scope?.current) {
      return;
    }

    if (isExpanded) {
      animate(scope?.current, {
        position: "fixed",
        width: "100vw",
        height: "100vh",
        top: 0,
        left: 0,
        zIndex: 999,
      });
    } else {
      animate(scope?.current, {
        position: "unset",
        width: "auto",
        height: "auto",
        top: "auto",
        left: "auto",
        zIndex: "unset",
      });
    }
  }, [isExpanded, scope]);

  const handleDownload = () => {
    if (!src) {
      alert("Arquivo não encontrado");
      return;
    }

    const linkElement = document.createElement("a");
    linkElement.href = src;
    linkElement.download = title || "file-downloaded";
    document.body.appendChild(linkElement);
    linkElement.click();
    document.body.removeChild(linkElement);
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
          {title && !hideTitle && (
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
            <AudioPlayer title={title} artist={artist} src={src} />
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
          ref={scope}
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

              <IconButton
                color="primary"
                size="small"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? (
                  <CancelCircleIcon />
                ) : (
                  <SquareArrowDiagonal01Icon />
                )}
              </IconButton>
            </Box>
            <FileViewer file={src} type={documentType} />
          </Container>
        </Box>
      )}
    </Box>
  );
};
