
import "../App.css"
import bannerBG from "../assets/image/primary-bg.jpg"
const Header = () => {
    return (
        <div className="hero min-h-screen mb-5">
            <div className="hero-content flex-col-reverse lg:flex-row-reverse">
                <img src={bannerBG} className="md:max-w-lg rounded-lg" />
                <div>
                    <h1 className="mb-5 text-4xl md:text-5xl lg:text-6xl text-center md:text-start font-bold font mt-4">Discover the Future of Electronics. Explore Alternative Options Now!</h1>
                    <div className='flex justify-center md:justify-start items-center'>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;