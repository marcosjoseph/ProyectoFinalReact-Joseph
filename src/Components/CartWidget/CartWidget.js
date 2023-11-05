import "./CartWidget.css";
import {Link} from "react-router-dom";

const CartWidget = () => {
    return (
        <div className="carrito">
            <div className="iconoCarrito">
                <Link to="/cart">🛒</Link>
                <p>2</p>
            </div>
        </div>
    )
};

export default CartWidget;