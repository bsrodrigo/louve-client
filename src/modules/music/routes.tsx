import { lazy } from "react";
import { RouteObject } from "react-router-dom";

import { Typography } from "@mui/material";

const MusicDetails = lazy(
  () => import("@/modules/music/pages/music-details-page")
);

export const musicRoutes: RouteObject[] = [
  {
    path: "music-details",

    children: [
      {
        index: true,
        element: (
          <div>
            <Typography variant="h5" color="textSecondary">
              Item não encontrado
            </Typography>
          </div>
        ),
      },
      { path: ":id", element: <MusicDetails /> },
    ],
    errorElement: "Error",
  },
];
