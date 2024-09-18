
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


const Slider = () => {
    return (
        <div>
        <Swiper
        spaceBetween={30}
        effect={'fade'}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
        >
            <SwiperSlide>
                <div className="hero min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${slider1})` }}>
                    <div className="hero-overlay bg-gradient-to-r from-[#151515] to-[rgb(21,21,21,0) py-60 md:py-80"></div>
                    <div className=" w-[95%] md:w-[85%] mx-auto text-neutral-content">
                        <div className="md:w-[50%]">
                            <h1 className="mb-5 text-4xl md:5xl lg:text-6xl text-center md:text-start font-bold font mt-4">Empower Your Tech Choices: Find Alternatives with ElectroEvo</h1>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="hero min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${slider2})` }}>
                    <div className="hero-overlay bg-gradient-to-r from-[#151515] to-[rgb(21,21,21,0) py-60 md:py-80"></div>
                    <div className=" w-[95%] md:w-[85%] mx-auto text-neutral-content">
                    <div className="md:w-[50%]">
                            <h1 className="mb-5 text-4xl md:5xl lg:text-6xl text-center md:text-start font-bold font mt-4">Empower Your Tech Choices: Find Alternatives with ElectroEvo</h1>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="hero min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${slider3})` }}>
                    <div className="hero-overlay bg-gradient-to-r from-[#151515] to-[rgb(21,21,21,0) py-60 md:py-80"></div>
                    <div className=" w-[95%] md:w-[85%] mx-auto text-neutral-content">
                    <div className="md:w-[50%]">
                            <h1 className="mb-5 text-4xl md:5xl lg:text-6xl text-center md:text-start font-bold font mt-4">Empower Your Tech Choices: Find Alternatives with ElectroEvo</h1>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="hero min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${slider4})` }}>
                    <div className="hero-overlay bg-gradient-to-r from-[#151515] to-[rgb(21,21,21,0) py-60 md:py-80"></div>
                    <div className=" w-[95%] md:w-[85%] mx-auto text-neutral-content">
                    <div className="md:w-[50%]">
                            <h1 className="mb-5 text-4xl md:5xl lg:text-6xl text-center md:text-start font-bold font mt-4">Empower Your Tech Choices: Find Alternatives with ElectroEvo</h1>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
    );
};

export default Slider;