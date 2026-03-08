import { createBrowserRouter } from "react-router";
import { PrivateRoute, PublicRoute } from "./RouteGurde";
import MainLayOut from "../Components/Layout/MainLayout";
import Home from "../pages/Home";
import BlogDetails from "../pages/BlogDetails";
import NotFound from "../pages/NotFound/NotFound";
import LoginPage from "../pages/LoginPage";
import Blog from "../pages/Blog";
import About from "../pages/About";
import Signup from "../pages/Signup";
import CreatePost from "../pages/CreatePost";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    children: [
      // ১. সবার জন্য খোলা (লগইন থাকুক বা না থাকুক সবাই দেখবে)
      { index: true, element: <Home /> },
      { path: "blog", element: <Blog /> },
      { path: "about", element: <About /> },
      { path: "blog/:id", element: <BlogDetails /> },

      // ২. শুধুমাত্র যারা লগইন নেই তাদের জন্য (Public Guard)
      {
        element: <PublicRoute />,
        children: [
          { path: "login", element: <LoginPage /> },
          // এখানে signup থাকলে দিতে পারেন
          { path: "signup", element: <Signup /> },
        ],
      },

      // ৩. শুধুমাত্র যারা লগইন আছে তাদের জন্য (Private Guard)
      {
        element: <PrivateRoute />,
        children: [{ path: "createpost", element: <CreatePost /> }],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
