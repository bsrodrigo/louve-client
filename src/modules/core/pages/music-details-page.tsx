import { Header } from "@/modules/core/components/molecules";
import {
  Box,
  Card,
  CardHeader,
  Divider,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import { FileViewer } from "@/modules/core/components/organisms";
import { AudioPlayer } from "react-audio-player-component";

const MusicDetails = (): JSX.Element => {
  const theme = useTheme();
  return (
    <Box>
      <Header
        title="Kit de louvor"
        breadcrumbs={[
          {
            label: "Home",
            redirectTo: "/",
          },
          { label: "Kit do louvor " },
        ]}
      />
      <Box display="flex" flexDirection="column" gap={6}>
        <Box>
          <Typography variant="overline" color="textSecondary">
            <b>Louvor</b>
          </Typography>
          <Typography variant="h5">
            Tu és poderoso + Vida aos sepulcros
          </Typography>
        </Box>

        <Box display="flex" flexDirection="column" gap={3}>
          <Typography variant="h5" color="textSecondary">
            Kit de voz
          </Typography>

          <Box>
            <Typography variant="overline" color="textSecondary">
              Música Original
            </Typography>
            <AudioPlayer
              src="assets/music.mp3"
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
          </Box>
        </Box>

        <Divider />

        <Box display="flex" flexDirection="column" gap={3}>
          <Typography variant="h5" color="textSecondary">
            Letra
          </Typography>

          <FileViewer />
        </Box>
      </Box>
    </Box>
  );
};
MusicDetails.displayName = "MusicDetails";

export default MusicDetails;
