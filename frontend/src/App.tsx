import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { LogInPage } from "./pages/login-page";

const router = createBrowserRouter([
  {
    path: "/register",
    element: <LogInPage />,
  },
]);

export function App() {
  return <RouterProvider router={router} />
}
