import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

import { MenuBar } from "@/modules/core/components/organisms";
import { authRoutes } from "@/modules/auth/routes";
import { groupRoutes } from "@/modules/group/routes";
import { musicRoutes } from "@/modules/music/routes";

const HomePage = lazy(() => import("@/modules/core/pages/home-page"));

export const router = createBrowserRouter([
  ...authRoutes,
  {
    path: "/",
    element: <MenuBar />,
    children: [
      { index: true, element: <HomePage /> },
      ...groupRoutes,
      ...musicRoutes,
    ],
    errorElement: "Error",
  },
]);
