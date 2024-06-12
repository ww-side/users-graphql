import { createBrowserRouter } from "react-router-dom";
import HomePage from "@/pages/home-page.tsx";
import RootLayout from "@/components/layouts/root-layout.tsx";
import UserPage from "@/pages/user-page.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/:id",
        element: <UserPage />,
      },
    ],
  },
]);
