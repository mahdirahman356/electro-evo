import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import img from "../assets/image/user.avif"

const Recommendation = ({id}) => {

    
    const { data: recom = [], isLoading } = useQuery({
        queryKey: ["recom", id],
        queryFn: async () => {
            const res = await axios.get(`https://electro-evo-server.vercel.app/recommend/${id}`)
            return res.data
        }
    })

    if (isLoading) {
        return <p>Loading recommendations...</p>;
    }

       return (
        <div>
            {recom.length === 0 ? (
                <p className="text-gray-500 text-center my-4">No recommendation</p>)
                : 
            <>{recom.map((recom, index) =>
                    <div key={index} className="chat chat-end md:p-6">
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
                            <p className="text-xs md:text-sm">{recom.recomReason}</p>
                        </div>
                        <div className="chat-footer flex flex-col justify-end items-end">
                            <p>{recom.recomProductName}</p>
                            <div>
                                <img className="h-16 mt-1 rounded-lg" src={recom.recomProductImage} alt="" />
                            </div>
                        </div>
                    </div>)}
           
            </>}
        </div>
           
    );
};

export default Recommendation;