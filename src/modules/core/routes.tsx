import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import { MenuBar } from "@/modules/core/components/organisms";
import { partnersRoutes } from "@/modules/partners/routes";

const HomePage = lazy(
  () => import("@/modules/core/pages/home-page")
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MenuBar />,
    children: [
      { index: true, element: <HomePage /> },
      ...partnersRoutes,
      {
        path: "*",
        element: <div>A página não existe</div>,
      },
    ],
    errorElement: "Error",
  },
]);
