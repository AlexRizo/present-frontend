import { AppLayout } from "@/layout/AppLayout";
import { HomePage } from "@/pages/HomePage";
import { createBrowserRouter } from "react-router-dom";

export const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      }
    ],
    errorElement: <h1>404: Not Found</h1>
  }
]);