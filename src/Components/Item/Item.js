import {dataBaseFirestore} from "../../Config/Firebase";
import {collection, getDocs} from "firebase/firestore";
import {useEffect, useContext} from "react";
import {dataContext} from "../../Context/DataContext";
import "./Item.css";
import ItemCounter from "../ItemCounter/ItemCounter";

const Items = () => {

const {itemList, setItemList, cart, setCart, setCountProducts, countProducts, total, setTotal} = useContext(dataContext)

const buyProducts = (item) => {

    if(cart.find(product=> product.id === item.id)) {
        const products = cart.map( product => product.id === item.id ? {...product,cantidad: product.cantidad+1} : product);
        
        setTotal(total+ item.precio * item.cantidad)
        setCountProducts(countProducts + item.cantidad)
        return setCart([...products])
            
    }

    setTotal(total+ item.precio * item.cantidad)
    setCountProducts(countProducts + item.cantidad)
    setCart([...cart,item])
};

const itemsCollectionRef = collection(dataBaseFirestore, "Items");

    useEffect ( ()=> {
        const getItemList = async () => {
            const data = await getDocs(itemsCollectionRef);

            const filteredData = data.docs.map((doc) => ({...doc.data(),id:doc.id}));

            setItemList(filteredData);
        }

        getItemList();
    },[])

    return(
        <div className="itemContainer">
            {itemList.map((item)=>(
                <div className="item" key={item.id}>
                    <h2>{item.nombre}</h2>
                    <img src={item.imagen} alt={item.nombre}/>
                    <h3>{item.descripcion}</h3>
                    <h3>Precio Unitario: ${item.precio}</h3>
                    <h3>Stock Disponible: {item.stock}</h3>
                    <ItemCounter stock={item.stock}/>
                    <button className="btn-agregar" onClick={()=> buyProducts(item)}>Agregar al Carrito</button>
                </div>
            ))}


        </div>
    )
}

export default Items;


// product.cantidad+1