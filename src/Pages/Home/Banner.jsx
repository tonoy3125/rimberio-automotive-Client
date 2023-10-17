import { Swiper, SwiperSlide } from 'swiper/react';
import 'aos/dist/aos.css'
import AOS from 'aos';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { useEffect } from 'react';

const Banner = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/3pPQzTx/dhiva-krishna-X16z-Xcbx-U4-U-unsplash.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="3000" className="hero-content text-center text-neutral-content">
                            <div className="">
                                <h1 className="text-4xl md:text-6xl font-bold text-center mb-5">Find Your <span className='text-[#ff4605]'>Dream</span> Car</h1>
                                <p className='md:text-base lg:text-base font-semibold mb-5 lg:mb-10 text-center text-[#842929]'>We can help you find the best car. Check our reviews, compare models and find cars for sale.</p>
                                <button className='bg-[#ff635c] px-3 py-2 md:px-5 md:py-3 rounded-lg text-white text-center'>Book Now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/Qmr48nV/sebastiaan-stam-cc-E0s-QMMl5-M-unsplash.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="3000" className="hero-content text-center text-neutral-content">
                            <div className="">
                                <h1 className="text-4xl md:text-6xl font-bold text-center mb-5">Find Your <span className='text-[#ff4605]'>Dream</span> Car</h1>
                                <p className='md:text-base lg:text-base font-semibold mb-5 lg:mb-10 text-center text-[#842929]'>We can help you find the best car. Check our reviews, compare models and find cars for sale.</p>
                                <button className='bg-[#ff635c] px-3 py-2 md:px-5 md:py-3 rounded-lg text-white text-center'>Book Now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/CHnP9rL/nathan-van-egmond-3ls0od-A7mfg-unsplash.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="3000" className="hero-content text-center text-neutral-content">
                            <div className="">
                                <h1 className="text-4xl md:text-6xl font-bold text-center mb-5">Find Your <span className='text-[#ff4605]'>Dream</span> Car</h1>
                                <p className='md:text-base lg:text-base font-semibold mb-5 lg:mb-10 text-center text-[#842929]'>We can help you find the best car. Check our reviews, compare models and find cars for sale.</p>
                                <button className='bg-[#ff635c] px-3 py-2 md:px-5 md:py-3 rounded-lg text-white text-center'>Book Now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/FBvDM7r/talia-PKd-QIG4go-Qc-unsplash.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="3000" className="hero-content text-center text-neutral-content">
                            <div className="">
                                <h1 className="text-4xl md:text-6xl font-bold text-center mb-5">Find Your <span className='text-[#ff4605]'>Dream</span> Car</h1>
                                <p className='md:text-base lg:text-base font-semibold mb-5 lg:mb-10 text-center text-[#842929]'>We can help you find the best car. Check our reviews, compare models and find cars for sale.</p>
                                <button className='bg-[#ff635c] px-3 py-2 md:px-5 md:py-3 rounded-lg text-white text-center'>Book Now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;