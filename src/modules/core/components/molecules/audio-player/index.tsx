import React, { useState, useRef, useEffect } from "react";
import { Box, IconButton, Slider, Typography, useTheme } from "@mui/material";
import {
  PauseIcon,
  PlayIcon,
  GoBackward10SecIcon,
  GoForward10SecIcon,
} from "hugeicons-react";

interface AudioPlayerProps {
  src: string;
  title?: string;
  artist?: string;
  albumArt?: string;
  noBgColor?: boolean;
}

export const AudioPlayer = ({
  src,
  title = "Tocando de Louve Web",
  artist = "Desconhecido",
  albumArt = "/assets/logo.png",
  noBgColor,
}: AudioPlayerProps): JSX.Element => {
  const theme = useTheme();

  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      setProgress((audio.currentTime / audio.duration) * 100);
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, []);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    const audio = audioRef.current;
    if (!audio) return;

    const newTime = (audio.duration * (newValue as number)) / 100;
    audio.currentTime = newTime;
    setProgress(newValue as number);
  };

  const rewind = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Math.max(audio.currentTime - 10, 0);
  };

  const forward = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Math.min(audio.currentTime + 10, audio.duration);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      bgcolor={noBgColor ? "none" : theme.palette.background.default}
      borderRadius={2}
      padding={theme.spacing(2)}
      paddingBottom={theme.spacing(1)}
      width="100%"
      boxShadow={3}
    >
      <Box display="flex" alignItems="center" width="100%">
        <Typography variant="body2">
          {Math.floor((audioRef.current?.currentTime || 0) / 60)}:
          {Math.floor((audioRef.current?.currentTime || 0) % 60)
            .toString()
            .padStart(2, "0")}
        </Typography>
        <Slider
          value={progress}
          onChange={handleSliderChange}
          aria-labelledby="audio-progress-slider"
          sx={{
            mx: 2,
            color: theme.palette.primary.main,
            "& .MuiSlider-thumb": {
              backgroundColor: "#fff",
            },
            "& .MuiSlider-track": {
              backgroundColor: theme.palette.primary.main,
            },
            "& .MuiSlider-rail": {
              backgroundColor: theme.palette.grey[400],
            },
          }}
        />
        <Typography variant="body2">
          {Math.floor(duration / 60)}:{Math.floor(duration % 60)
            .toString()
            .padStart(2, "0")}
        </Typography>
      </Box>

      <Box display="flex" alignItems="center" gap={2}>
        <IconButton onClick={rewind} size="small" color="primary">
          <GoBackward10SecIcon />
        </IconButton>
        <IconButton onClick={togglePlayPause} size="small" color="primary">
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </IconButton>
        <IconButton onClick={forward} size="small" color="primary">
          <GoForward10SecIcon />
        </IconButton>
      </Box>

      <audio ref={audioRef} src={src} />
    </Box>
  );
};
