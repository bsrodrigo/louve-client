import { useEffect, useState } from "react";

import { Box } from "@mui/material";

import { musicKitsFolders } from "@/modules/music/infra/data";
import { MusicKitCard } from "@/modules/music/components/molecules";
import { MusicKit } from "@/modules/music/models";

export const AllMusicsContent = (): JSX.Element => {
  const [musicKits, setMusicKits] = useState<MusicKit[]>([]);

  useEffect(() => {
    const musicKitsData: MusicKit[] = [];

    musicKitsFolders?.forEach(({ musicKits }) => {
      if (!musicKits?.length) return;

      musicKitsData.push(...musicKits);
    });

    setMusicKits(musicKitsData);
  }, []);

  return (
    <Box display="flex" alignItems="center" flexWrap="wrap" gap={4}>
      {musicKits?.length > 0 &&
        musicKits?.map((musicKit) => (
          <MusicKitCard
            key={`music-kit-item-${musicKit?.id}`}
            musicKit={musicKit}
          />
        ))}
    </Box>
  );
};
