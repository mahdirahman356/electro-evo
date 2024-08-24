import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Img from "../assets/image/user.avif"

const QuerieDetails = ({ id }) => {

    const { data: querieDetails = [] } = useQuery({
        queryKey: ["querieDetails", id],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/queries/${id}`)
            return res.data
        }
    })

    const { imageURL, productName, queryTitle, boycottingDetails, productBrand, userImge, name, DateTime, } = querieDetails

    return (
        <div>
            <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg">
                <div className="flex items-center gap-4 mt-2 mb-6 pl-3">
                    <img className="w-10 h-10 rounded-full" src={userImge ? userImge : Img} alt="" />
                    <div>
                        <p className="font-semibold ">{name}</p>
                        <p className="text-sm text-gray-500">{DateTime}</p>
                    </div>
                </div>
                <div>
                    <img src={imageURL} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500 rounded-xl" />
                    <p className="text-blue-500 uppercase">{productBrand}</p>
                    <h2 className="mb-3 text-xl font-bold">{productName}</h2>
                    <p className="mb-3 text-[18px] font-semibold dark:text-gray-600">{queryTitle}</p>
                    <p className="mb-7 text-sm dark:text-gray-600">{boycottingDetails}</p>
                </div>

            </div>
        </div>
    );
};

export default QuerieDetails;