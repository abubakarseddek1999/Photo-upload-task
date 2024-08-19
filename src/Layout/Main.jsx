import { Outlet } from "react-router-dom";
import Navbar from "../Share/Navbar/Navbar";

const Main = () => {
    return (
        <div className="bg-[#EEEEEE]">
            <Navbar></Navbar>
            <Outlet></Outlet>

        </div>
    );
};

export default Main;