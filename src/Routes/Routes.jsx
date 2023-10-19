import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Layout/Root";
import ErrorElement from "../Layout/ErrorElement";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import BrandItems from "../Pages/Brands/BrandItems";
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/brandname')
            },
            {
                path: "/addproduct",
                element: <AddProduct></AddProduct>
            },
            {
                path: "/productdetails/:id",
                element: <ProductDetails></ProductDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
            },
            // {
            //     path: "/updateproduct/:id",
            //     element: <UpdateProduct></UpdateProduct>,
            //     loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
            // },
            {
                path: "/brand/:brandName",
                element: <BrandItems></BrandItems>,
                loader: ({ params }) => fetch(`http://localhost:5000/product/${params.brandName}`),
            },
            {
                path: "/mycart",
                element: <MyCart></MyCart>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
        ]
    },
]);

export default router