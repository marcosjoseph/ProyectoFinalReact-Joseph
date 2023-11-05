import { createContext, useState, useEffect } from "react";
import {dataBaseFirestore} from "../Config/Firebase";
import {collection, getDocs} from "firebase/firestore";

export const dataContext = createContext();

export const DataProvider = ({children}) => {

    const [itemList, setItemList] = useState([]);

    const itemsCollectionRef = collection(dataBaseFirestore, "Items");

    useEffect ( ()=> {
        const getItemList = async () => {
            const data = await getDocs(itemsCollectionRef);

            const filteredData = data.docs.map((doc) => ({...doc.data(),id:doc.id}));

            setItemList(filteredData);
        }

        getItemList();
    },[])

    return (
        <dataContext.Provider value={{itemList,setItemList}}>
            {children}
        </dataContext.Provider>
    )

}