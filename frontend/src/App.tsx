import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { LogInPage } from "./pages/login-page";
import { LandingPage } from "./pages/landing-page";

const router = createBrowserRouter([
  {
    path: "/register",
    element: <LogInPage />,
  },
  {
    path: "/",
    element: <LandingPage />,
  }
]);

export function App() {
  return <RouterProvider router={router} />
}
