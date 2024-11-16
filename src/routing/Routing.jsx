import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root.jsx";
import Home from "../pages/Home.jsx";
import Register from "../pages/Register/Register.jsx";
import Login from "../pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);
export default router;
