import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./components/root/Root.jsx";
import Mobile from "./components/mobile/Mobile.jsx";
import Home from "./components/home/Home.jsx";
import Laptops from "./components/laptops/Laptops.jsx";
import Users from "./components/users/Users.jsx";
import Users2 from "./components/users2/Users2.jsx";
import UserDetails from "./components/userDetails/UserDetails.jsx";

const usersPromise = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "mobile", Component: Mobile },
      { path: "laptops", Component: Laptops },
      {
        path: "users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: Users,
      },
      {
        path: "users2",
        element: (
          <Suspense fallback={<span>Users 2 are coming ....</span>}>
            <Users2 usersPromise={usersPromise}></Users2>
          </Suspense>
        ),
      },
      {
        path : 'users/:userID',
        loader : ({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userID}`),
        Component : UserDetails,
      }
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
