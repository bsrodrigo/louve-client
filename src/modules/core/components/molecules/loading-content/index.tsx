import { Box, CircularProgress, LinearProgress } from "@mui/material";
import { ReactNode } from "react";
import { Logo } from "../../atoms";

interface LoadingContentProps {
  children?: ReactNode | ReactNode[];
  loading?: boolean;
}

export const LoadingContent = ({
  children,
  loading,
}: LoadingContentProps): JSX.Element => {
  if (!loading && children) {
    return <div>{children}</div>;
  }

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="80vh"
      width="100%"
    >
      <Box display="flex" flexDirection="column" width={100} height={100} gap={2}>
        <Logo animate width="100%" />
        <LinearProgress />
      </Box>
    </Box>
  );
};
