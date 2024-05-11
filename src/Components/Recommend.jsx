import { useLoaderData } from "react-router-dom";

const Recommend = () => {
    let queries = useLoaderData()
    let { productBrand, productName, queryTitle, boycottingDetails, imageURL, DateTime, recommendationCount, name, userImge } = queries

    let handleRecommend = (e) => {
        e.preventDefault()
        let form = e.target
        let recomTitle = form.recomTitle.value
        let recomProductName = form.recomProductName.value
        let recomProductImage = form.recomProductImage.value
        let recomReason = form.recomReason.value
        console.log(recomProductName, recomTitle, recomProductImage, recomReason)
    }

    return (
        <div className="flex flex-col lg:flex-row justify-between gap-6 md:w-[95%] w-[90%] mx-auto my-14">
            <div className="lg:w-1/2 overflow-hidden  rounded-lg shadow-md">
                <img className="object-cover w-full h-64" src={imageURL} alt="Article" />
                <div className="p-6">
                    <div>
                        <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">{productName}</span>
                        <a href="#" className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform  hover:underline" tabIndex={"0"} role="link">{queryTitle}</a>
                        <p className="mt-2 text-gray-600">{boycottingDetails}</p>
                        <p className="mt-2 text-gray-600 font-semibold">Brand: <span className="font-normal">{productBrand}</span></p>
                    </div>

                    <div className="mt-4">
                        <div className="flex items-center">
                            <div className="flex items-center w-full">
                                <img className="object-cover h-10 rounded-full" src={userImge} alt="Avatar" />
                                <div className="flex flex-col md:flex-row md:justify-between md:items-center w-full">
                                    <div className="flex flex-col">
                                        <a href="#" className="mx-2 font-semibold " tabIndex={"0"} role="link">{name}</a>
                                        <span className="mx-2 text-xs">{DateTime}</span>
                                    </div>
                                    <p className="mx-2 text-xs md:text-sm">Recommendation: {recommendationCount}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="backdrop-blur-xl my-14 py-10 border-gray-300 border-[1px] rounded-2xl lg:w-1/2">
                <div className="px-6 mx-auto flex flex-col justify-center items-center">
                    <form onSubmit={handleRecommend} className="w-full">
                        <div className="flex items-center justify-center mt-6">
                            <p className="font-bold text-2xl md:text-4xl text-center">Add Recommendation</p>
                        </div>
                        {/* Recommendation Title */}
                        <div className="relative flex flex-col mt-8">
                            <p className="mx-4 font-semibold mb-2">Recommendation Title</p>
                            <input type="text"
                                name="recomTitle"
                                className="w-full rounded-xl py-3 bg-[#15151503]  border-gray-300 border-[1px] px-4  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                placeholder="Recommendation Title"
                                required />
                        </div>
                        {/* Recommended product Name */}
                        <div className="relative flex flex-col mt-8">
                            <p className="mx-4 font-semibold mb-2">Recommended product Name</p>
                            <input type="text"
                                name="recomProductName"
                                className="w-full rounded-xl py-3 bg-[#15151503]  border-gray-300 border-[1px] px-4  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                placeholder="Recommended product Name"
                                required />
                        </div>

                         {/* Recommended product Image */}
                         <div className="relative flex flex-col mt-8">
                            <p className="mx-4 font-semibold mb-2">Recommended Product Image</p>
                            <input type="text"
                                name="recomProductImage"
                                className="w-full rounded-xl py-3 bg-[#15151503]  border-gray-300 border-[1px] px-4  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                placeholder="Recommended Product Image"
                                required />
                        </div>
                         {/* Recommendation reason */}
                         <div className="relative flex flex-col mt-8">
                            <p className="mx-4 font-semibold mb-2">Recommendation Reason</p>
                            <input type="text"
                                name="recomReason"
                                className="w-full rounded-xl py-3 bg-[#15151503]  border-gray-300 border-[1px] px-4  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                placeholder="Recommendation Reason"
                                required />
                        </div>
                        {/* submit */}
                        <div className="mt-6">
                            <input className="btn w-full bg-[#135D66] text-white border-none rounded-3xl" type="submit" value="Add Recommendation" />
                        </div>
                    </form>

                </div>
            </section>
        </div>
    );
};

export default Recommend;