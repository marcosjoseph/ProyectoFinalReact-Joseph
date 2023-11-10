import "./OrderNumber.css";
import {Link} from "react-router-dom";

const OrderNumber = () => {

    const orderId = Math.round(Math.random()*100000);

    return (
        <div className="OrderNumber">
            <h1>Su orden ha sido confirmada.</h1>
            <h1>Su número de orden es {orderId}</h1>
            <button className="btn-home"><Link to="/">Volver a Inicio</Link></button>
        </div>
    )
}

export default OrderNumber;
