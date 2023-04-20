import axios from 'axios';
import React, { useState } from 'react';


export const ProductForm = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      axios.post('http://localhost:8000/products/', { name, price })
        .then(response => console.log(response.data));
      setName('');
      setPrice('');
    };
    return (
        <div>
             <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Price:
          <input type="text" value={price} onChange={e => setPrice(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
        </div>
    );
};

