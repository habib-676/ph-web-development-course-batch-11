import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./components/root/Root.jsx";
import Mobile from "./components/mobile/Mobile.jsx";
import Home from "./components/home/Home.jsx";
import Laptops from "./components/laptops/Laptops.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      {
        path: "mobile",
        Component: Mobile,
      },
      {
        path: "laptops",
        Component: Laptops,
      },
    ],
  },
  {
    path: "about",
    element: <div>About me???</div>,
  },
  {
    path: "blogs",
    element: <div>All blogs are coming...</div>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
