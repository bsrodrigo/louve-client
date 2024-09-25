import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import { MenuBar } from "@/modules/core/components/organisms";
import { musicRoutes } from "@/modules/music/routes";

const HomePage = lazy(() => import("@/modules/core/pages/home-page"));

const MusicDetails = lazy(
  () => import("@/modules/music/pages/music-details-page")
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MenuBar />,
    children: [{ index: true, element: <HomePage /> }, ...musicRoutes],
    errorElement: "Error",
  },
]);
