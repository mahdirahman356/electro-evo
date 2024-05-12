import axios from "axios";


  let axioxSecure = axios.create({
     baseURL: "http://localhost:5000",
     withCredentials: true,
  })

const useAxioxSecure = () => {
    return axioxSecure
};

export default useAxioxSecure;