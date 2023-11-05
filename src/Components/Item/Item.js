import {dataBaseFirestore} from "../../Config/Firebase";
import {collection, getDocs} from "firebase/firestore";
import {useEffect, useContext} from "react";
import {dataContext} from "../../Context/DataContext";
import "./Item.css";

const Items = () => {

const {itemList, setItemList, cart, setCart, setCountProducts, countProducts} = useContext(dataContext)

const buyProducts = (item) => {
    
    if(cart.find(product=> product.id === item.id)) {
        const products = cart.map( product => product.id === item.id ? {...product,cantidad: product.cantidad+1} : product);
    
        return setCart([...products])
            
    }

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
                    <img src={item.imagen}/>
                    <h3>{item.descripcion}</h3>
                    <h3>Precio Unitario: ${item.precio}</h3>
                    <h3>Stock Disponible: {item.stock}</h3>
                    <button className="btn-agregar" onClick={()=> buyProducts(item)}>Agregar al Carrito</button>
                </div>
            ))}


        </div>
    )
}

export default Items;
