import "./CheckoutForm.css";
import {useState,useContext} from "react";
import {dataContext} from "../../Context/DataContext";
import {Link} from "react-router-dom";
import {dataBaseFirestore} from "../../Config/Firebase";
import {collection, addDoc} from "firebase/firestore";


const CheckoutForm = () => {

    const {setCountProducts, setOrder,order} = useContext(dataContext);

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const onSubmitUser = async (event) => {
        event.preventDefault()

        const orderId = order+1;

        setOrder(orderId)
        setCountProducts(0);

        const userCollectionRef = collection(dataBaseFirestore,"Usuarios");

        await addDoc(userCollectionRef, {Nombre:name, Telefono:phone, Mail:email, Order:orderId})
    }
    


    return (
            <div className="checkout">
                <form className="checkout-form">
                    <label>Nombre <input type="text" value={name} onChange={({target}) => setName(target.value)}/></label>
                    <label>Telefono <input type="text" value={phone} onChange={({target}) => setPhone(target.value)}/></label>
                    <label>Mail<input type="text" value={email} onChange={({target}) => setEmail(target.value)}/></label>
                    <button className="button-form" onClick={onSubmitUser}><Link to="/orderNumber">Generar Orden</Link></button>
                </form>
            </div>
    )
}

export default CheckoutForm;
