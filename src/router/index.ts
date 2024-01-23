import { createElement } from "react";
import { RouteObject } from "react-router-dom";
import { Layout } from "@/components/templates";

import publicRoutes from "./publicRoutes";
import authRoutes from "./authRoutes";
import privateRoutes from "./privateRoutes";

const router: RouteObject[] = [
  {
    element: createElement(Layout),
    children: [publicRoutes, authRoutes, privateRoutes],
  },
];

export default router;
