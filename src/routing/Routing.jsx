import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root.jsx";
import Home from "../pages/Home.jsx";
<<<<<<< HEAD
import Cart from "../pages/Cart/Cart.jsx";
import Favorite from "../components/Favorite/Favorite.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                path: "",
                element: <Home/>
            },
            {
                path: 'favorite',
                element: <Favorite/>
            },
            {
                path: 'cart',
                element: <Cart/>
            }

        ]
    }
])
export default router;
=======
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
>>>>>>> d44c4738a9a0257001a57e19d23dec6121f562fd
