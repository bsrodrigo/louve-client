import { Box, useColorScheme, useTheme } from "@mui/material";

import {
  Logo,
  LogoWithName,
  LogoWithNameLight,
} from "@/modules/core/components/atoms";
import { LegacyRef, SVGProps, useEffect, useRef } from "react";
import { useAnimate } from "framer-motion";

interface NavBarBrandProps {
  isClosed?: boolean;
}

export const NavBarBrand = ({ isClosed }: NavBarBrandProps): JSX.Element => {
  const { mode, systemMode, setMode } = useColorScheme();
  const LogoWithNameRef = useRef(null);
  const [logoRef, animate] = useAnimate();

  const currentMode = mode === "system" ? systemMode : mode;

  useEffect(() => {
    if (isClosed) {
      animate(LogoWithNameRef.current, { width: 0, overflow: "hidden" });
      animate(logoRef.current, { width: "auto" }, { delay: 0.1 });
      return;
    }

    animate(logoRef.current, { width: 0, overflow: "hidden" });
    animate(LogoWithNameRef.current, { width: 160 }, { delay: 0.1 });
  }, [isClosed]);

  return (
    <Box display="flex" justifyContent="center" alignContent="center">
      <Box
        ref={logoRef}
        width={isClosed ? "auto" : 0}
        // position={isClosed ? "fixed" : "unset"}
        paddingTop={1}
      >
        <Logo width={60} />
      </Box>
      <Box ref={LogoWithNameRef} width={isClosed ? 0 : "auto"}>
        {currentMode === "dark" ? (
          <LogoWithNameLight width={160} />
        ) : (
          <LogoWithName width={160} />
        )}
      </Box>
    </Box>
  );
};
