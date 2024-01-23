import { createElement } from "react";
import { RouteObject } from "react-router-dom";
import PrivateRouteMiddleware from "@/middlewares/PrivateRouteMiddleware";
import { BottomNavBar } from "@/components/templates";
import { DashboardPage, TermsConditionsPage } from "@/pages";

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
      ],
    },
  ],
};

export default privateRoutes;
