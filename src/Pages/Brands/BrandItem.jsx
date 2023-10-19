/* eslint-disable react/prop-types */


const BrandItem = ({ product }) => {
    const { image, rating, price, type, brandName, name } = product

    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (i < Math.floor(rating)) {
            stars.push(<span key={i} className="star">&#9733;</span>);
        } else {
            stars.push(<span key={i} className="star">&#9734;</span>);
        }
    }

    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">
                        {name}<div className="badge badge-secondary">NEW</div>
                    </h2>
                    <h1 className="text-lg font-bold">Brand : {brandName}</h1>
                    <p className="text-lg font-semibold">Type : {type}</p>
                    <div className="flex items-center gap-2">
                        <p className="text-lg font-semibold">Price : {price}</p>
                        <div className="star-rating text-orange-500">{stars}</div>
                    </div>
                    <div className="card-actions justify-center mt-3">
                        <button className="text-white rounded btn-sm btn-accent">Details</button>
                        <button className="text-white rounded btn-sm btn-accent">Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandItem;