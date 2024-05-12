import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/image/ElectroEvo-logo.png"
const WebFooter = () => {
    return (
        <div className="bg-gray-900">
            <footer className="footer py-10 text-white w-[95%] md:w-[85%] mx-auto">
  <aside>
    <img src={logo} alt="Website Logo" className="h-16 " />
    <p>Your Company Name<br/>Providing alternative product information since [Year]</p>
  </aside> 
  <nav>
    <h6 className="footer-title">Explore</h6> 
    <a href="/" className="link link-hover">Home</a>
    <a href="/queries" className="link link-hover">All Queries</a>
    <a href="/recommendations" className="link link-hover">Recommendations</a>
    <a href="/about" className="link link-hover">About</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Legal</h6> 
    <a href="/terms" className="link link-hover">Terms of Use</a>
    <a href="/privacy" className="link link-hover">Privacy Policy</a>
    <a href="/cookies" className="link link-hover">Cookie Policy</a>
  </nav>

  <nav>
    <h6 className="footer-title">Connect</h6> 
    <div className="flex gap-4">
    <div className="p-1 rounded-full ">
     <FaFacebook className="text-2xl"/>  
    </div>
    <div className="p-1 rounded-full ">
    <FaLinkedinIn className="text-2xl"/>
    </div>
    <div className="p-1 rounded-full ">
    <FaInstagram className="text-2xl"/>
    </div>
    </div>
  </nav> 
</footer>

        </div>
    );
};

export default WebFooter;