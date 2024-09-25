import { Box } from "@mui/material";
// @ts-ignore
import ReactFileViewer from "react-file-viewer";

// const file =
//   "https://cdn.prod.website-files.com/624ac40503a527cf47af4192/659baa52498a8bb97b45ed7f_ai-logo-generator-12.png";

const file = "/assets/letra.pdf";
const type = "pdf";

const onError = (e: any) => {
  console.log(e, "error in file-viewer");
};

export const FileViewer = () => {
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
