import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <main className="bg-gray-50 overflow-y-auto">
      <div className="max-w-md min-h-screen mx-auto bg-white shadow-xl">
        <Outlet />
      </div>
    </main>
  );
}
