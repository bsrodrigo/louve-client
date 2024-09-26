import { useParams } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";

import { Box, Typography } from "@mui/material";

import { MusicContentSection } from "@/modules/music/components/molecules";
import { MusicItemSection } from "@/modules/music/components/organisms";
import { musicKitsData } from "@/modules/music/infra/data";
import { MusicKit } from "@/modules/music/models";
import { useBootstrapContext } from "@/modules/core/contexts/bootstrap";

export const MusicDetailsContent = (): JSX.Element => {
  const { firestore } = useBootstrapContext();
  const { id } = useParams();
  const data = musicKitsData?.find((musicKit) => musicKit.id === id);

  const teste = async () => {
    try {
      if (!data) return;

      const dataAdd: MusicKit = {
        name: data.name,
        artist: data?.artist || "",
        originalSound: data?.originalSound || "",
        audioKit: data?.audioKit || [],
        documents: data?.documents || [],
      };
      console.log("dataAdd", dataAdd);
      const docRef = await addDoc(collection(firestore, "supportKit"), dataAdd);
      console.log("Document written with ID: ", docRef?.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

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
