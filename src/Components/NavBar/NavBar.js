import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import Logo from "./img/LogoGroot.png";
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <header>
            <h1>Bienvenidos a Groot! Trabajamos la Madera</h1>
            <nav>
                <a href="https://www.instagram.com/groot.woodwork/" target="_blank"> <img src={Logo} className="logo"/> </a>
            
                <button id="menu-botones"><Link to="/">Home</Link></button>
            
                <CartWidget />
            </nav>
        </header>

    )

}

export default NavBar;