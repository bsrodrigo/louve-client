import { Header } from "@/modules/core/components/molecules";
import {
  Box,
  Card,
  CardHeader,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import { LinkSquare02Icon, Share08Icon } from "hugeicons-react";

const HomePage = (): JSX.Element => {
  const theme = useTheme();
  return (
    <Box>
      <Header
        title="Congresso 2024"
        breadcrumbs={[
          {
            label: "Home",
            redirectTo: "/",
          },
          { label: "Congresso " },
        ]}
      />

      <Box display="flex" alignItems="center" flexWrap="wrap" gap={4}>
        <Card
          sx={{
            flexGrow: 1,
            maxWidth: 600,
          }}
        >
          <Box display="flex" flexDirection="column" gap={4}>
            <Box>
              <Typography variant="h6">
                Tu és poderoso + Vida aos sepulcros
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Atualizado em: 22/01/2024
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="flex-end"
              alignItems="center"
              gap={1}
            >
              <IconButton
                color="primary"
                size="large"
                sx={{ bgcolor: theme.palette.action.hover }}
                aria-label="Compartilhar"
              >
                <Share08Icon />
              </IconButton>
              <IconButton
                color="primary"
                size="large"
                aria-label="Abrir"
                sx={{ bgcolor: theme.palette.action.hover }}
              >
                <LinkSquare02Icon />
              </IconButton>
            </Box>
          </Box>
        </Card>

        <Card
          sx={{
            flexGrow: 1,
            maxWidth: 600,
          }}
        >
          <Box display="flex" flexDirection="column" gap={4}>
            <Box>
              <Typography variant="h6">
                Tu és poderoso + Vida aos sepulcros
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Atualizado em: 22/01/2024
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="flex-end"
              alignItems="center"
              gap={1}
            >
              <IconButton
                color="primary"
                size="large"
                sx={{ bgcolor: theme.palette.action.hover }}
                aria-label="Compartilhar"
              >
                <Share08Icon />
              </IconButton>
              <IconButton
                color="primary"
                size="large"
                aria-label="Abrir"
                sx={{ bgcolor: theme.palette.action.hover }}
              >
                <LinkSquare02Icon />
              </IconButton>
            </Box>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};
HomePage.displayName = "HomePage";

export default HomePage;
