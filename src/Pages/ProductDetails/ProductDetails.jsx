import { useLoaderData, useParams } from "react-router-dom";


const ProductDetails = () => {
    const products = useLoaderData();
    const { _id, image, name, brandName } = useParams()
    console.log(products);

    const product = products.find(product => product._id === _id)
    console.log(product)
    return (
        <div>
            <h1>{brandName}</h1>
            <h1>{products.name}</h1>
        </div>
    );
};

export default ProductDetails;