import { Box, Divider, Typography } from "@mui/material";

import { MusicContentSection } from "@/modules/music/components/molecules";
import { MusicItemSection } from "@/modules/music/components/organisms";
import { musicKitData } from "@/modules/music/infra/data";

export const MusicDetailsContent = (): JSX.Element => {
  return (
    <Box display="flex" flexDirection="column" gap={4}>
      <Box>
        <Typography variant="overline" color="textSecondary">
          <b>Música</b>
        </Typography>
        <Typography variant="h4">{musicKitData?.name}</Typography>
      </Box>

      <MusicContentSection title="Links úteis">
        {musicKitData?.usefulLinks?.map((link, index) => (
          <MusicItemSection
            key={`link-kit-${index}`}
            title={link?.title}
            link={link?.link}
            type="link"
          />
        ))}
      </MusicContentSection>

      <MusicContentSection title="Kit de voz">
        {musicKitData?.audioKit?.map((audio, index) => (
          <MusicItemSection
            key={`audio-kit-${index}`}
            title={audio?.title}
            type="audio"
            src={audio?.src}
          />
        ))}
      </MusicContentSection>

      <Divider />

      <MusicContentSection title="Letra">
        {musicKitData?.documents?.map((document, index) => (
          <MusicItemSection
            key={`document-kit-${index}`}
            title={document?.title}
            type="document"
            src={document?.src}
            documentType={document?.fileType}
          />
        ))}
      </MusicContentSection>
    </Box>
  );
};
