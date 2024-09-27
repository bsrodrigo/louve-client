import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
  outlinedInputClasses,
  Shadows,
  useTheme,
} from "@mui/material";
import { lightPalette, darkPalette, shadows } from "@/modules/core/bosons";

interface IThemeProvides {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: IThemeProvides): JSX.Element => {
  const defaultTheme = useTheme();

  const theme = createTheme({
    colorSchemes: {
      dark: {
        palette: { ...darkPalette },
      },
      light: {
        palette: {
          ...lightPalette,
        },
      },
    },
    typography: {
      overline: {
        fontWeight: 500,
        letterSpacing: 0.5,
      },
    },
    components: {
      MuiLinearProgress: {
        styleOverrides: {
          root: {
            borderRadius: 16,
          },
        },
      },
      MuiAlert: {
        styleOverrides: {
          root: {
            "& .MuiAlert-message": {
              width: "100%",
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            minWidth: 112,
            boxShadow: "none",
          },
        },
      },
      MuiContainer: {
        styleOverrides: {
          root: {
            paddingTop: 24,
            paddingLeft: "48px !important",
            paddingRight: "48px !important",
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: 16,
          },
        },
      },
      MuiCard: {
        defaultProps: {
          elevation: 6,
        },
        styleOverrides: {
          root: {
            borderRadius: 24,
            padding: 24,
          },
        },
      },
      MuiDialogActions: {
        styleOverrides: {
          root: {
            padding: 24,
          },
        },
      },
      MuiDialogContent: {
        styleOverrides: {
          root: {
            padding: "32px 24px",
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            borderRadius: 24,
          },
        },
      },
      MuiTextField: {
        defaultProps: {
          slotProps: {
            inputLabel: {
              shrink: true,
            },
          },
        },
        styleOverrides: {
          root: {
            "--TextField-brandBorderColor": "#B2BAC2",
            "--TextField-brandBorderHoverColor": "#B2BAC2",
            "--TextField-brandBorderFocusedColor": "#2593E6",
            "& .MuiInputBase-root": {
              borderRadius: 16,
              height: 56,
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: "var(--TextField-brandBorderColor)",
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              border: "2px solid",
              borderColor: "var(--TextField-brandBorderHoverColor)",
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiCssBaseline: {
        styleOverrides: {
          // Estilos de barra de rolagem usando objetos
          "*": {
            scrollbarWidth: "thin", // Para Firefox
            scrollbarColor: "#14181b73 #eae9ed7a", // Para Firefox
          },
          "::-webkit-scrollbar": {
            backgroundColor: "#14181b73",
            width: 8,
            height: 8,
          },
          "::-webkit-scrollbar-thumb": {
            backgroundColor: "#14181b73", // Cor do 'thumb'
            borderRadius: "10px", // Bordas arredondadas
          },
          "::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#14181b73", // Cor do 'thumb' ao passar o mouse
          },
          "::-webkit-scrollbar-track": {
            background: "#eae9ed7a", // Cor do fundo da barra de rolagem
            borderRadius: "10px", // Bordas arredondadas
          },

          // body: {
          //   scrollbarColor: "#6b6b6b #2b2b2b",
          //   "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
          //     backgroundColor: "rgba(0,0,0, .07)",
          //     width: 8,
          //     height: 8,
          //   },
          //   "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
          //     borderRadius: 8,
          //     backgroundColor: "#b9b9b9",
          //     minHeight: 8,
          //   },
          //   "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus":
          //     {
          //       backgroundColor: "#b9b9b9",
          //     },
          //   "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active":
          //     {
          //       backgroundColor: "#b9b9b9",
          //     },
          //   "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
          //     {
          //       backgroundColor: "#b9b9b9",
          //     },
          //   "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
          //     backgroundColor: "unset",
          //   },
          // },
        },
      },
    },
    shadows: [...shadows] as Shadows,
  });

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};
