import primaryBG from "../assets/image/primary-bg.jpg"
import logo from "../assets/image/ElectroEvo-logo.png"
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const UpdateQueries = () => {
    let queries = useLoaderData()
    let {_id, productName, productBrand, queryTitle, boycottingDetails, imageURL} = queries
    let handleUpdate = (e) => {
        e.preventDefault()
        let form = e.target
        let productName = form.productName.value
        let productBrand = form.productBrand.value
        let queryTitle = form.queryTitle.value
        let boycottingDetails = form.boycottingDetails.value
        let imageURL = form.imageURL.value
        let updates = {productName, productBrand, queryTitle, boycottingDetails, imageURL}
        console.log(updates)
        axios.put(`http://localhost:5000/queries/${_id}`, updates)
        .then(res => {
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success',
                    text: 'Product Updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            }
        })
    }

    return (
        <div className="hero bg-cover bg-center" style={{ backgroundImage: `url(${primaryBG})` }}>
        <div className="hero-overlay bg-gradient-to-r from-[#151515] to-[rgb(21,21,21,0) py-60 md:py-80"></div>
        <div className=" w-[95%] md:w-[85%] mx-auto text-neutral-content">
            <div className="">
                <section className=" backdrop-blur-xl my-14 py-10 border-gray-500 border-2 rounded-2xl">
                    <div className="px-3 md:px-24 mx-auto flex flex-col justify-center items-center">
                        <form onSubmit={handleUpdate} className="w-full">
                            <div className="flex justify-center mx-auto">
                                <img className="w-auto h-9 md:h-12" src={logo} alt="" />
                            </div>

                            <div className="flex items-center justify-center mt-6">
                                <p className="font-bold text-2xl md:text-4xl text-center">Update Your Product</p>
                            </div>
                            {/* fild-row-1 */}
                            <div className="flex flex-col lg:flex-row w-full lg:gap-5">
                            {/* Product Name */}
                            <div className="relative flex items-center mt-8 lg:w-1/2">
                                <input type="text"
                                    name="productName"
                                    className="w-full rounded-3xl py-3 bg-[#15151503]  border-2 text-white px-11 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                    placeholder="Product Name" 
                                    defaultValue={productName}
                                    required/>
                            </div>
                            {/* Product Brand */}
                            <div className="relative flex items-center mt-8 lg:w-1/2">
                                <input type="text"
                                    name="productBrand"
                                    className="w-full rounded-3xl py-3 bg-[#15151503]  border-2 text-white px-11 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                    placeholder="Product Brand"
                                    defaultValue={productBrand} 
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
                                    defaultValue={queryTitle}
                                    required/>
                            </div>
                            {/* Boycotting Reason Details */}
                            <div className="relative flex items-center mt-8 lg:w-1/2">
                                <input type="text"
                                    name="boycottingDetails"
                                    className="w-full rounded-3xl py-3 bg-[#15151503]  border-2 text-white px-11 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                    placeholder="Boycotting Reason Details"
                                    defaultValue={boycottingDetails} 
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
                                    defaultValue={imageURL}
                                    required/>
                            </div>
                            {/* submit */}
                            <div className="mt-6">
                                <input className="btn w-full bg-[#3d3735] text-white border-none rounded-3xl" type="submit" value="Update Product" />
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    </div>
    );
};

export default UpdateQueries;