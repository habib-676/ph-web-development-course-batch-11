import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import AuthLayout from "../layouts/AuthLayout";
import Register from "../pages/register/Register";
import SignIn from "../pages/signIn/SignIn";
import JobDetails from "../pages/job-details/JobDetails";
import PrivateRouter from "./PrivateRouter";
import JobApply from "../pages/job-details/JobApply";
import MyApplications from "../pages/my-applications/MyApplications";
import AddJob from "../pages/add-job/AddJob";
import MyPostedJobs from "../pages/my-posted-jobs/MyPostedJobs";
import ViewApplications from "../pages/view-applications/ViewApplications";
import Loader from "../components/Loader";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <div>Page not found || 404 error</div>,
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "jobs/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/jobs/${params.id}`),
        Component: JobDetails,
      },
      {
        path: "/job-apply/:id",
        element: (
          <PrivateRouter>
            <JobApply></JobApply>
          </PrivateRouter>
        ),
      },
      {
        path: "myApplications",
        element: (
          <PrivateRouter>
            <MyApplications />
          </PrivateRouter>
        ),
      },
      {
        path: "addJob",
        element: (
          <PrivateRouter>
            <AddJob></AddJob>
          </PrivateRouter>
        ),
      },
      {
        path: "myPostedJobs",
        element: (
          <PrivateRouter>
            <MyPostedJobs />
          </PrivateRouter>
        ),
      },
      {
        path: "applications/:jobId",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/applications/job/${params.jobId}`),
        hydrateFallbackElement: <Loader></Loader>,
        element: (
          <PrivateRouter>
            <ViewApplications></ViewApplications>
          </PrivateRouter>
        ),
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "register",
        Component: Register,
      },
      {
        path: "signIn",
        Component: SignIn,
      },
    ],
  },
]);
