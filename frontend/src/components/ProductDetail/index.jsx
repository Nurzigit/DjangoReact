import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useDeleteHook } from '../../hooks/useDeleteHook';
export const ProductDetail = ({ match, history }) => {
    const [product, setProduct] = useState({});

    const { id } = useParams();

    
  useEffect(() => {
    axios.get(`http://localhost:8000/api/products/${id}/`)
      .then(response => setProduct(response.data))
      .catch(error => console.log(error));
  }, [id]);
  
    return (
        <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            {/* <img src={product.image} alt={product.name} /> */}
            <p>Price: {product.price}</p>
            {/* <p>Category: {product.category}</p> */}
            <button onClick={useDeleteHook(id, history)}>Delete</button>
            <Link to={`/update/${product.id}`}>Update</Link>
        </div>
    );
};

