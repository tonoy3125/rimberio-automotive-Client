/* eslint-disable react/prop-types */

import Brand from "./Brand";



const Brands = ({products}) => {
    

    return (
        <div className="bg-[#f3E3E2]">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto pt-10 pb-10 px-3 md:px-0">
                {
                    products.map(brand => <Brand key={brand._id} brand={brand}></Brand>)
                }
            </div>
        </div>
    );
};

export default Brands;