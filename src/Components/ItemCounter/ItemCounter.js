import {useState, useContext} from "react";
import {dataContext} from "../../Context/DataContext";
import "./ItemCounter.css";

const ItemCount = ({stock}) => {

    const [quantity, setQuantity] = useState(1);
    
    const agregar = () => {
    if (quantity<stock) {setQuantity(quantity+1)}
    }

    const restar = () => {
        if (quantity > 1) {setQuantity (quantity-1)}
    }

    return (
        <div className="itemCount">
            <div className="controles">
                <button onClick={restar}>-</button>
                <h4> {quantity} </h4>
                <button onClick={agregar}>+</button>
            </div>
        </div>
    )

}

export default ItemCount;

{/* <button className="agregarAlCarrito" onClick={()=> onAdd(cant)} disabled={!stock}>Agregar al Carrito</button> */}