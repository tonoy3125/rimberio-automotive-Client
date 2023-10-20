/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const ProductDetails = () => {
    const { user } = useContext(AuthContext)
    const products = useLoaderData();
    const [newProduct] = products
    const { brandName, image, name, description, price, type } = newProduct
    console.log(products);
    const email = user.email;
    const card = { image, email, price, name, type }

    const handleAddCart = () => {
        fetch("http://localhost:5000/addTocart", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(card),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                alert("post add done ");
            });
    }


    return (
        <div>
            <div className="container mx-auto mt-10 mb-10">
                <div className="flex flex-col lg:flex-row gap-5 p-5">
                    <img className="w-[700px] " src={image} alt="" />
                    <div>
                        <p className="text-base font-medium">{description}</p>
                        <div className="flex items-center mt-10 gap-10">
                            <p className="text-5xl font-semibold ">Price : {price}</p>
                            <p className="text-5xl font-semibold">Type : {type}</p>
                        </div>
                        <div className="lg:ml-60 mt-10">
                            <button onClick={handleAddCart} className="btn btn-accent">Add To Cart</button>
                        </div>
                    </div>
                </div>
                <h1 className="text-4xl font-bold mt-5 ml-20 md:ml-48 ">{name}</h1>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default ProductDetails;