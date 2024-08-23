import { Link} from "react-router-dom";
import primaryBG from "../assets/image/primary-bg.jpg"
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../Context/Context";
import Swal from "sweetalert2";
import { IoMdEye } from "react-icons/io";
import { HiPencil } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import img from "../assets/image/user.avif"
const MyQueries = () => {
    let { user } = useContext(AuthContext)
    let [queries, setQueries] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5000/queries/email/${user?.email}`, {withCredentials:true})
            .then(res => {
                const sortedQueries = res.data.sort((a, b) => new Date(b.DateTime) - new Date(a.DateTime));
                setQueries(sortedQueries);
                console.log(sortedQueries)
            })
    }, [user?.email])

    let handleDelete = (id) => {
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
                fetch(`http://localhost:5000/queries/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Product has been deleted.",
                                icon: "success"
                            });
                            let DeleteCard = queries.filter(tourist => tourist._id !== id)
                            setQueries(DeleteCard)
                        }
                    })
            }
        });
    }
    return (
        <div>
            <div className="hero bg-cover bg-center w-[95%] md:w-[85%] mx-auto my-12 rounded-3xl" style={{ backgroundImage: `url(${primaryBG})` }}>
                <div className="hero-overlay bg-gradient-to-r from-[#151515] to-[rgb(21,21,21,0) py-60 rounded-3xl"></div>
                <div className=" w-[95%] md:w-[85%] mx-auto text-neutral-content">
                    <div className="md:w-[50%] mx-auto">
                        <h1 className="mb-5 text-4xl text-center font-bold font mt-4">Empower Your Tech Choices: Find Alternatives with ElectroEvo</h1>
                        <div className="flex justify-center items-center">
                            <Link to='/add-queries'><button className="btn border-none text-white bg-[#135D66]">Add Your Query</button></Link>
                        </div>
                    </div>
                </div>
            </div>

            {queries.length === 0 ? <div role="alert" className="alert alert-info w-[95%] md:w-[85%] mx-auto my-12">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <div className="flex justify-between items-center w-full">
                    <span>You have not added any products</span>
                    <Link to='/add-queries'><button className="btn border-none text-white bg-[#135D66]">Add Your Query</button></Link>
                </div>
            </div>

                : <div className="w-[95%] md:w-[85%] mx-auto my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        queries.map((queries, index) => <div key={index}>
                            <div className="card h-full bg-base-100 shadow-xl">
                                <figure><img src={queries.imageURL} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title underline">{queries.productName}:</h2>
                                    <h2 className="card-title">{queries.queryTitle}</h2>
                                    <p className='font-semibold'>Brand: <span className='font-normal'>{queries.productBrand}</span></p>
                                    <p>Recommendation: {queries.recommendationCount}</p>
                                    <div className="">
                                    <div className="flex items-center gap-4 mt-2 mb-6">
                                            <img className="w-10 h-10 rounded-full" src={queries.userImge ? queries.userImge : img} alt="" />
                                            <div>
                                                <p className="font-semibold ">{queries.name}</p>
                                                <p className="text-sm text-gray-500">{queries.DateTime}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-end items-center gap-3">
                                        <Link to={`/recommend/${queries._id}`}><button className="btn text-white bg-[#135D66] rounded-full border-none"><IoMdEye className='text-[20px] text-white' /></button></Link>
                                        <Link to={`/update-queries/${queries._id}`}><button className="btn text-white bg-[#135D66] rounded-full border-none"><HiPencil className='text-[20px] text-white' /></button></Link>
                                        <button onClick={() => handleDelete(queries._id)} className="btn bg-[#EA4744] rounded-full border-none"><MdDelete className='text-[20px] text-white' /></button>                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
                }


        </div>
    );
};

export default MyQueries;