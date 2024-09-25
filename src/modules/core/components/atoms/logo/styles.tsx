import { keyframes, styled } from "@mui/material";

interface FlameStyledProps {
  animate?: boolean;
}

const flameFlicker = keyframes`
   0% {
    transform: scale(1, 1) skewX(0deg) skewY(0deg);
    }
    25% {
        transform: scale(1.02, 0.98) skewX(-3deg) skewY(0deg); /* Leve distorção nas pontas */
    }
    50% {
        transform: scale(0.98, 1.03) skewX(2deg) skewY(0deg);  /* Onda mais suave */
    }
    75% {
        transform: scale(1.05, 0.95) skewX(-2deg) skewY(0deg); /* Onda inversa */
    }
    100% {
        transform: scale(1, 1) skewX(0deg) skewY(0deg); /* Volta ao original */
    }
`;

export const FlameStyled = styled("path")<FlameStyledProps>(({ animate }) => ({
  transformOrigin: "top",
  animation: animate ? `${flameFlicker} 1.2s infinite ease-in-out` : "none",

  "@keyframes flameFlicker": {
    "0%": {
      opacity: 0.5,
      transform: "scale(1.1)",
    },
    "50%": {
      opacity: 1,
      transform: "scale(1)",
    },
    "100%": {
      opacity: 0.5,
      transform: "scale(1.1)",
    },
  },
}));
