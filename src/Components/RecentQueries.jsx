// import { useEffect, useState } from "react";
import userImg from "../assets/image/user.avif"
import axios from "axios";
import Recommendation from "./Recommendation";
import { FaRegComment, FaRegComments } from "react-icons/fa";
import QuerieDetails from "./QuerieDetails";
import Recommend from "./Recommend";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
const RecentQueries = () => {

    const { data: recentQueries = [], refetch } = useQuery({
        queryKey: ["recentQueries"],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/queries`)
            const sortedQueries = res.data.sort((a, b) => new Date(b.DateTime) - new Date(a.DateTime))

            return sortedQueries.slice(0, 6)
        }
    })

    return (
        <div>
            <div className="w-[95%] md:w-[70%] lg:w-[50%] mx-auto text-center my-16 mb-20">
                <h1 className="font-bold text-4xl mb-2">Latest Product Queries</h1>
                <p className="text-gray-500">Explore the latest inquiries and discussions surrounding electronic products. Stay informed about what others are curious about and join the conversation to discover alternative options and recommendations.</p>
            </div>

            <div className="w-[95%] md:w-[85%] mx-auto my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    recentQueries.map((queries, index) => <div key={index}>
                        <div className="card h-full bg-base-100 shadow-xl rounded-xl">
                            <div className="flex items-center gap-4 mt-2 mb-6 pl-3">
                                <img className="w-10 h-10 rounded-full" src={queries.userImge ? queries.userImge : userImg} alt="" />
                                <div>
                                    <p className="font-semibold ">{queries.name}</p>
                                    <p className="text-sm text-gray-500">{queries.DateTime}</p>
                                </div>
                            </div>
                            <figure><img src={queries.imageURL} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title font-bold">{queries.productName}</h2>
                                <h2 className="">{queries.queryTitle}
                                    {/* see details modal start  */}
                                    <div className="my-2">
                                        <div className="">
                                            <button onClick={() => window[`my_modal_details_${queries._id}`].showModal()} className="text-sm">
                                                <span className="text-blue-500">See Details...</span>
                                            </button>
                                        </div>
                                        <dialog id={`my_modal_details_${queries._id}`} className="modal">
                                            <div className="modal-box p-0 md:p-6">
                                                <form method="dialog">
                                                    <button className="btn btn-sm bg-gray-100 btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                </form>
                                                <QuerieDetails id={queries._id}></QuerieDetails>
                                            </div>
                                        </dialog>
                                    </div>
                                    {/* see details modal end  */}                                </h2>
                                <div className="flex flex-wrap justify-between">
                                    {/* recommendations modal start  */}
                                    <div className="my-2">
                                        <div className="indicator">
                                            <span className="indicator-item badge text-white bg-[#135D66]">{queries.recommendationCount}</span>
                                            <button onClick={() => window[`my_modal_${queries._id}`].showModal()} className="btn btn-sm w-36">
                                                <FaRegComments />
                                                <span className="text-xs">Recommendation</span>
                                            </button>
                                        </div>
                                        <dialog id={`my_modal_${queries._id}`} className="modal">
                                            <div className="modal-box">
                                                <form method="dialog">
                                                    <button className="btn btn-sm bg-gray-100 btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                </form>
                                                <Recommendation id={queries._id}></Recommendation>
                                            </div>
                                        </dialog>
                                    </div>
                                    {/* recommendations modal end  */}


                                    {/* recommend modal start  */}
                                    <div className="my-2">
                                        <div className="">
                                            <button onClick={() => window[`my_modal_Recommend_${queries._id}`].showModal()} className="btn btn-sm w-36">
                                                <FaRegComment />
                                                <span className="text-xs">Recommend</span>
                                            </button>
                                        </div>
                                        <dialog id={`my_modal_Recommend_${queries._id}`} className="modal">
                                            <div className="modal-box">
                                                <form method="dialog">
                                                    <button className="btn btn-sm bg-gray-100 btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                </form>
                                                <Recommend refetch={refetch} id={queries._id}></Recommend>
                                            </div>
                                        </dialog>
                                    </div>
                                    {/* recommend modal end  */}
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <div className="flex justify-center items-center my-6">
                <Link to="/queries">
                    <button className="btn bg-gradient-to-r from-[#0E4A52] to-[#135D66] border-none text-white hover:from-[#0A3940] hover:to-[#0E4A52] hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out rounded-full text-xl flex items-center justify-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                        </svg>
                        <span>Explore All Queries</span>
                    </button>   
                </Link>
            </div>
        </div>
    );
};

export default RecentQueries;