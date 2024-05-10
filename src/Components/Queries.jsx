import primaryBG from "../assets/image/primary-bg.jpg"

const Queries = () => {
    return (
        <div>
             <div className="hero bg-cover bg-center w-[95%] md:w-[85%] mx-auto my-12 rounded-3xl" style={{ backgroundImage: `url(${primaryBG})` }}>
                <div className="hero-overlay bg-gradient-to-r from-[#151515] to-[rgb(21,21,21,0) py-40 rounded-3xl"></div>
                <div className=" w-[95%] md:w-[85%] mx-auto text-neutral-content">
                    <div className="md:w-[50%] mx-auto">
                        <h1 className="mb-5 text-4xl text-center font-bold font mt-4">Explore Queries</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Queries;