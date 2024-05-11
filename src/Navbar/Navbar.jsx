import { Link } from "react-router-dom";
import logo from "../assets/image/ElectroEvo-logo.png"
import { useContext, useEffect, useState } from "react";
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

    let [theme, setThem] = useState("light")

    useEffect(() => {
        localStorage.setItem("theme", theme)
        const toggleTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute("data-theme", toggleTheme)
    }, [theme])

    let handleToggle= (e) => {
        if (e.target.checked) {
            setThem("dark")
        }
        else {
            setThem("light")
        }
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
                            <Link to="/queries">Queries</Link>
                            <Link to={`/RCDForMe`} className={!user ? "hidden" : ""}>Recommendations For Me</Link>
                            <Link to={`/myRCD`} className={!user ? "hidden" : ""}>My recommendations</Link>
                            <Link to={`/my-queries`} className={!user ? "hidden" : ""}>My Queries</Link>
                            <Link to="/login" className={user ? "hidden" : ""}>Login</Link>
                            <button className={!user ? "hidden" : ""} onClick={handleLogOut}>Log Out</button>
                        </ul>
                    </div>

                    <div className="mr-1 md:mr-4 mt-2">
                    <label className="swap swap-rotate">
                        <input
                            onClick={handleToggle}
                            type="checkbox"
                            className="theme-controller" />
                        <svg className="swap-off fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                        <svg className="swap-on fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                    </label>
                </div>
                    {
                    user && <div className="w-10 h-10">
                        <div className="dropdown dropdown-hover dropdown-end">
                            <div tabIndex={0} role="button" className="w-10 h-10"><img className="rounded-full" src={user.photoURL ? user.photoURL : userImg} alt="" /></div>
                            <ul tabIndex={0} className={!user.displayName ? `hidden` : `dropdown-content z-[10] menu p-2 shadow  rounded-box w-52 bg-black`}>
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