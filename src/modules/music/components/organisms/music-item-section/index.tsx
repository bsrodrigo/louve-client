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
  title: string;
  src?: string;
  documentType?: string;
  type?: "audio" | "document" | "link";
  link?: string;
}

export const MusicItemSection = ({
  title,
  link,
  src,
  documentType,
  type,
}: MusicItemSectionProps): JSX.Element => {
  const theme = useTheme();

  console.log({ title, link, src, documentType, type });

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
          {title}
        </Link>
      </Box>
    );
  }

  return (
    <Box id={`music-section-item-${type}-${documentType}`} width="100%">
      {type === "audio" && src && (
        <>
          <Typography variant="overline" color="textSecondary">
            {title}
          </Typography>
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
              size="large"
              color="primary"
              onClick={() => {
                const link = document.createElement("a");
                link.href = src;
                link.download = title;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              <CloudDownloadIcon />
            </IconButton>
          </Box>

          {/* TODO rever necessidade da lib */}
          {/* <AudioPlayer
            onloadstart={(event) => {
              setLoading(true);
              console.log("onloadstart", { event });
            }}
            onloadedmetadata={(event) => {
              setLoading(false);
              console.log("onloadedmetadata", { event });
            }}
            onwaiting={(event) => {
              console.log("onwaiting", { event });
            }}
            key={`audio-${title}`}
            src={src}
            minimal={true}
            width={
              window.innerWidth > 600
                ? window.innerWidth * 0.5
                : window.innerWidth - 80
            }
            trackHeight={40}
            barWidth={3}
            gap={1}
            visualise={true}
            backgroundColor={theme.palette.background.default}
            barColor={theme.palette.primary.main}
            barPlayedColor={theme.palette.primary.dark}
            skipDuration={2}
            showLoopOption={true}
            showVolumeControl={true}
            hideSeekBar={true}
            hideSeekKnobWhenPlaying={true}
          /> */}
        </>
      )}

      {type === "document" && src && documentType && (
        <Container sx={{ padding: "0 !important", margin: 0 }} maxWidth="lg">
          <Box display="flex" alignItems="center" justifyContent="flex-end">
            <Button
              endIcon={<CloudDownloadIcon />}
              aria-label="download"
              size="large"
              color="primary"
              onClick={() => {
                const link = document.createElement("a");
                link.href = src;
                link.download = title;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              Baixar
            </Button>
          </Box>
          <FileViewer file={src} type={documentType} />
        </Container>
      )}
    </Box>
  );
};
