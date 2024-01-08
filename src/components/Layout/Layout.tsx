import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <main className="bg-gray-100">
      <div className="max-w-[480px] min-h-screen mx-auto bg-white">
        <Outlet />
      </div>
    </main>
  );
}
