import { createBrowserRouter } from "react-router";
import MainLayOut from "../Components/Layout/MainLayout";
import Home from "../pages/Home";
import BlogDetails from "../pages/BlogDetails";
import NotFound from "../pages/NotFound/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />, //নেভ বার ফুটার এই কানে
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "blog/:id",
        element: <BlogDetails />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
