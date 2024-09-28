import { Box } from "@mui/material";

import { Header } from "@/modules/core/components/molecules";
import { AllMusicsContent } from "@/modules/music/components/organisms";

const MusicDetails = (): JSX.Element => {
  return (
    <Box>
      <Header
        title="Todas músicas"
        subTitle="As músicas de todas as pastas do grupo estão listadas aqui"
        breadcrumbs={[
          {
            label: "Home",
            redirectTo: "/",
          },
          { label: "Músicas " },
        ]}
      />

      <AllMusicsContent />
    </Box>
  );
};

MusicDetails.displayName = "MusicDetails";

export default MusicDetails;
