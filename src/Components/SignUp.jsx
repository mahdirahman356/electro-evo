import { Link } from "react-router-dom";
import loginBg from "../assets/image/primary-bg.jpg"
import logo from "../assets/image/ElectroEvo-logo.png"
import { useContext } from "react";
import { AuthContext } from "../Context/Context";
import Swal from "sweetalert2";
const SignUp = () => {
    let { createAccount, userUpdate } = useContext(AuthContext)
    let handleSignUp = (e) => {
        e.preventDefault();
        let form = e.target;
        let email = form.email.value;
        let password = form.password.value;
        let name = form.name.value;
        let photoURL = form.photoURL.value;
        console.log(name, photoURL, email, password);

        if (password.length < 6) {
            Swal.fire({
                title: 'Error',
                text: 'Password should be at least 6 characters',
                icon: 'error',
                confirmButtonText: 'close'
            })
            return
        }

        createAccount(email, password)
            .then(result => {
                console.log(result.user);
                form.reset()
                Swal.fire({
                    title: 'Success',
                    text: 'User Created Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
                userUpdate(name, photoURL)
                    .then(() => {
                        console.log("user updated");
                    })
                    .catch(error => {
                        console.log(error.message);
                    });
            })
            .catch(error => {
                console.log(error.message);
                Swal.fire({
                    title: 'Error',
                    text: 'Email already in use',
                    icon: 'error',
                    confirmButtonText: 'close'
                })
            });

    }
    return (
        <div>
            <div className="hero bg-cover bg-center" style={{ backgroundImage: `url(${loginBg})` }}>
                <div className="hero-overlay bg-gradient-to-r from-[#151515] to-[rgb(21,21,21,0) py-60 md:py-80"></div>
                <div className=" w-[95%] md:w-[85%] mx-auto text-neutral-content">
                    <div className="md:w-[60%] lg:w-[45%] mx-auto">
                        <section className=" backdrop-blur-xl my-14 py-10 border-gray-500 border-2 rounded-2xl">
                            <div className="container flex flex-col items-center justify-center px-6 mx-auto">
                                <form onSubmit={handleSignUp} className="w-full max-w-md">
                                    <div className="flex justify-center mx-auto">
                                        <img className="w-auto h-9 md:h-12" src={logo} alt="" />
                                    </div>

                                    <div className="flex items-center justify-center mt-6">
                                        <p className="font-bold text-2xl md:text-4xl text-center">Sign Up</p>
                                    </div>
                                    {/* name */}
                                    <div className="relative flex items-center mt-8">
                                        <span className="absolute">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                        </span>
                                        <input type="text"
                                            name="name"
                                            className="w-full rounded-3xl py-3 bg-[#15151503]  border-2 text-white px-11 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                            placeholder="Your Name" />
                                    </div>

                                    {/* photo url */}
                                    <div className="relative flex items-center mt-8">
                                        <span className="absolute">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                            </svg>
                                        </span>
                                        <input type="text"
                                            name="photoURL"
                                            className="w-full rounded-3xl py-3 bg-[#15151503]  border-2 text-white px-11 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                            placeholder="Photo URL" />
                                    </div>

                                    {/* email */}
                                    <div className="relative flex items-center mt-8">
                                        <span className="absolute">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </span>
                                        <input type="email"
                                            name="email"
                                            className="w-full rounded-3xl py-3 bg-[#15151503]  border-2 text-white px-11 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                            placeholder="Email"
                                            required />
                                    </div>
                                    {/* password */}
                                    <div className="relative flex items-center mt-8">
                                        <span className="absolute">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                            </svg>
                                        </span>
                                        <input
                                            type="password"
                                            name="password"
                                            className="w-full rounded-3xl py-3 bg-[#15151503]  border-2 text-white px-11 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                            placeholder="Password"
                                            required />
                                    </div>
                                    {/* submit */}
                                    <div className="mt-6">
                                        <input className="btn w-full bg-[#3d3735] text-white border-none rounded-3xl" type="submit" value="Sign up" />
                                    </div>
                                    <div className="mt-6 text-center ">
                                        <p className="text-sm">
                                            Already have an account? <Link to="/login" className="underline text-[steelblue]">Login</Link>
                                        </p>
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

export default SignUp;