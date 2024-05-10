import { Link } from "react-router-dom";
import logo from "../assets/image/ElectroEvo-logo.png"
import { useContext } from "react";
import { AuthContext } from "../Context/Context";
import userImg from "../assets/image/user.avif"
const Navbar = () => {
    let { user, userLogOut } = useContext(AuthContext)
    let handleLogOut = () => {
        userLogOut()
            .then(() => {
                console.log("user Log out")
            })
            .catch((error) => {
                console.log(error)
            });

    }
    return (
        <div className="bg-[#135D66] text-white">
            <div className="navbar w-[95%] md:max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[2] p-2 shadow bg-base-100 rounded-box w-52 text-black">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a className=""><img className="w-[90px]" src={logo} alt="" /></a>
                </div>
                <div className="navbar-end">
                    <div className="navbar-center hidden lg:flex mr-5">
                        <ul className="menu menu-horizontal px-1 gap-5">
                            <Link to="/">Home</Link>
                            <Link to={`/my-queries`} className={!user ? "hidden" : ""}>My Queries</Link>
                            <Link to="/login" className={user ? "hidden" : ""}>Login</Link>
                            <button className={!user ? "hidden" : ""} onClick={handleLogOut}>Log Out</button>
                        </ul>
                    </div>
                    {
                    user && <div className="w-10 h-10">
                        <div className="dropdown dropdown-hover dropdown-end">
                            <div tabIndex={0} role="button" className=""><img className="rounded-full" src={user.photoURL ? user.photoURL : userImg} alt="" /></div>
                            <ul tabIndex={0} className="dropdown-content z-[10] menu p-2 shadow  rounded-box w-52 bg-black">
                                <li><a>{user.displayName}</a></li>
                            </ul>
                        </div>
                    </div>
                }
                </div>
            </div >
        </div >
    );
};

export default Navbar;