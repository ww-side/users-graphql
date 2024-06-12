import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <main className="m-4">
      <Outlet />
    </main>
  );
}
