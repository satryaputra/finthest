import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <main className="min-h-screen bg-gray-50 overflow-y-auto">
      <div className="max-w-[480px] mx-auto bg-white">
        <Outlet />
      </div>
    </main>
  );
}
