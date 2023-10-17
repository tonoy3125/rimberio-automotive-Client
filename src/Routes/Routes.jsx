import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Layout/Root";
import ErrorElement from "../Layout/ErrorElement";
import Home from "../Pages/Home/Home";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }
        ]
    },
]);

export default router