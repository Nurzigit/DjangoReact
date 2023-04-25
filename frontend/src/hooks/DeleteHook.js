import { useEffect } from "react";
import axios from "axios";

export const DeleteHook = ({id}) => {
    
    useEffect(() => {
        deleteItems();
    }, [id]);
    

    const deleteItems = () => {
        axios.delete(`http://localhost:8000/api/productdelete/${id}/`)
        .then(response => {
            console.log(response);
        })
        .catch(error => console.log(error));
    }
};  