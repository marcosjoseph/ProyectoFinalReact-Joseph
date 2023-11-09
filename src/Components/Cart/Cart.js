import CartItem from "../CartItem/CartItem";
import {useContext} from "react";
import {dataContext} from "../../Context/DataContext";
import {Link} from "react-router-dom";
import "./Cart.css";


const Cart = () => {
    const {cart,clearCart, total} = useContext(dataContext);

        if(cart.length>0) {
        
        return (
            <div className="cart-container">
                <h2>Carrito</h2>
                <CartItem/>
                <h4 className="cart-total">Valor Total: ${total}</h4>   
                <button onClick={clearCart}>Vaciar Carrito</button>
                <button><Link to="/Checkout">Finalizar Compra</Link></button> 
            </div>
        )
    }

    return (
        <div className="empty-cart-container">
            <h3 className="empty-cart">El carrito está vacío.</h3>
            <button><Link to="/">Ver Productos</Link></button>
        </div>)
}

export default Cart;

