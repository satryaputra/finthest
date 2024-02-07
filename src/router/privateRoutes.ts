import { createElement } from "react";
import { RouteObject } from "react-router-dom";
import { BottomNavBar } from "@/components/templates";
import {
  DashboardPage,
  ProfilePage,
  StatisticPage,
  TermsConditionsPage,
} from "@/pages";
import { PrivateRouteMiddleware, GetStartedMiddleware } from "@/middlewares";

const privateRoutes: RouteObject = {
  element: createElement(GetStartedMiddleware),
  children: [
    {
      element: createElement(PrivateRouteMiddleware),
      children: [
        {
          path: "/terms-conditions",
          element: createElement(TermsConditionsPage),
        },
        {
          element: createElement(BottomNavBar),
          children: [
            {
              path: "/",
              element: createElement(DashboardPage),
            },
            {
              path: "/activities",
              element: createElement(StatisticPage),
            },
            {
              path: "/profile",
              element: createElement(ProfilePage),
            },
          ],
        },
      ],
    },
  ],
};

export default privateRoutes;
