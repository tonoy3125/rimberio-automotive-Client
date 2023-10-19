

const Cartdetails = ({ cart }) => {
    const { image, email, price, name, type } = cart
    return (
        <div >
            <div className="bg-base-100 shadow-xl flex flex-col lg:flex-row items-center gap-5 lg:p-5 pb-10">
                <img className="lg:w-1/2 px-2 lg:px-0 rounded-lg" src={image} alt="" />
                <div>
                    <h1 className="text-4xl text-center">{name}</h1>
                    <div className="flex gap-8 mt-5 justify-center">
                        <p className="text-xl font-semibold">price : {price}</p>
                        <p className="text-xl font-semibold">Type: {type}</p>
                    </div>
                    <div className=" ml-36 md:ml-32 mt-7">
                        <button className="btn btn-accent">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cartdetails;