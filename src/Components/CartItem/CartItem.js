import {useContext} from "react";
import {dataContext} from "../../Context/DataContext";
import "./CartItem.css";

const CartItems = () => {
    const {cart,setCart,setCountProducts,countProducts,total,setTotal} = useContext(dataContext);

    const borrarProducto = (cartItem) =>{
        const nuevoCarrito = cart.filter(item => item.id !== cartItem.id );

        setTotal(total - cartItem.precio * cartItem.cantidad);
        setCountProducts(countProducts-cartItem.cantidad);
        setCart(nuevoCarrito)
    };

    return (
        <div>
            {cart.map((cartItem)=>(
                <div className="cart-item" key={cartItem.id}>
                    <img src={cartItem.imagen} alt={cartItem.nombre}/>
                    <h3>{cartItem.nombre}</h3>
                    <h4>Cantidad:{cartItem.cantidad}</h4>
                    <h4>Precio Unitario: ${cartItem.precio}</h4>
                    <h4>Subtotal: ${cartItem.cantidad * cartItem.precio}</h4>
                    <button className="btn-borrar" onClick={()=> borrarProducto(cartItem)}>❌</button>
                </div>))}
        </div>
    )
}

export default CartItems;