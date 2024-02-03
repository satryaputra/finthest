import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "@/hooks/store/useAuthStore";
import useMe from "@/api/services/users/useMe";

const PrivateRouteMiddleware: React.FC = () => {
  const getMe = useMe();

  const existAccessToken = useAuthStore((state) => state.accessToken);
  const existUser = useAuthStore((state) => state.user);
  const setUser = useAuthStore((state) => state.setUser);
  const resetAuth = useAuthStore((state) => state.resetAuth);

  if (!existAccessToken && !existUser) {
    return <Navigate to={"/login"} />;
  }

  if (!existUser && !getMe.isError) {
    getMe.refetch();
    if (getMe.isSuccess && getMe.data) {
      setUser(getMe.data);
    }
  }

  if (getMe.isError) {
    resetAuth();
    return <Navigate to={"/login"} />;
  }

  return <Outlet />;
};

export default PrivateRouteMiddleware;
