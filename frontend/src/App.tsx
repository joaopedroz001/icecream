import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { LogInPage } from "./pages/login-page";
import { SignUpPage } from "./pages/signup-page";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LogInPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
]);

export function App() {
  return <RouterProvider router={router} />
}
