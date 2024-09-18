import laptop from "../assets/image/laptop.avif"
const Banner = () => {
    return (
        <div className="w-[95%] md:w-[85%] mx-auto rounded-2xl md:my-24">
            <header className="bg-white rounded-2xl">

    <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
        <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
                <h1 className="text-4xl md:text-5xl font-semibold">Unlock Limitless Possibilities</h1>
                <p className="mt-4 text-gray-500">Welcome to our alternative product information system, where you can discover innovative solutions tailored to your preferences. Explore our curated collection and find the perfect alternatives to meet your needs, whether its tech gadgets, fashion essentials, or lifestyle upgrades. Start exploring today and unlock a world of limitless possibilities!</p>
                <div className="grid gap-6 mt-8 sm:grid-cols-2">
                    <div className="flex items-center px-3 text-gray-500">
                        <svg className="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>

                        <span className="mx-3">Variety</span>
                    </div>

                    <div className="flex items-center px-3 text-gray-500">
                        <svg className="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>

                        <span className="mx-3">Innovation</span>
                    </div>

                    <div className="flex items-center px-3 text-gray-500">
                        <svg className="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>

                        <span className="mx-3">Customization</span>
                    </div>

                    <div className="flex items-center px-3 text-gray-500">
                        <svg className="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>

                        <span className="mx-3">Accessibility</span>
                    </div>

                    <div className="flex items-center px-3 text-gray-500">
                        <svg className="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>

                        <span className="mx-3">Information</span>
                    </div>

                    <div className="flex items-center px-3 text-gray-500">
                        <svg className="w-5 h-5 mx-3" xmlns="http://www.w3.org/200width0/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>

                        <span className="mx-3">Updates</span>
                    </div>
                </div>
            </div>
        </div>

        <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
            <img className="object-cover w-full h-full max-w-2xl rounded-md" src={laptop} alt="" />
        </div>
    </div>
</header>
        </div>
    );
};

export default Banner;