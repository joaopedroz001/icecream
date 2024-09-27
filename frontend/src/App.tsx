import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { LogInPage } from "./pages/login-page";
import { LandingPage } from "./pages/landing-page";
import { StorePage } from "./pages/store-page";

const router = createBrowserRouter([
  {
    path: "/register",
    element: <LogInPage />,
  },
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/store",
    element: <StorePage />
  }
]);

export function App() {
  return <RouterProvider router={router} />
}
