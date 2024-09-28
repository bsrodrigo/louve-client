import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const GroupsPage = lazy(() => import("@/modules/group/Page/groups-page"));

export const groupRoutes: RouteObject[] = [
  {
    path: "groups",
    children: [
      {
        index: true,
        element: <GroupsPage />,
      },
    ],
  },
];
