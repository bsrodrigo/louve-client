import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";

import { CssBaseline, LinearProgress } from "@mui/material";

import { ThemeProvider } from "@/modules/core/contexts";
import { router } from "@/modules/core/routes";
import { BootstrapProvider } from "@/modules/core/contexts/bootstrap";
import { AuthProvider } from "@/modules/auth/context/auth-context";

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider>
        <CssBaseline />
        <BootstrapProvider>
          <AuthProvider>
            <Suspense fallback={<LinearProgress />}>
              <RouterProvider router={router} />
            </Suspense>
          </AuthProvider>
        </BootstrapProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
