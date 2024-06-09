import { createContext } from "react";
const DataContext = createContext();
import { useState,useEffect } from "react";

function DataProvider({ children }) {
    const [data, setData] = useState([]);  
    const addData = (newData) => setData([...data, newData]);
    return (
        <DataContext.Provider value={{ data, addData }}>
            {children}
        </DataContext.Provider>
    );
}

export  { DataContext, DataProvider };