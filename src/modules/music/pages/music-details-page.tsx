import { Box, useTheme } from "@mui/material";

import { Header } from "@/modules/core/components/molecules";
import { MusicDetailsContent } from "@/modules/music/components/organisms";

const MusicDetails = (): JSX.Element => {
  return (
    <Box>
      <Header
        title="Kit da música"
        breadcrumbs={[
          {
            label: "Home",
            redirectTo: "/",
          },
          { label: "Kit da música " },
        ]}
      />
      <MusicDetailsContent />
    </Box>
  );
};

MusicDetails.displayName = "MusicDetails";

export default MusicDetails;
