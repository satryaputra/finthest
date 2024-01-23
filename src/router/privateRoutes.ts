import { createElement } from "react";
import { RouteObject } from "react-router-dom";
import PrivateRouteMiddleware from "@/middlewares/PrivateRouteMiddleware";
import { BottomNavBar } from "@/components/templates";
import {
  DashboardPage,
  ProfilePage,
  StatisticPage,
  TermsConditionsPage,
} from "@/pages";

const privateRoutes: RouteObject = {
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
};

export default privateRoutes;
