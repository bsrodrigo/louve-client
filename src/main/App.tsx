import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";

import { CssBaseline, LinearProgress } from "@mui/material";

import { ThemeProvider } from "@/modules/core/contexts";
import { router } from "@/modules/core/routes";
import { BootstrapProvider } from "@/modules/core/contexts/bootstrap";
import { AuthProvider } from "@/modules/auth/context/auth-context";
import { GroupProvider } from "@/modules/group/context/group-context";

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider>
        <CssBaseline />
        <BootstrapProvider>
          <AuthProvider>
            <Suspense fallback={<LinearProgress />}>
              <GroupProvider>
                <RouterProvider router={router} />
              </GroupProvider>
            </Suspense>
          </AuthProvider>
        </BootstrapProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
