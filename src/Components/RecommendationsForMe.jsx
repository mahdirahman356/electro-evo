import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/Context";
import axios from "axios";
import primaryBG from "../assets/image/primary-bg.jpg"

const RecommendationsForMe = () => {
    let { user } = useContext(AuthContext)
    let [recommend, setRecommend] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5000/recommend/RecommendForMe/${user.email}`)
            .then(res => {
                setRecommend(res.data)
            })
    }, [])
    return (
        <div>
            <div className="hero bg-cover bg-center w-[95%] md:w-[85%] mx-auto my-12 rounded-3xl" style={{ backgroundImage: `url(${primaryBG})` }}>
                <div className="hero-overlay bg-gradient-to-r from-[#151515] to-[rgb(21,21,21,0) py-40 rounded-3xl"></div>
                <div className=" w-[95%] md:w-[85%] mx-auto text-neutral-content">
                    <div className="md:w-[50%] mx-auto">
                        <h1 className="mb-5 text-3xl md:text-4xl text-center font-bold font mt-4">Personalized Recommendations</h1>
                    </div>
                </div>
            </div>
            <div className="w-[w-95%] md:w-[80%] mx-auto my-14">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Recommended Product</th>
                                <th>Recommended Product Name</th>
                                <th>Recommended By</th>
                                <th>Recommendation Reason</th>
                                <th>Date/Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {recommend.map((recom, index) => <tr key={index}>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-14 h-14">
                                                <img src={recom.recomProductImage} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span className="">{recom.recomProductName}</span>
                                </td>

                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className=" w-10 h-10 rounded-full">
                                                <img src={recom.recommendationAuthURL} alt="" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold text-xs">{recom.recommendationName}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span className="text-xs">{recom.recomReason}</span>
                                </td>
                                <td>
                                    <span className="text-xs">{recom.TimeStamp}</span>
                                </td>
                            </tr>)}
                        </tbody>
                        {/* foot */}


                    </table>
                </div>
            </div>
        </div>
    );
};

export default RecommendationsForMe;