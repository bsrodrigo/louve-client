import { Box, useTheme } from "@mui/material";

import { Header } from "@/modules/core/components/molecules";
import { MusicDetailsContent } from "@/modules/music/components/organisms";

const MusicDetails = (): JSX.Element => {
  return (
    <Box>
      <Header
        title="Kit de apoio"
        breadcrumbs={[
          {
            label: "Home",
            redirectTo: "/",
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
