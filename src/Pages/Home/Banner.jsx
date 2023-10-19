

const Banner = () => {

    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/Z6mpDKN/share-now-fx-Xm1-ECs-V7k-unsplash.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">New Arrival </h1>
                        <p className="mb-5">Explore a curated selection of top-quality cars at Rimberio Automotive. From stylish sedans to rugged SUVs, find the perfect vehicle to suit your lifestyle.</p>
                        <button className="btn btn-success">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;