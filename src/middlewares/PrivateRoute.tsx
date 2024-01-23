import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "@/hooks/store/useAuthStore";
import useMe from "@/api/services/users/useMe";

const PrivateRoute: React.FC = () => {
  const getMe = useMe();

  const existAccessToken = useAuthStore((state) => state.accessToken);
  const existUser = useAuthStore((state) => state.user);
  const setUser = useAuthStore((state) => state.setUser);
  const resetAuth = useAuthStore((state) => state.resetAuth);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        if (!existUser && !getMe.isError) {
          await getMe.refetch();
          if (getMe.isSuccess && getMe.data) {
            setUser(getMe.data);
          }
        }
      } catch (error) {
        resetAuth();
      }
    };

    fetchData();
  }, [existUser, getMe, setUser, resetAuth]);

  if (!existAccessToken && !existUser) {
    return <Navigate to={"/login"} />;
  }

  if (getMe.isError) {
    resetAuth();
    return <Navigate to={"/login"} />;
  }

  return <Outlet />;
};

export default PrivateRoute;
