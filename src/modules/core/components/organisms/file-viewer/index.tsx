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
    <div>
      <ReactFileViewer fileType={type} filePath={file} onError={onError} />
    </div>
  );
};
