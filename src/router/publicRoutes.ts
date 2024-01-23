import React from "react";
import { RouteObject } from "react-router-dom";
import { ArticlePage, ShowFeaturesPage, StartingPage } from "@/pages";

const publicRoutes: RouteObject = {
  children: [
    {
      path: "/get-started",
      element: React.createElement(StartingPage),
    },
    {
      path: "/what-features",
      element: React.createElement(ShowFeaturesPage),
    },
    {
      path: "/articles",
      element: React.createElement(ArticlePage),
    },
  ],
};

export default publicRoutes;
