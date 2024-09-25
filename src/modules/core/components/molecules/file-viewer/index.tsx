import { Box } from "@mui/material";
// @ts-ignore
import ReactFileViewer from "react-file-viewer";

const onError = (e: any) => {
  console.log(e, "error in file-viewer");
};

interface FileViewerProps {
  file: string;
  type: string;
}

export const FileViewer = ({ file, type }: FileViewerProps) => {
  return (
    <Box borderRadius={4} overflow="hidden">
      <Box
        maxHeight="90vh"
        textAlign="center"
        overflow="auto"
        sx={{
          "& div": {
            overflow: "hidden",
            width: "100%",
          },
          "& canvas": {
            width: "100%",
          },
        }}
      >
        <ReactFileViewer
          fileType={type}
          filePath={file}
          onError={onError}
          width={100}
        />
      </Box>
    </Box>
  );
};
