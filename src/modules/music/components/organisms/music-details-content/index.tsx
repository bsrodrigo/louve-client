import { useParams } from "react-router-dom";

import { Box, Typography } from "@mui/material";

import { MusicContentSection } from "@/modules/music/components/molecules";
import { MusicItemSection } from "@/modules/music/components/organisms";
import { musicKitsData } from "@/modules/music/infra/data";
import { useBootstrapContext } from "@/modules/core/contexts/bootstrap";

export const MusicDetailsContent = (): JSX.Element => {
  const { musicId } = useParams();

  const data = musicKitsData?.find((musicKit) => musicKit.id === musicId);

  if (!data?.id) {
    return (
      <Typography variant="h5" color="textSecondary">
        Item não encontrado
      </Typography>
    );
  }

  return (
    <Box display="flex" flexDirection="column" gap={4}>
      <Box display="flex" flexDirection="column" gap={2} marginBottom={3}>
        <Box>
          <Typography variant="h4">{data?.name}</Typography>
          <Typography variant="h6" color="textSecondary">
            {data?.artist}
          </Typography>
        </Box>

        {data?.originalSound && (
          <MusicItemSection
            key="audio-original"
            title={data?.name}
            artist={data?.artist}
            src={data?.originalSound}
            type="audio"
            hideTitle
          />
        )}
      </Box>

      {data?.usefulLinks && data.usefulLinks?.length > 0 && (
        <MusicContentSection title="Links úteis">
          {data?.usefulLinks?.map((link, index) => (
            <MusicItemSection
              key={`link-kit-${index}`}
              title={link?.title}
              link={link?.link}
              type="link"
            />
          ))}
        </MusicContentSection>
      )}

      {data?.audioKit && data.audioKit?.length > 0 && (
        <MusicContentSection title="Kit de voz">
          {data?.audioKit?.map((audio, index) => (
            <MusicItemSection
              key={`audio-kit-${index}`}
              title={audio?.title}
              type="audio"
              src={audio?.src}
            />
          ))}
        </MusicContentSection>
      )}

      {data?.documents && data.documents?.length > 0 && (
        <MusicContentSection title="Letra">
          {data?.documents?.map((document, index) => (
            <MusicItemSection
              key={`document-kit-${index}`}
              title={document?.title}
              type="document"
              src={document?.src}
              documentType={document?.fileType}
            />
          ))}
        </MusicContentSection>
      )}
    </Box>
  );
};
