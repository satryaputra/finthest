import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <main className="bg-gray-50 overflow-y-auto">
      <div className="max-w-[480px] min-h-screen mx-auto bg-white">
        <Outlet />
      </div>
    </main>
  );
}
