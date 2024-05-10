import { useEffect, useState } from "react";
import primaryBG from "../assets/image/primary-bg.jpg"
import axios from "axios";
import userImg from "../assets/image/user.avif"


const Queries = () => {

    let [allQueries, setAllQueries] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:5000/queries`)
            .then(res => {
                const sortedQueries = res.data.sort((a, b) => new Date(b.DateTime) - new Date(a.DateTime));
                setAllQueries(sortedQueries);
            })
    }, [])
    return (
        <div>
             <div className="hero bg-cover bg-center w-[95%] md:w-[85%] mx-auto my-12 rounded-3xl" style={{ backgroundImage: `url(${primaryBG})` }}>
                <div className="hero-overlay bg-gradient-to-r from-[#151515] to-[rgb(21,21,21,0) py-40 rounded-3xl"></div>
                <div className=" w-[95%] md:w-[85%] mx-auto text-neutral-content">
                    <div className="md:w-[50%] mx-auto">
                        <h1 className="mb-5 text-4xl text-center font-bold font mt-4">Explore Queries</h1>
                    </div>
                </div>
            </div>

            <div className="w-[95%] md:w-[85%] mx-auto my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        allQueries.map((queries, index) => <div key={index}>
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
                                        <button className="btn w-full rounded-3xl bg-[#135D66] border-none text-white">Recommend</button>                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>

        </div>
    );
};

export default Queries;