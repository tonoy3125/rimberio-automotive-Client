import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Layout/Root";
import ErrorElement from "../Layout/ErrorElement";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/addproduct",
                element: <AddProduct></AddProduct>
            },
            {
                path: "/mycart",
                element: <MyCart></MyCart>
            }
        ]
    },
]);

export default router