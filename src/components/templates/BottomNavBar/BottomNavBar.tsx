import { BarChartBig, Home, UserRound } from "lucide-react";
import React from "react";
import { useNavigate, Outlet } from "react-router";
import { BottomNavigation } from "reactjs-bottom-navigation";

interface BottomNavItem {
  title: string;
  path: string;
}

export default function BottomNavBar() {
  const [itemSelected, setItemSelected] = React.useState(0);

  const bottomNavItems = [
    {
      icon: <Home className="hover:text-slate-600" />,
      path: "/",
    },
    {
      icon: <BarChartBig className="hover:text-slate-600" />,
      path: "/activities",
    },
    {
      icon: <UserRound className="hover:text-slate-600" />,
      path: "/profile",
    },
  ];

  const navigate = useNavigate();

  const handleItemClick = (item: BottomNavItem) => {
    navigate(item.path);
  };

  React.useEffect(() => {
    setItemSelected(
      bottomNavItems.findIndex((x) => x.path === window.location.pathname)
    );
  }, [window.location.pathname]);

  return (
    <>
      <BottomNavigation
        items={bottomNavItems}
        selected={itemSelected}
        onItemClick={handleItemClick as any}
        activeBgColor="white"
        activeTextColor="green"
      />
      <Outlet />
    </>
  );
}
