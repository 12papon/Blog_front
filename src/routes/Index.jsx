import { createBrowserRouter } from "react-router";
import MainLayOut from "../Components/Layout/MainLayout";
import Home from "../pages/Home";
import BlogDetails from "../pages/BlogDetails";
import NotFound from "../pages/NotFound/NotFound";
import LoginPage from "../pages/LoginPage";
import Blog from "../pages/Blog";
import About from "../pages/About";

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
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
