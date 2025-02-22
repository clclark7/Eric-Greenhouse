import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
