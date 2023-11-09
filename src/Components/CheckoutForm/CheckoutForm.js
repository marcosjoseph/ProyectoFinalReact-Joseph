import "./CheckoutForm.css";
import {useState} from "react";

const CheckoutForm = ({onConfirm}) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {name, phone, email}

        onConfirm(userData)
    }

    return (
            <div className="checkout">
                <form onSubmit={handleConfirm} className="checkout-form">
                    <label>Nombre <input type="text" value={name} onChange={({target}) => setName(target.value)}/></label>
                    <label>Telefono <input type="text" value={phone} onChange={({target}) => setPhone(target.value)}/></label>
                    <label>Mail<input type="text" value={email} onChange={({target}) => setEmail(target.value)}/></label>
                    <submit className="submit-form">Generar Orden</submit>
                </form>
            </div>
    )
}

export default CheckoutForm
