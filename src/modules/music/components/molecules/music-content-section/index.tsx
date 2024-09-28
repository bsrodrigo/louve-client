import { ReactNode, useRef } from "react";
import { useAnimate } from "framer-motion";

import { Box, IconButton, Typography } from "@mui/material";
import { ArrowUp01Icon } from "hugeicons-react";

interface musicContentSectionProps {
  title: string;
  children: ReactNode | ReactNode[];
}

export const MusicContentSection = ({
  children,
  title,
}: musicContentSectionProps): JSX.Element => {
  const iconRef = useRef(null);
  const [scope, animate] = useAnimate();

  const handleToggle = () => {
    if (scope.current.offsetHeight === 0) {
      animate(scope.current, { height: "auto", overflow: "unset" });
      animate(iconRef.current, { rotate: 0 });
      return;
    }

    animate(scope.current, { height: 0, overflow: "hidden" });
    animate(iconRef.current, { rotate: 180 });
  };

  return (
    <Box display="flex" flexDirection="column" gap={1}>
      <Box
        display="flex"
        gap={2}
        alignItems="center"
        onClick={handleToggle}
        sx={{ cursor: "pointer" }}
      >
        <Typography variant="h5" color="textSecondary">
          {title}
        </Typography>

        <IconButton>
          <ArrowUp01Icon fontWeight="bold" ref={iconRef} />
        </IconButton>
      </Box>

      <Box ref={scope} display="flex" flexDirection="column" gap={2}>
        {children}
      </Box>
    </Box>
  );
};
