import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
export const ProductDetail = ({ match, history }) => {
    const [product, setProduct] = useState({});

    const { id } = useParams();
    const navigate = useNavigate();
    
  useEffect(() => {
    axios.get(`http://localhost:8000/api/products/${id}/`)
      .then(response => setProduct(response.data))
      .catch(error => console.log(error));
  }, [id]);

  if (product.length === 0) {
    return <div>Loading...</div>;
  }
  
    return (
        <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <img src={product.image} alt={product.name} />
            <p>Price: {product.price}</p>
            {/* <p>Category: {product.category}</p> */}
            {/* <button onClick={DeleteHook(id, history)}>Delete</button> */}
            <Link to={`/update/${product.id}`}>Update</Link>
        </div>
    );
};

