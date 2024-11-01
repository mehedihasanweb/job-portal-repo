import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import ErrorPage from "../pages/Error/ErrorPage";
import Main from "../layout/Main";
import DetailsPage from "../pages/singleDetailsPage/DetailsPage";
import AppliedJobsPage from "../pages/appliedJobsPage/AppliedJobsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/details/:id",
        element: <DetailsPage />,
        loader: () => fetch("/data/jobs.json"),
      },
      {
        path: "/applied-jobs",
        element: <AppliedJobsPage />,
        loader: () => fetch("/data/jobs.json"),
      },
    ],
  },
]);

export default router;
