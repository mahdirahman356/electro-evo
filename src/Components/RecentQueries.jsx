import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import userImg from "../assets/image/user.avif"

const RecentQueries = () => {
    let [recentQueries, setRecentQueries] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:5000/queries`)
            .then(res => {
                const sortedQueries = res.data.sort((a, b) => new Date(b.DateTime) - new Date(a.DateTime));
                setRecentQueries(sortedQueries.slice(0, 6));
            })
    }, [])

    return (
        <div>
            <div className="w-[95%] md:w-[70%] lg:w-[50%] mx-auto text-center my-16 mb-20">
                <h1 className="font-bold text-4xl mb-2">Latest Product Queries</h1>
                <p className="text-gray-500">Explore the latest inquiries and discussions surrounding electronic products. Stay informed about what others are curious about and join the conversation to discover alternative options and recommendations.</p>
            </div>

            <div className="w-[95%] md:w-[85%] mx-auto my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    recentQueries.map((queries, index) => <div key={index}>
                        <div className="card h-full bg-base-100 shadow-xl">
                            <figure><img src={queries.imageURL} alt="Shoes" /></figure>
                            <div className="card-body"> 
                                <h2 className="card-title underline">{queries.productName}:</h2>
                                <h2 className="card-title">{queries.queryTitle}</h2>
                                <p className='font-semibold text-gray-600'><span className='font-normal'>{queries.boycottingDetails}</span></p>
                                <p className='font-semibold'>Brand: <span className='font-normal'>{queries.productBrand}</span></p>
                                <p className='font-semibold'>Recommendation: <span className='font-normal'>{queries.recommendationCount}</span></p>
                                <div className="flex items-center gap-4 mt-2 mb-6">
                                    <img className="w-10 h-10 rounded-full" src={queries.userImge ? queries.userImge : userImg} alt="" />
                                    <div>
                                        <p className="font-semibold ">{queries.name}</p>
                                        <p className="text-sm text-gray-500">{queries.DateTime}</p>
                                    </div>
                                </div>
                                <div className="flex justify-end items-center gap-3">
                                    <Link className="w-full" to={`/recommend/${queries._id}`}><button className="btn w-full rounded-3xl bg-[#135D66] border-none text-white">Recommend</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default RecentQueries;