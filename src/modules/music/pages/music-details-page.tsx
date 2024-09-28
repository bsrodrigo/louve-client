import { Box, useTheme } from "@mui/material";

import { Header } from "@/modules/core/components/molecules";
import { MusicDetailsContent } from "@/modules/music/components/organisms";
import { useLocation } from "react-router-dom";

const MusicDetails = (): JSX.Element => {
  const { pathname } = useLocation();

  const musicFolderId = pathname.split("/")[3];

  return (
    <Box>
      <Header
        title="Kit de apoio"
        breadcrumbs={[
          {
            label: "Home",
            redirectTo: "/",
          },
          { label: "Músicas ", redirectTo: "/musics" },
          { label: "Pastas ", redirectTo: "/musics/folders" },
          {
            label: "Pasta selecionada",
            redirectTo: `/musics/folders/${musicFolderId}`,
          },
          { label: "Kit de apoio " },
        ]}
      />

      <MusicDetailsContent />
    </Box>
  );
};

MusicDetails.displayName = "MusicDetails";

export default MusicDetails;
