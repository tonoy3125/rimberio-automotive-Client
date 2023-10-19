import { useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";


const ProductDetails = () => {
    const products = useLoaderData();
    const [newProduct] = products
    const { brandName, image, name, description, price, type } = newProduct
    console.log(products);

    // const product = products.find(product => product._id === _id)
    // console.log(product)
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
                            <button className="btn btn-accent">Add To Cart</button>
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