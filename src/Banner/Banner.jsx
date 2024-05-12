import laptop from "../assets/image/laptop.avif"
const Banner = () => {
    return (
        <div className="w-[95%] md:w-[85%] mx-auto rounded-2xl md:my-24">
            <header className="bg-white rounded-2xl">
    <nav   className="border-b dark:border-gray-700">
        <div className="container px-6 py-6 mx-auto lg:flex lg:justify-between lg:items-center">
            <div className="flex items-center justify-between">
                <div className="flex lg:hidden">
                    <button type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                        <svg xlinkShow="!isOpen" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                        </svg>
                
                        <svg xlinkShow="isOpen" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className={`opacity-0 -translate-x-full`}>
                <div className="flex flex-col space-y-8 lg:flex-row lg:items-center lg:space-y-0 lg:-px-8">
                    <a className="block font-medium dark:text-gray-200 lg:mx-8 hover:text-gray-900 dark:hover:text-gray-400 hover:underline" href="#">glasses Search</a>
                    <a className="block font-medium dark:text-gray-200 lg:mx-8 hover:text-gray-900 dark:hover:text-gray-400 hover:underline" href="#">How it works!</a>
                    <a className="block font-medium dark:text-gray-200 lg:mx-8 hover:text-gray-900 dark:hover:text-gray-400 hover:underline" href="#">Why us?</a>
                    <a className="block font-medium dark:text-gray-200 lg:mx-8 hover:text-gray-900 dark:hover:text-gray-400 hover:underline" href="#">Contact</a>

                    <button className="flex items-center justify-center px-5 py-2 text-sm font-medium tracking-wide text-center text-white capitalize transition-colors duration-300 transform bg-gray-700 rounded-lg hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                        Get in touch
                    </button>
                </div>
            </div>
        </div>
    </nav>

    <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
        <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
                <h1 className="text-5xl font-semibold">Unlock Limitless Possibilities</h1>
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