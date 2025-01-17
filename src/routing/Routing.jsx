import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root.jsx";
import Home from "../pages/Home.jsx";
import Cart from "../pages/Cart/Cart.jsx";
import Favorite from "../components/Favorite/Favorite.jsx";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login.jsx";

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
        path: "favorite",
        element: <Favorite />,
      },
      {
        path: "cart",
        element: <Cart />,
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
