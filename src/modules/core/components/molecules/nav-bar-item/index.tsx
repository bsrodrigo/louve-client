import { RefAttributes, useEffect } from "react";
import { HugeiconsProps } from "hugeicons-react";

import { Box, Typography, useTheme } from "@mui/material";

import { NavBarItemBox } from "@/modules/core/components/atoms";
import { useAnimate } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface NavBarItemProps {
  Icon: React.FC<Omit<HugeiconsProps, "ref"> & RefAttributes<SVGSVGElement>>;
  label: string;
  redirectTo: string;
  isClosed?: boolean;
  isActive?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
}

export const NavBarItem = ({
  Icon,
  label,
  redirectTo,
  isClosed,
  isActive,
  isDisabled,
  onClick,
}: NavBarItemProps): JSX.Element => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [scope, animate] = useAnimate();

  const handleOnClick = () => {
    if (isDisabled) {
      return;
    }

    if (onClick) {
      onClick();
    }

    navigate(redirectTo);
  };

  useEffect(() => {
    if (isClosed) {
      animate(scope.current, { width: 0 });
      return;
    }

    animate(scope.current, { width: "100%" });
  }, [isClosed]);

  const defaultColor = isActive
    ? theme.palette.primary.main
    : theme.palette.grey[600];
  const color = isDisabled ? theme.palette.text.disabled : defaultColor;

  return (
    <NavBarItemBox
      isClosed={isClosed}
      onClick={handleOnClick}
      textAlign={isClosed ? "center" : "left"}
    >
      <Box width={32}>
        <Icon color={color} type="solid" fontSize={theme.spacing(5)} />
      </Box>

      <Typography
        ref={scope}
        variant="button"
        color={isDisabled ? theme.palette.text.disabled : color}
        width={isClosed ? 0 : "100%"}
        overflow="hidden"
      >
        {label}
      </Typography>
    </NavBarItemBox>
  );
};
