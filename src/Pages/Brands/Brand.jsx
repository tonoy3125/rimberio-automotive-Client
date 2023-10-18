

const Brand = ({ brand }) => {
    const { _id, brandName, image } = brand;
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img className="rounded-b-xl" src={image} alt="Shoes" /></figure>
                <h1 className="text-5xl font-bold text-center mb-10 mt-5">{brandName}</h1> 
            </div>
        </div>
    );
};

export default Brand;