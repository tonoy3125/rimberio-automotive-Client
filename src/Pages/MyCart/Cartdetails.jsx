

const Cartdetails = ({ cart }) => {
    const { image, email, price, name, type } = cart
    return (
        <div >
            <div className="bg-base-100 w-full shadow-xl flex p-5">
                <figure><img className="w-1/2 rounded-lg" src={image} alt="Movie" /></figure>
                <div>
                    <h1 className="text-4xl">{name}</h1>
                </div>
            </div>
        </div>
    );
};

export default Cartdetails;