import React, { useState, useRef, useEffect } from "react";
import { Box, IconButton, Slider, Typography, useTheme } from "@mui/material";
import { PauseIcon, PlayIcon } from "hugeicons-react";

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

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      setProgress((audio.currentTime / audio.duration) * 100);
    };

    audio.addEventListener("timeupdate", updateProgress);
    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
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

  useEffect(() => {
    if ("mediaSession" in navigator) {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: title,
        artist: artist,
        artwork: [{ src: albumArt, sizes: "512x512", type: "image/png" }],
      });

      navigator.mediaSession.setActionHandler("play", () => {
        if (audioRef.current) {
          audioRef.current.play();
          setIsPlaying(true);
        }
      });

      navigator.mediaSession.setActionHandler("pause", () => {
        if (audioRef.current) {
          audioRef.current.pause();
          setIsPlaying(false);
        }
      });

      navigator.mediaSession.setActionHandler("seekbackward", () => {
        if (audioRef.current) {
          audioRef.current.currentTime = Math.max(
            audioRef.current.currentTime - 10,
            0
          );
        }
      });

      navigator.mediaSession.setActionHandler("seekforward", () => {
        if (audioRef.current) {
          audioRef.current.currentTime = Math.min(
            audioRef.current.currentTime + 10,
            audioRef.current.duration
          );
        }
      });
    }
  }, [navigator]);

  return (
    <Box
      display="flex"
      alignItems="center"
      bgcolor={noBgColor ? "none" : theme.palette.background.default}
      borderRadius={2}
      padding={theme.spacing(1)}
      width="100%"
    >
      <IconButton onClick={togglePlayPause} size="small">
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </IconButton>
      <Slider
        value={progress}
        onChange={handleSliderChange}
        aria-labelledby="audio-progress-slider"
        sx={{ mx: 2 }}
      />
      <Typography variant="body2">
        {Math.floor((audioRef.current?.currentTime || 0) / 60)}:
        {Math.floor((audioRef.current?.currentTime || 0) % 60)
          .toString()
          .padStart(2, "0")}
      </Typography>
      <audio ref={audioRef} src={src} />
    </Box>
  );
};
