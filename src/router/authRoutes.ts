import { createElement } from "react";
import { RouteObject } from "react-router-dom";
import { LoginPage, SignupPage } from "@/pages";
import { GetStartedMiddleware } from "@/middlewares";

const authRoutes: RouteObject = {
  element: createElement(GetStartedMiddleware),
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
