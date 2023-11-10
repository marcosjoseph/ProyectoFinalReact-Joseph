import { createContext, useState } from "react";


export const dataContext = createContext();

export const DataProvider = ({children}) => {

    const [itemList, setItemList] = useState([]);
    const [cart, setCart] = useState([]);
    const [countProducts, setCountProducts] = useState(0);
    const [total, setTotal] = useState(0);
    const [order, setOrder] = useState(0)
    

    // const addItem = (item, quantity) => {
    //     if(!isInCart(item.id)) {
    //         setCart(prev => [...prev, {...item, quantity}])
    //     }
    // }

    // const isInCart = (itemId) => {
    //     return cart.some(prod => prod.id === itemId)
    // };
    

    const clearCart = () => {
        setCart([]); 
        setCountProducts(0)
        setTotal(0)}

    // const montoTotal = cart.reduce((acc,el)=>acc + el.precio,0)
    // const montoSubtotal = cart.reduce((acc,el)=>acc+(el.precio * el.cantidad),0)

        return (
        <dataContext.Provider value={{itemList,setItemList, cart, setCart, countProducts, setCountProducts, total, setTotal,clearCart, order,setOrder}}>
            {children}
        </dataContext.Provider>
    )

}