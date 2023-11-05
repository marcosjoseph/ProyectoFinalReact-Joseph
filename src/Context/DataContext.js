import { createContext, useState } from "react";


export const dataContext = createContext();

export const DataProvider = ({children}) => {

    const [itemList, setItemList] = useState([]);

        return (
        <dataContext.Provider value={{itemList,setItemList}}>
            {children}
        </dataContext.Provider>
    )

}