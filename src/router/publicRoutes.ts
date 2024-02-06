import { createElement } from "react";
import { RouteObject } from "react-router-dom";
import {
  ArticlePage,
  ForgotPasswordPage,
  ResetPasswordPage,
  ShowFeaturesPage,
  StartingPage,
} from "@/pages";

const publicRoutes: RouteObject = {
  children: [
    {
      path: "/get-started",
      element: createElement(StartingPage),
    },
    {
      path: "/what-features",
      element: createElement(ShowFeaturesPage),
    },
    {
      path: "/articles",
      element: createElement(ArticlePage),
    },
    {
      path: "/forgot-password",
      element: createElement(ForgotPasswordPage),
    },
    {
      path: "/forgot-password/:token",
      element: createElement(ResetPasswordPage),
    },
  ],
};

export default publicRoutes;
