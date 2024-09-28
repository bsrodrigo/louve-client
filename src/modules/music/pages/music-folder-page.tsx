import { Box } from "@mui/material";
import { Header } from "@/modules/core/components/molecules";
import { MusicFolderContent } from "@/modules/music/components/organisms";

const MusicFolderPage = (): JSX.Element => {
  return (
    <Box>
      <Header
      title="Músicas"
        breadcrumbs={[
          {
            label: "Home",
            redirectTo: "/",
          },
          { label: "Musicas ", redirectTo: "/musics" },
          { label: "Pastas ", redirectTo: "/musics/folders" },
          { label: "Músicas" },
        ]}
      />

      <MusicFolderContent />
    </Box>
  );
};

MusicFolderPage.displayName = "MusicFolderPage";

export default MusicFolderPage;
