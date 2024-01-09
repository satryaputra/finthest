import { BarChartBig, Home, UserRound } from "lucide-react";
import { useNavigate, Outlet } from "react-router";
import { BottomNavigation } from "reactjs-bottom-navigation";  

interface BottomNavItem {
  title: string;
  path: string;
}

export default function BottomNavBar() {
  const bottomNavItems = [
    {
      icon: <Home />,
      path: "/dashboard",
    },
    {
      icon: <BarChartBig />,
      path: "/statistic ",
    },
    {
      icon: <UserRound />,
      path: "/profile",
    },
  ];

  const navigate = useNavigate();

  const handleItemClick = (item: BottomNavItem) => {
    console.log(item);
    // Pindah ke halaman yang sesuai dengan path item yang diklik
    navigate(item.path);
  };

  return (
    <>
      <BottomNavigation items={bottomNavItems} selected={0} onItemClick={handleItemClick as any} activeBgColor="slateBlue" activeTextColor="white" />
      <Outlet />
    </>
  );
}
