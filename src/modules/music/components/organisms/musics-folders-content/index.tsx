import { musicKitsFolders } from "@/modules/music/infra/data";
import { Box } from "@mui/material";
import { MusicKitsFolderCard } from "../../molecules";

export const MusicsFoldersContent = (): JSX.Element => {
  return (
    <Box display="flex" flexDirection="column" gap={2} marginBottom={3}>
      {musicKitsFolders?.length > 0 &&
        musicKitsFolders?.map((musicKitFolder) => (
          <MusicKitsFolderCard
            key={`music-kit-folder-item-${musicKitFolder?.id}`}
            musicKitsFolder={musicKitFolder}
          />
        ))}
    </Box>
  );
};
