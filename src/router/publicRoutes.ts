import { createElement } from "react";
import { RouteObject } from "react-router-dom";
import {
  ArticlesPage,
  ForgotPasswordPage,
  ResetPasswordPage,
  FeaturesPage,
  GetStartedPage,
  SeeMoreArticle,
} from "@/pages";

const publicRoutes: RouteObject = {
  children: [
    {
      path: "/get-started",
      element: createElement(GetStartedPage),
    },
    {
      path: "/features",
      element: createElement(FeaturesPage),
    },
    {
      path: "/article",
      element: createElement(ArticlesPage),
    },
    {
      path: "/article/read",
      element: createElement(SeeMoreArticle),
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
