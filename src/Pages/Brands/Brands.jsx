import { useLoaderData } from "react-router-dom";
import Brand from "./Brand";


const Brands = () => {
    const brands = useLoaderData()
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto mt-10">
                {
                    brands.map(brand=> <Brand key={brand._id} brand={brand}></Brand>)
                }
            </div>
        </div>
    );
};

export default Brands;