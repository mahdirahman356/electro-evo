import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import slider1 from "../assets/image/electronics-slider-1.jpg"
import slider2 from "../assets/image/electronics-slider-2.avif"
import slider3 from "../assets/image/electronics-slider-3.jpg"
import slider4 from "../assets/image/electronics-slider-4.jpg"
import "../App.css"

// import required modules

const Header = () => {
    return (
        <div>
            <Swiper
            spaceBetween={30}
            effect={'fade'}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[EffectFade, Navigation, Pagination, Autoplay]}
            className="mySwiper"
            >
                <SwiperSlide>
                    <div className="hero bg-cover bg-center" style={{ backgroundImage: `url(${slider1})` }}>
                        <div className="hero-overlay bg-gradient-to-r from-[#151515] to-[rgb(21,21,21,0) py-60 md:py-80"></div>
                        <div className=" w-[95%] md:w-[85%] mx-auto text-neutral-content">
                            <div className="md:w-[50%]">
                                <h1 className="mb-5 text-4xl md:5xl lg:text-6xl text-center md:text-start font-bold font mt-4">Discover the Future of Electronics. Explore Alternative Options Now!</h1>
                                <p className="mb-5  text-center md:text-start">At ElectroEvo, we believe in shaping the future of electronics by providing innovative alternatives. Explore our platform to discover a diverse range of tech products, find sustainable solutions, and make informed choices. Join us in revolutionizing the way we interact with technology</p>
                                <div className='flex justify-center md:justify-start items-center'>
                                    <button className="btn bg-[#135D66] border-none text-white mr-3">Explore All Queries</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="hero bg-cover bg-center" style={{ backgroundImage: `url(${slider2})` }}>
                        <div className="hero-overlay bg-gradient-to-r from-[#151515] to-[rgb(21,21,21,0) py-60 md:py-80"></div>
                        <div className=" w-[95%] md:w-[85%] mx-auto text-neutral-content">
                            <div className="md:w-[50%]">
                            <h1 className="mb-5 text-4xl md:5xl lg:text-6xl text-center md:text-start font-bold font mt-4">Discover the Future of Electronics. Explore Alternative Options Now!</h1>
                                <p className="mb-5  text-center md:text-start">At ElectroEvo, we believe in shaping the future of electronics by providing innovative alternatives. Explore our platform to discover a diverse range of tech products, find sustainable solutions, and make informed choices. Join us in revolutionizing the way we interact with technology</p>
                                <div className='flex justify-center md:justify-start items-center'>
                                <button className="btn bg-[#135D66] border-none text-white mr-3">Explore All Queries</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="hero bg-cover bg-center" style={{ backgroundImage: `url(${slider3})` }}>
                        <div className="hero-overlay bg-gradient-to-r from-[#151515] to-[rgb(21,21,21,0) py-60 md:py-80"></div>
                        <div className=" w-[95%] md:w-[85%] mx-auto text-neutral-content">
                            <div className="md:w-[50%]">
                            <h1 className="mb-5 text-4xl md:5xl lg:text-6xl text-center md:text-start font-bold font mt-4">Discover the Future of Electronics. Explore Alternative Options Now!</h1>
                                <p className="mb-5  text-center md:text-start">At ElectroEvo, we believe in shaping the future of electronics by providing innovative alternatives. Explore our platform to discover a diverse range of tech products, find sustainable solutions, and make informed choices. Join us in revolutionizing the way we interact with technology</p>
                                <div className='flex justify-center md:justify-start items-center'>
                                <button className="btn bg-[#135D66] border-none text-white mr-3">Explore All Queries</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="hero bg-cover bg-center" style={{ backgroundImage: `url(${slider4})` }}>
                        <div className="hero-overlay bg-gradient-to-r from-[#151515] to-[rgb(21,21,21,0) py-60 md:py-80"></div>
                        <div className=" w-[95%] md:w-[85%] mx-auto text-neutral-content">
                            <div className="md:w-[50%]">
                            <h1 className="mb-5 text-4xl md:5xl lg:text-6xl text-center md:text-start font-bold font mt-4">Discover the Future of Electronics. Explore Alternative Options Now!</h1>
                                <p className="mb-5  text-center md:text-start">At ElectroEvo, we believe in shaping the future of electronics by providing innovative alternatives. Explore our platform to discover a diverse range of tech products, find sustainable solutions, and make informed choices. Join us in revolutionizing the way we interact with technology</p>
                                <div className='flex justify-center md:justify-start items-center'>
                                <button className="btn bg-[#135D66] border-none text-white mr-3">Explore All Queries</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Header;