import img1 from "../assets/image/electronics-slider-1.jpg"
import img2 from "../assets/image/Iphone.avif"
import img3 from "../assets/image/electronics-slider-3.jpg"
import img4 from "../assets/image/electronics-slider-4.jpg"
// import img4 from "../assets/image/iphone.jpg"
const ImageSection = () => {
    return (
        <div className="w-[95%] md:w-[85%] mx-auto md:my-24">
            <div className="w-[95%] md:w-[70%] lg:w-[50%] mx-auto text-center my-16 mb-20">
                <h1 className="font-bold text-4xl mb-2">Explore Our Collection</h1>
                <p className="text-gray-500">Discover the latest trends and must-have items in our curated collection. From fashion essentials to tech gadgets, explore our diverse range of products that cater to your every need and desire.</p>
            </div>

            <div className="flex-col justify-center md:grid grid-cols-1 md:grid-cols-3 gap-5 mt-24">
            <div className="hero bg-cover bg-center col-span-3 h-[400px] w-full rounded-xl mb-2" style={{ backgroundImage: `url(${img3})` }}>
            </div>
            <img className="rounded-xl mb-2" src={img1} alt="" />
            <img className="rounded-xl mb-2" src={img2} alt="" />
            <img className="rounded-xl mb-2" src={img4} alt="" />
        </div>
        </div>
    );
};

export default ImageSection;