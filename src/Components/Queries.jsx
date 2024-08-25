import { useState } from "react";
import image from "../assets/image/electronics-slider-3.jpg"
import userImg from "../assets/image/user.avif"
import { FaChevronDown, FaRegComment, FaRegComments, FaSearchengin } from "react-icons/fa";
import axios from "axios";
import Recommend from "./Recommend";
import Recommendation from "./Recommendation";
import QuerieDetails from "./QuerieDetails";
import { useQuery } from "@tanstack/react-query";


const Queries = () => {
    let [search, setSearch] = useState("")
    let [layout, setLayout] = useState("grid-cols-3")

    const { data: allQueries = [], refetch, isLoading } = useQuery({
        queryKey: ["allQueries", search],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/queries?search=${search}`)
            const sortedQueries = res.data.sort((a, b) => new Date(b.DateTime) - new Date(a.DateTime))
            return sortedQueries
        }
    })

    let handleSearch = (e) => {
        e.preventDefault()
        let search = e.target.search.value
        setSearch(search)
        console.log(search)
    }

    let handleLayout = (ChangeCol) => {
        setLayout(ChangeCol)
    }

    return (
        <div>

            <div className="hero bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
                <div className="hero-overlay bg-gradient-to-r from-[#151515] to-[rgb(21,21,21,0) py-60 md:py-80"></div>
                <div className=" w-[95%] md:w-[85%] mx-auto text-neutral-content">
                    <div className="md:w-[50%]">
                        <h1 className="mb-5 text-4xl md:5xl lg:text-6xl text-center md:text-start font-bold font mt-4">Discover Smarter Tech Solutions: Explore Alternatives with ElectroEvo</h1>
                    </div>
                </div>
            </div>



            <div className="flex flex-wrap w-[95%] md:w-[85%] mx-auto my-12">
                <div className="">
                    <div className="">
                        <div className="bg-gray-200 p-2 rounded-3xl flex-1 mb-5">
                            <form onSubmit={handleSearch} className="flex">
                                <input type="text" name="search" placeholder="Search Product" className="flex-1 px-4 bg-transparent bg-gray-200 border-none focus:outline-none focus:placeholder-transparent rounded-lg mr-2 focus:ring-0" />
                                 <button className="" type="submit">
                                 <FaSearchengin className="text-xl text-gray-600"/>
                                 </button>
                            </form>
                        </div>
                    </div>
                </div>
                <details className="dropdown">
                    <summary className="m-1 hover:bg-slate-300 btn btn-sm btn-outline text-gray-600 border-none">Change Layout <FaChevronDown /></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><a onClick={() => handleLayout("grid-cols-2")}>2 column</a></li>
                        <li><a onClick={() => handleLayout("grid-cols-3")}>3 column</a></li>
                    </ul>
                </details>
            </div>


            {isLoading ? (
                <div className="flex justify-center items-center w-full h-screen">
                    <span className="loading loading-spinner loading-lg"></span>
                </div>
            ) :

                (<div className={`w-[95%] md:w-[85%] mx-auto my-12 grid sm:grid-cols-1 md:grid-cols-2 lg:${layout} gap-10`}>
                    {
                        allQueries.map((queries, index) => <div key={index}>
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
                                        {/* see details modal end  */}                   </h2>
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

                </div>)}

        </div>
    );
};

export default Queries;