import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useRecommendation = () => {
    
    const { refetch: refetchRecommendation, data: recom = [] } = useQuery({
        queryKey: ["recom"],
        queryFn: async () => {
            const res = await axios.get(`https://electro-evo-server.vercel.app/recommend`)
            return res.data
        }
    })

    return [recom, refetchRecommendation]
};

export default useRecommendation;