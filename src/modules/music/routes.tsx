import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const AllMusicsPage = lazy(
  () => import("@/modules/music/pages/all-musics-page")
);
const MusicsFoldersPage = lazy(
  () => import("@/modules/music/pages/musics-folders-page")
);
const MusicFolderPage = lazy(
  () => import("@/modules/music/pages/music-folder-page")
);
const MusicDetails = lazy(
  () => import("@/modules/music/pages/music-details-page")
);

export const musicRoutes: RouteObject[] = [
  {
    path: "musics",
    children: [
      {
        index: true,
        element: <AllMusicsPage />,
      },
      {
        path: "folders",
        children: [
          {
            index: true,
            element: <MusicsFoldersPage />,
          },
          {
            path: ":folderId",
            children: [
              { index: true, element: <MusicFolderPage /> },
              { path: ":musicId", element: <MusicDetails /> },
            ],
          },
        ],
      },
    ],
  },
];
