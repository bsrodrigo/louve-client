import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";

import { CssBaseline, LinearProgress } from "@mui/material";

import { ThemeProvider } from "@/modules/core/contexts";
import { router } from "@/modules/core/routes";

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider>
        <CssBaseline />
        <Suspense fallback={<LinearProgress />}>
          <RouterProvider router={router} />
        </Suspense>
      </ThemeProvider>
    </>
  );
};

export default App;
