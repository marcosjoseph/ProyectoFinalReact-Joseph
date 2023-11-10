import "./OrderNumber.css";
import {Link} from "react-router-dom";
import {useContext} from "react";
import {dataContext} from "../../Context/DataContext";

const OrderNumber = () => {
    
    const {order} = useContext(dataContext);
    
        return (
        <div className="OrderNumber">
            <h1>Su orden ha sido confirmada.</h1>
            <h1>Su número de orden es {order}</h1>
            <button className="btn-home"><Link to="/">Volver a Inicio</Link></button>
        </div>
    )
}

export default OrderNumber;
