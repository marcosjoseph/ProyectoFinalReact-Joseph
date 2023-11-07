import { createContext, useState } from "react";


export const dataContext = createContext();

export const DataProvider = ({children}) => {

    const [itemList, setItemList] = useState([]);
    const [cart, setCart] = useState([]);
    const [countProducts, setCountProducts] = useState(0);
    const [total, setTotal] = useState(0);
    

    const clearCart = () => {
        setCart([]); 
        setCountProducts(0)
        setTotal(0)}

    // const montoTotal = cart.reduce((acc,el)=>acc + el.precio,0)
    // const montoSubtotal = cart.reduce((acc,el)=>acc+(el.precio * el.cantidad),0)

        return (
        <dataContext.Provider value={{itemList,setItemList, cart, setCart, countProducts, setCountProducts, total, setTotal,clearCart}}>
            {children}
        </dataContext.Provider>
    )

}