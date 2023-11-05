import "./CartWidget.css";
import {Link} from "react-router-dom";
import {useContext} from "react";
import {dataContext} from "../../Context/DataContext";

const CartWidget = () => {
    const {countProducts} = useContext(dataContext);

    return (
        <div className="carrito">
            <div className="iconoCarrito">
                <Link to="/cart">🛒</Link>
                <p>{countProducts}</p>
            </div>
        </div>
    )
};

export default CartWidget;