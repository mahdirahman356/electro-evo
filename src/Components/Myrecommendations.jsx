import { useContext, useEffect, useState } from "react";
import primaryBG from "../assets/image/primary-bg.jpg"
import axios from "axios";
import { AuthContext } from "../Context/Context";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";
import img from "../assets/image/user.avif"
const Myrecommendations = () => {
    let quary = useLoaderData()
    let { user } = useContext(AuthContext)
    let [recommend, setRecommend] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5000/recommend/myRecommrnd/${user.email}`, {withCredentials:true})
            .then(res => {
                setRecommend(res.data)
            })
    }, [])

    let handleDelete = (id, queriesId) => {
        console.log(id)
        console.log(queriesId)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/recommend/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your recommend has been deleted.",
                                icon: "success"
                            });
                            let DeleteCard = recommend.filter(tourist => tourist._id !== id)
                            setRecommend(DeleteCard)
                            let findId = quary.find(quary => quary._id === queriesId)
                            console.log(findId)
                            axios.patch(`http://localhost:5000/queries/${queriesId}`, {
                                recommendationCount: findId.recommendationCount - 1 
                            });
                        }
                    })
            }
        });
    }      

    return (
        <div>
            <div className="hero bg-cover bg-center w-[95%] md:w-[85%] mx-auto my-12 rounded-3xl" style={{ backgroundImage: `url(${primaryBG})` }}>
                <div className="hero-overlay bg-gradient-to-r from-[#151515] to-[rgb(21,21,21,0) py-40 rounded-3xl"></div>
                <div className=" w-[95%] md:w-[85%] mx-auto text-neutral-content">
                    <div className="md:w-[50%] mx-auto">
                        <h1 className="mb-5 text-3xl md:text-4xl text-center font-bold font mt-4">My Recommendations History</h1>
                    </div>
                </div>
            </div>
            <div className="w-[w-95%] md:w-[80%] mx-auto my-14">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Actions</th>
                                <th>Recommendedtion Product</th>
                                <th>Recommended Product Name</th>
                                <th>Recommendetion For</th>
                                <th>Recommendation Reason</th>
                                <th>Date/Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {recommend.map((recom, index) => <tr key={index}>
                                <th>
                                    <button onClick={() => handleDelete(recom._id, recom.queriesId)} className="btn btn-circle btn-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </th>
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
                                                <img src={recom.authURL ? recom.authURL : img} alt="" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold text-xs">{recom.name}</div>
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

export default Myrecommendations;