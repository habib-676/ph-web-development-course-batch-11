import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Main from "./components/Main";
import Phones from "./components/Phones";
import Phone from "./components/Phone";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/phones",
        Component: Phones,
        loader: () => fetch("http://localhost:5000/phones"),
      },
      {
        path: "/phone/:id",
        element: <Phone></Phone>,
        loader: ({ params }) => fetch(`http://localhost:5000/phones/${params.id}`),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
