import Brands from "../Brands/Brands";
import Footer from "../Footer/Footer";
import Testimonial from "../Testimonial/Testimonial";
import Banner from "./Banner";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Brands></Brands>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Home;