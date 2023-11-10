import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";
import {Outlet} from "react-router-dom";
import "./Layout.css";

const Layout = () => {
    return (
        <div className="Layout">
            <NavBar/>
            <Outlet/>
            <Footer/>        
        </div>
    )
}

export default Layout;
