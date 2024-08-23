import { Link, useNavigate } from "react-router-dom";
import loginBg from "../assets/image/primary-bg.jpg"
import logo from "../assets/image/ElectroEvo-logo.png"
import { AiOutlineGoogle } from "react-icons/ai";
import { useContext } from "react";
import { AuthContext } from "../Context/Context";
import Swal from "sweetalert2";
import axios from "axios";
const Login = () => {
    let {loginUser, googleLogIn} = useContext(AuthContext)
    const navigate = useNavigate()
    let handleSignIn = (e) => {
        e.preventDefault()
        let form = e.target
        let email = form.email.value
        let password = form.password.value
        console.log(email, password)
        loginUser(email, password)
        .then(result => {
            console.log(result.user)
            form.reset()
            let user = {email, password}
                Swal.fire({
                    title: 'Success',
                    text: 'User Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
                  axios.post("http://localhost:5000/jwt", user, {withCredentials: true})  
                  .then(data => {
                     console.log(data.data)
                     navigate('/')
                  })  
        })
        .catch(error => {
            console.log(error.message);
            Swal.fire({
                title: 'Error',
                text: 'User is not available',
                icon: 'error',
                confirmButtonText: 'close'
              })
        });

    }
    let  handleGoogleLogIn = () => {
        googleLogIn()
        .then((result) => {
            let user = {email: result.user.email}
            console.log(result.user)
            Swal.fire({
                title: 'Success',
                text: 'User Added Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
              axios.post("http://localhost:5000/jwt", user, {withCredentials: true})  
                  .then(data => {
                     console.log(data.data)
                  })  

        })
        .catch((error) => {
            console.log(error)
        });
    }

    return (
        <div>
            <div className="hero bg-cover bg-center" style={{ backgroundImage: `url(${loginBg})` }}>
                <div className="hero-overlay bg-gradient-to-r from-[#151515] to-[rgb(21,21,21,0) py-60 md:py-80"></div>
                <div className=" w-[95%] md:w-[85%] mx-auto text-neutral-content">
                    <div className="md:w-[60%] lg:w-[42%] mx-auto">
                        <section className=" backdrop-blur-xl my-14 py-10 border-gray-500 border-2 rounded-2xl">
                            <div className="px-6 mx-auto flex flex-col justify-center items-center">
                                <form onSubmit={handleSignIn} className="w-full max-w-md">
                                    <div className="flex justify-center mx-auto">
                                        <img className="w-auto h-9 md:h-12" src={logo} alt="" />
                                    </div>

                                    <div className="flex items-center justify-center mt-6">
                                        <p className="font-bold text-2xl md:text-4xl text-center">Login</p>
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
                                         required/>
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
                                         required/>
                                    </div>
                                    {/* submit */}
                                    <div className="mt-6">
                                        <input className="btn w-full bg-[#135D66] text-white border-none rounded-3xl" type="submit" value="Login" />
                                    </div>
                                </form>
                                <div className="w-[80%] mx-auto">
                                      <p className="text-center mt-3">____________or____________</p>
                                      <button onClick={handleGoogleLogIn} className="btn btn-outline border-gray-600 border-2 rounded-3xl w-full mt-3 text-white"><AiOutlineGoogle className="text-[20px] md:text-[30px]" /> Continue with Google</button>
                                      <div className="mt-4 text-center ">
                                        <p className="text-sm">
                                            Do not have an account? <Link to='/signup' className="underline text-[steelblue]">Sign Up</Link>
                                            </p>
                                        </div>
                                   </div>
                                </div>
                        </section>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Login;