
import { useEffect, useState } from "react";
import axios from "axios";

export const useDeleteHook = (id) => {

    useEffect(() => {
        deleteItems();
    }, []);

    const deleteItems = () => {
        axios.delete(`http://localhost:8000/api/products/${id}/`)
        .then(response => {
            console.log(response);
        })
        .catch(error => console.log(error));
    }
    return;
};