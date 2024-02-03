import { createElement } from "react";
import { RouteObject } from "react-router-dom";
import { LoginPage, RegisterPage } from "@/pages";

const authRoutes: RouteObject = {
  children: [
    {
      path: "/login",
      element: createElement(LoginPage),
    },
    {
      path: "/register",
      element: createElement(RegisterPage),
    },
  ],
};

export default authRoutes;
