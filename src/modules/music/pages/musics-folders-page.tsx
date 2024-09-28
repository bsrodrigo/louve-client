import { Box, useTheme } from "@mui/material";

import { Header } from "@/modules/core/components/molecules";
import { MusicsFoldersContent } from "@/modules/music/components/organisms";

const MusicsFoldersPage = (): JSX.Element => {
  return (
    <Box>
      <Header
        title="Pastas do grupo"
        breadcrumbs={[
          {
            label: "Home",
            redirectTo: "/",
          },
          {
            label: "Músicas",
            redirectTo: "/musics",
          },
          { label: "Pastas" },
        ]}
      />

      <MusicsFoldersContent />
    </Box>
  );
};

MusicsFoldersPage.displayName = "MusicsFoldersPage";

export default MusicsFoldersPage;
