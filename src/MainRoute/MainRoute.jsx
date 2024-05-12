import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import WebFooter from "../WebFooter/WebFooter";

const MainRoute = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <WebFooter></WebFooter>
        </div>
    );
};

export default MainRoute;