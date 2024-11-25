import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Root from "../components/Root/Root.jsx";
import Home from "../pages/Home.jsx";
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