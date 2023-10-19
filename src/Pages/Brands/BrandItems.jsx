import { useLoaderData } from "react-router-dom";
import BrandItem from "./BrandItem";


const BrandItems = () => {
    const products = useLoaderData()


    if (!products || products.length === 0) {
        return <div className="text-center text-2xl mt-20 font-extrabold text-violet-800">No data available for this brand.</div>;
    }

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-5 px-3 lg:px-0 container mx-auto">
                {
                    products.map(product => <BrandItem key={product._id} product={product}></BrandItem>)}
            </div>
        </div>
    );
};

export default BrandItems;