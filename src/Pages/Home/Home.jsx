import Brands from "../Brands/Brands";
import FeaturedCar from "../FeaturedCar/FeaturedCar";
import Footer from "../Footer/Footer";
import Testimonial from "../Testimonial/Testimonial";
import Banner from "./Banner";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Brands></Brands>
            <FeaturedCar></FeaturedCar>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Home;