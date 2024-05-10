import { Link } from "react-router-dom";
import primaryBG from "../assets/image/primary-bg.jpg"

const MyQueries = () => {
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
        </div>
    );
};

export default MyQueries;