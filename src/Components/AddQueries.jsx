import primaryBG from "../assets/image/primary-bg.jpg"
import logo from "../assets/image/ElectroEvo-logo.png"
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/Context";
const AddQueries = () => {

    let {user} = useContext(AuthContext)
    
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentDateTime(new Date());
      }, 1000); 
      return () => clearInterval(interval);
    }, []);
  
    const DateTime = currentDateTime.toLocaleString();

    let handleAddQueries = (e) => {
        e.preventDefault()
        let form = e.target
        let productName = form.productName.value
        let productBrand = form.productBrand.value
        let queryTitle = form.queryTitle.value
        let boycottingDetails = form.boycottingDetails.value
        let imageURL = form.imageURL.value
        let queries = {productBrand, productName, queryTitle, boycottingDetails, imageURL,DateTime, recommendationCount: 0, email: user.email, name: user.displayName, userImge: user.photoURL}
        console.log(queries)
        axios.post('https://electro-evo-server.vercel.app/queries', queries)
        .then(res => {
            console.log(res.data)
            if(res.data.acknowledged === true){
                form.reset()
                Swal.fire({
                    title: 'Success',
                    text: 'Product Added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            }
        })

    }
    return (
        <div>
            <div className="hero bg-cover bg-center" style={{ backgroundImage: `url(${primaryBG})` }}>
                <div className="hero-overlay bg-gradient-to-r from-[#151515] to-[rgb(21,21,21,0) py-60 md:py-80"></div>
                <div className=" w-[95%] md:w-[85%] mx-auto text-neutral-content">
                    <div className="">
                        <section className=" backdrop-blur-xl my-14 py-10 border-gray-500 border-2 rounded-2xl">
                            <div className="px-3 md:px-24 mx-auto flex flex-col justify-center items-center">
                                <form onSubmit={handleAddQueries}  className="w-full">
                                    <div className="flex justify-center mx-auto">
                                        <img className="w-auto h-9 md:h-12" src={logo} alt="" />
                                    </div>

                                    <div className="flex items-center justify-center mt-6">
                                        <p className="font-bold text-2xl md:text-4xl text-center">Add Your Product</p>
                                    </div>
                                    {/* fild-row-1 */}
                                    <div className="flex flex-col lg:flex-row w-full lg:gap-5">
                                    {/* Product Name */}
                                    <div className="relative flex items-center mt-8 lg:w-1/2">
                                        <input type="text"
                                            name="productName"
                                            className="w-full rounded-3xl py-3 bg-[#15151503]  border-2 text-white px-11 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                            placeholder="Product Name" 
                                            required/>
                                    </div>
                                    {/* Product Brand */}
                                    <div className="relative flex items-center mt-8 lg:w-1/2">
                                        <input type="text"
                                            name="productBrand"
                                            className="w-full rounded-3xl py-3 bg-[#15151503]  border-2 text-white px-11 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                            placeholder="Product Brand" 
                                            required/>
                                    </div>
                                    </div>

                                    {/* fild-row-2 */}
                                    <div className="flex flex-col lg:flex-row w-full lg:gap-5">
                                    {/* Query Title */}
                                    <div className="relative flex items-center mt-8 lg:w-1/2">
                                        <input type="text"
                                            name="queryTitle"
                                            className="w-full rounded-3xl py-3 bg-[#15151503]  border-2 text-white px-11 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                            placeholder="Query Title" 
                                            required/>
                                    </div>
                                    {/* Boycotting Reason Details */}
                                    <div className="relative flex items-center mt-8 lg:w-1/2">
                                        <input type="text"
                                            name="boycottingDetails"
                                            className="w-full rounded-3xl py-3 bg-[#15151503]  border-2 text-white px-11 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                            placeholder="Boycotting Reason Details" 
                                            required/>
                                    </div>
                                    </div>
                                    {/* imageURL */}
                                    <div className="relative flex items-center mt-8">
                                        <input 
                                            type="text"
                                            name="imageURL"
                                            className="w-full rounded-3xl py-3 bg-[#15151503]  border-2 text-white px-11 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                            placeholder="Product Image-URL" 
                                            required/>
                                    </div>
                                    {/* submit */}
                                    <div className="mt-6">
                                        <input className="btn w-full bg-[#3d3735] text-white border-none rounded-3xl" type="submit" value="Add Your Product" />
                                    </div>
                                </form>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddQueries;