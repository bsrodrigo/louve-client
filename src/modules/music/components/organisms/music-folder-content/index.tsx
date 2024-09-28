import { Box, Typography, useTheme } from "@mui/material";
import { musicKitsFolders } from "@/modules/music/infra/data";
import { MusicKitCard } from "@/modules/music/components/molecules";
import { useParams } from "react-router-dom";
import { Folder01Icon } from "hugeicons-react";

export const MusicFolderContent = (): JSX.Element => {
  const theme = useTheme();
  const { folderId } = useParams();

  const musicKitsFolder = musicKitsFolders.find(
    (folder) => folder.id === folderId
  );

  const { name, description, musicKits } = musicKitsFolder || {};
  return (
    <Box display="flex" flexDirection="column" gap={4}>
      <Box marginBottom={3}>
        <Box display="flex" alignItems="center" gap={2}>
          {/* <Folder01Icon size={48} color={theme.palette.grey[500]} /> */}
          <Box>
            <Typography variant="h4" >
              {name}
            </Typography>
            <Typography variant="h6" color="textSecondary">
              {description}
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box display="flex" alignItems="center" flexWrap="wrap" gap={4}>
        {musicKits &&
          musicKits?.length > 0 &&
          musicKits.map((musicKit) => (
            <MusicKitCard
              key={`music-kit-item-${musicKit?.id}`}
              musicKit={musicKit}
            />
          ))}
      </Box>
    </Box>
  );
};
