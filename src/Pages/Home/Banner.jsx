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
                <SwiperSlide className='relative'>
                    <img src="https://i.ibb.co/xf1VFCF/woman-enjoying-her-financially-independence-while-buying-car.jpg" alt="" />
                    <div data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="3000" className="absolute top-7 md:top-28 lg:top-48 md:left-5 lg:left-[650px] ">
                        <h1 className="text-4xl md:text-6xl font-bold text-center mb-5">Find Your <span className='text-[#ff4605]'>Dream</span> Car</h1>
                        <p className='md:text-base lg:text-base font-semibold mb-5 lg:mb-10 text-center text-[#842929]'>We can help you find the best car. Check our reviews, compare models and find cars for sale.</p>
                        <button className='bg-[#ff635c] px-3 py-2 md:px-5 md:py-3 rounded-lg text-white text-center ml-36 md:ml-80 lg:ml-80'>Book Now</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <img src="https://i.ibb.co/bKMwP2H/man-woman-closing-deal.jpg" alt="" />
                    <div data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="3000" className="absolute top-7 md:top-28 lg:top-36 md:left-5 lg:left-[650px] ">
                        <h1 className="text-4xl md:text-6xl font-bold text-center mb-5">Find Your <span className='text-[#ff4605]'>Dream</span> Car</h1>
                        <p className='md:text-base lg:text-base font-semibold mb-5 lg:mb-10 text-center text-[#842929]'>We can help you find the best car. Check our reviews, compare models and find cars for sale.</p>
                        <button className='bg-[#ff635c] px-3 py-2 md:px-5 md:py-3 rounded-lg text-white text-center ml-36 md:ml-80 lg:ml-80'>Book Now</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <img src="https://i.ibb.co/HLyYS6c/young-woman-choosing-car-car-showroom.jpg" alt="" />
                    <div data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="3000" className="absolute top-7 md:top-28 lg:top-36 md:left-5 lg:left-[650px] ">
                        <h1 className="text-4xl md:text-6xl font-bold text-center mb-5">Find Your <span className='text-[#ff4605]'>Dream</span> Car</h1>
                        <p className='md:text-base lg:text-base font-semibold mb-5 lg:mb-10 text-center text-[#842929]'>We can help you find the best car. Check our reviews, compare models and find cars for sale.</p>
                        <button className='bg-[#ff635c] px-3 py-2 md:px-5 md:py-3 rounded-lg text-white text-center ml-36 md:ml-80 lg:ml-80'>Book Now</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <img src="https://i.ibb.co/CKr1ych/close-up-customer-with-business-person-car-dealership.jpg" alt="" />
                    <div data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="3000" className="absolute top-7 md:top-28 lg:top-36 md:left-5 lg:left-[650px] ">
                        <h1 className="text-4xl md:text-6xl font-bold text-center mb-5">Find Your <span className='text-[#ff4605]'>Dream</span> Car</h1>
                        <p className='md:text-base lg:text-base font-semibold mb-5 lg:mb-10 text-center text-[#842929]'>We can help you find the best car. Check our reviews, compare models and find cars for sale.</p>
                        <button className='bg-[#ff635c] px-3 py-2 md:px-5 md:py-3 rounded-lg text-white text-center ml-36 md:ml-80 lg:ml-80'>Book Now</button>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;