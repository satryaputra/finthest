import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "@/hooks/store/useAuthStore";
import useMe from "@/api/services/users/useMe";

const PrivateRouteMiddleware: React.FC = () => {
  const getMe = useMe();

  const { accessToken, user, setUser, resetAuth } = useAuthStore(
    (state) => state
  );

  if (!accessToken) {
    resetAuth();
    return <Navigate to={"/login"} />;
  }

  if (!user) {
    getMe.refetch();
  }

  React.useEffect(() => {
    if (getMe.isSuccess) {
      setUser(getMe.data);
    }
  }, [getMe.isSuccess]);

  if (getMe.isError) {
    resetAuth();
    return <Navigate to={"/login"} />;
  }

  return <Outlet />;
};

export default PrivateRouteMiddleware;
