import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Root from "../components/Root/Root.jsx";
import Home from "../pages/Home.jsx";

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

            }

        ]
    }
])
export default router;