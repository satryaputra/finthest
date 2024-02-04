import { createElement } from "react";
import { RouteObject } from "react-router-dom";
import { LoginPage, SignupPage } from "@/pages";

const authRoutes: RouteObject = {
  children: [
    {
      path: "/login",
      element: createElement(LoginPage),
    },
    {
      path: "/signup",
      element: createElement(SignupPage),
    },
  ],
};

export default authRoutes;
