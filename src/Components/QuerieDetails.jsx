import { useLoaderData } from "react-router-dom";

const QuerieDetails = () => {
    let queries = useLoaderData()
    let {productBrand, productName, queryTitle, boycottingDetails, imageURL,DateTime, recommendationCount, name, userImge} = queries
    return (
        <div>
           <div className="card card-side h-full p-4 md:p-7 flex flex-col md:flex-row items-center gap-8 bg-[#ebe9e2] bg-opacity-40 w-[95%] md:w-[80%] mx-auto px-4 my-4 md:my-28">
                <figure className="w-[80%] rounded-xl"><img className="min-w-2xl" src={imageURL} alt="Movie" /></figure>

                <div className='space-y-1'>
                    <p className='font-semibold text-gray-600 text-2xl underline'>{productName}</p>
                    <p className='font-semibold text-gray-600 text-2xl'>{queryTitle}</p>
                    <p className='font-semibold text-gray-600'><span className='font-normal'>{boycottingDetails}</span></p>
                    <p className='font-semibold text-gray-600'>Brand : <span className='font-normal'>{productBrand}</span></p>
                    <div>
                    <div className="flex justify-between items-center mt-5">
                        <div className="flex justify-between items-center gap-4">
                            <img className="w-10 h-10 rounded-full" src={userImge} alt="" />
                            <div>
                                <p className="font-semibold ">{name}</p>
                                <p className="text-sm text-gray-500">{DateTime}</p>
                            </div>
                        </div>
                        <p>Recommendation: {recommendationCount}</p>
                    </div>

                    </div>
                </div>
            </div>     
        </div>
    );
};

export default QuerieDetails;