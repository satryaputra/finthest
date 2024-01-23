import { createElement } from "react";
import { RouteObject } from "react-router-dom";
import {
  ArticlePage,
  ForgotPasswordPage,
  ForgotPasswordRequestPage,
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
      element: createElement(ForgotPasswordRequestPage),
    },
    {
      path: "/forgot-password/:token",
      element: createElement(ForgotPasswordPage),
    },
  ],
};

export default publicRoutes;
