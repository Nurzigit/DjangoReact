
import { useEffect, useState } from "react";
import axios from "axios";

export const useLocalHook = () => {
   
    const [items, setItems] = useState([]);
    useEffect(() => {
        getAllItems();
    }, []);


    const getAllItems = () => {
        axios
            .get(
                'http://localhost:8000/api/products/'
            )
            .then((res) => {
                setItems(res.data);
            }, []);
    };
    console.log(items);
    return { items };
};