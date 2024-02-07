import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const GET_STARTED = "getStarted";

const GetStartedMiddleware: React.FC = () => {
  if (localStorage.getItem(GET_STARTED) === null) {
    localStorage.setItem(GET_STARTED, "0");
  } else if (localStorage.getItem(GET_STARTED) === "0") {
    return <Navigate to="/get-started" />;
  } else {
    return <Outlet />;
  }
};

export default GetStartedMiddleware;
