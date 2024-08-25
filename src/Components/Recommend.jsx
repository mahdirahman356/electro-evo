import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/Context";
import axios from "axios";
import Swal from "sweetalert2";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import useRecommendation from "../Hooks/useRecommendation";

const Recommend = ({ id, refetch }) => {
    let { user } = useContext(AuthContext)
    const queryClient = useQueryClient();
    const [, refetchRecommendation] = useRecommendation()
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    const { data: querieDetails = {} } = useQuery({
        queryKey: ["querieDetails", id],
        queryFn: async () => {
            const res = await axios.get(`https://electro-evo-server.vercel.app/queries/${id}`)
            return res.data
        }
    })


    const { _id, userImge, queryTitle, productName, email, name } = querieDetails

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const TimeStamp = currentDateTime.toLocaleString();

    let handleRecommend = async(e) => {
        e.preventDefault()
        let form = e.target;
        let recomTitle = form.recomTitle.value
        let recomProductName = form.recomProductName.value
        let recomProductImage = form.recomProductImage.value
        let recomReason = form.recomReason.value
        let recommend = { queriesId: _id, recomProductName, authURL: userImge, recomTitle, recomProductImage, recomReason, queryTitle, productName, name, email, TimeStamp, recommendationEmail: user.email, recommendationName: user.displayName, recommendationAuthURL: user.photoURL }
        console.log(recommend)
        try {
            const res = await axios.post('https://electro-evo-server.vercel.app/recommend', recommend);
            if (res.data.acknowledged) {
                const updateRes = await axios.patch(`https://electro-evo-server.vercel.app/queries/${_id}`);
                if (updateRes.data.modifiedCount > 0) {
                    form.reset();
                    Swal.fire({
                        title: 'Success',
                        text: 'Recommendation Added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    });
                    refetch();
                    await refetchRecommendation()
                    queryClient.invalidateQueries(["recom"]);
                }
            }
        } catch (error) {
            console.error('Error adding recommendation:', error);
        }
    }

    return (
        <div className="md:w-[95%] w-[90%] mx-auto">

            <section className="backdrop-blur-xl my-3 py-3 border-gray-300 rounded-2xl">
                <div className="px-6 mx-auto flex flex-col justify-center items-center">
                    <form onSubmit={handleRecommend} className="w-full">
                        <div className="flex items-center justify-center mt-2">
                            <p className="font-bold text-xl md:text-2xl text-center">Add Recommendation</p>
                        </div>
                        {/* Recommendation Title */}
                        <div className="relative flex flex-col mt-8">
                            <input type="text"
                                name="recomTitle"
                                className="w-full py-3 bg-[#15151503]  border-gray-300 border-b-[1px] px-4  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                placeholder="Recommendation Title"
                                required />
                        </div>
                        {/* Recommended product Name */}
                        <div className="relative flex flex-col mt-8">
                            <input type="text"
                                name="recomProductName"
                                className="w-full py-3 bg-[#15151503]  border-gray-300 border-b-[1px] px-4  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                placeholder="Recommended product Name"
                                required />
                        </div>

                        {/* Recommended product Image */}
                        <div className="relative flex flex-col mt-8">
                            <input type="text"
                                name="recomProductImage"
                                className="w-full py-3 bg-[#15151503]  border-gray-300 border-b-[1px] px-4  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                placeholder="Recommended Product Image"
                                required />
                        </div>
                        {/* Recommendation reason */}
                        <div className="relative flex flex-col mt-8">
                            <input type="text"
                                name="recomReason"
                                className="w-full py-3 bg-[#15151503]  border-gray-300 border-b-[1px] px-4  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
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
