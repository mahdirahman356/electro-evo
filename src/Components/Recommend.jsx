import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Context/Context";
import axios from "axios";
import Swal from "sweetalert2";
import img from "../assets/image/user.avif"
const Recommend = () => {
    let queries = useLoaderData()
    let { user } = useContext(AuthContext)
    let { _id, productBrand, productName, queryTitle, boycottingDetails, imageURL, DateTime, recommendationCount, name, email, userImge } = queries
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    const [updatedRecommendationCount, setUpdatedRecommendationCount] = useState(recommendationCount)
    let [recommend, setRecommend] = useState([])



    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const TimeStamp = currentDateTime.toLocaleString();
    
    let handleRecommend = (e) => {
        e.preventDefault()
        let form = e.target;
        let recomTitle = form.recomTitle.value
        let recomProductName = form.recomProductName.value
        let recomProductImage = form.recomProductImage.value
        let recomReason = form.recomReason.value
        let recommend = { queriesId: _id, recomProductName, authURL: userImge, recomTitle, recomProductImage, recomReason, queryTitle, productName, name, email, TimeStamp, recommendationEmail: user.email, recommendationName: user.displayName, recommendationAuthURL: user.photoURL }
        console.log(recommend)
        axios.post('https://electro-evo-server.vercel.app/recommend', recommend)
            .then(res => {
                console.log(res.data)
                if (res.data.acknowledged === true) {
                    axios.patch(`https://electro-evo-server.vercel.app/queries/${_id}`)
                    .then((newRes) => {
                        if(newRes.data.modifiedCount > 0)
                        setUpdatedRecommendationCount(updatedRecommendationCount+1);
                    })
                    form.reset()
                    Swal.fire({
                        title: 'Success',
                        text: 'Recommendation Added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://electro-evo-server.vercel.app/recommend/${_id}`);
                setRecommend(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
        const interval = setInterval(fetchData, 1000);
        return () => clearInterval(interval);
    }, [_id]);
    return (
        <div className="flex flex-col lg:flex-row justify-between gap-6 md:w-[95%] w-[90%] mx-auto my-14">
            <div className="lg:w-1/2 overflow-hidden  rounded-lg shadow-md">
                <img className="object-cover w-full h-64" src={imageURL} alt="Article" />
                <div className="p-6">
                    <div>
                        <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">{productName}</span>
                        <a href="#" className="block mt-2 text-xl font-semibold transition-colors duration-300 transform  hover:underline" tabIndex={"0"} role="link">{queryTitle}</a>
                        <p className="mt-2">{boycottingDetails}</p>
                        <p className="mt-2 font-semibold">Brand: <span className="font-normal">{productBrand}</span></p>
                    </div>

                    <div className="mt-4">
                        <div className="flex items-center">
                            <div className="flex items-center w-full">
                                <img className="object-cover h-10 rounded-full" src={userImge ? userImge : img} alt="Avatar" />
                                <div className="flex flex-col md:flex-row md:justify-between md:items-center w-full">
                                    <div className="flex flex-col">
                                        <a href="#" className="mx-2 font-semibold " tabIndex={"0"} role="link">{name}</a>
                                        <span className="mx-2 text-xs">{DateTime}</span>
                                    </div>
                                    <p className="mx-2 text-xs md:text-sm">Recommendation: {updatedRecommendationCount}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {recommend.map((recom, index) =>
                    <div key={index} className="chat chat-end p-6">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS chat bubble component" src={recom.recommendationAuthURL ? recom.recommendationAuthURL : img} />
                            </div>
                        </div>
                        <div className="chat-header flex items-center flex-col md:flex-row">
                            <span className="md:mr-2 text-end">{recom.recommendationName}</span>
                            <time className="text-xs opacity-50">{recom.TimeStamp}</time>
                        </div>
                        <div className="chat-bubble bg-gray-100 text-gray-500">
                            <p className="text-gray-800 font-semibold">{recom.recomTitle}</p>
                            {recom.recomReason}
                        </div>
                        <div className="chat-footer flex flex-col justify-end items-end">
                            <p>{recom.recomProductName}</p>
                            <div>
                                <img className="h-16 mt-1 rounded-lg" src={recom.recomProductImage} alt="" />
                            </div>
                        </div>
                    </div>)}

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
