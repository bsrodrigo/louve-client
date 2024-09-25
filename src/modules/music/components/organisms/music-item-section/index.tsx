import { AudioPlayer } from "react-audio-player-component";
import { Link01Icon } from "hugeicons-react";

import { Box, Link, Typography, useTheme } from "@mui/material";
import { FileViewer } from "@/modules/core/components/molecules";

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
      <Box display="flex" alignItems="center" gap={1}>
        <Link01Icon />

        <Link href={link} target="_blank" rel="noopener noreferrer">
          {title}
        </Link>
      </Box>
    );
  }

  return (
    <Box>
      {type === "audio" && src && (
        <>
          <Typography variant="overline" color="textSecondary">
            {title}
          </Typography>

          <AudioPlayer
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
          />
        </>
      )}

      {type === "document" && src && documentType && (
        <FileViewer file={src} type={documentType} />
      )}
    </Box>
  );
};
