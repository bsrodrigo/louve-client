import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const LoginPage = lazy(() => import("@/modules/auth/pages/login-page"));
const RegisterPage = lazy(() => import("@/modules/auth/pages/register-page"));

export const authRoutes: RouteObject[] = [
  {
    path: "auth",
    children: [
      { index: true, element: <LoginPage /> },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
    errorElement: "Error",
  },
];
