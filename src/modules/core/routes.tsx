import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import { MenuBar } from "@/modules/core/components/organisms";
import { musicRoutes } from "@/modules/music/routes";
import { authRoutes } from "@/modules/auth/routes";

const HomePage = lazy(() => import("@/modules/core/pages/home-page"));

export const router = createBrowserRouter([
  ...authRoutes,
  {
    path: "/",
    element: <MenuBar />,
    children: [{ index: true, element: <HomePage /> }, ...musicRoutes],
    errorElement: "Error",
  },
]);
