import {dataBaseFirestore} from "../../Config/Firebase";
import {collection, getDocs} from "firebase/firestore";
import {useEffect, useContext} from "react";
import {dataContext} from "../../Context/DataContext";
import "./Item.css";

const Items = () => {

const {itemList, setItemList} = useContext(dataContext)

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
        <div>
            {itemList.map((item)=>(
                <div className="producto">
                    <h2>{item.nombre}</h2>
                    <img src={item.imagen}/>
                    <h3>{item.descripcion}</h3>
                    <h3>{item.precio}</h3>
                    <h3>{item.stock}</h3>
                    <button>Agregar al Carrito</button>
                </div>
            ))}


        </div>
    )
}

export default Items;
