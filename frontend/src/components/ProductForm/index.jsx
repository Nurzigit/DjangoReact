import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';

export const ProductForm = ({ history }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleNameChange = useCallback(event => {
    setName(event.target.value);
  }, []);

  const handleDescriptionChange = useCallback(event => {
    setDescription(event.target.value);
  }, []);

  const handlePriceChange = useCallback(event => {
    setPrice(event.target.value);
  }, []);

  const handleImageChange = useCallback(event => {
    setImage(event.target.files[0]);
  }, []);
  const handleCategoryChange = useCallback(event => {
    setCategory(event.target.value);
  }, []);

  const handleSubmit = useCallback(event => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('image', image);
    formData.append('сat', category);
    axios.post('http://localhost:8000/api/products/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(response => {
    
        console.log(response);
        history.push('/');
      })
      .catch(error => {
        console.log(formData);
        console.log(error.response);
        setErrorMessage(error.response);
      });
  }, [name, description, price, image, category, history]);

  useEffect(() => {
    if (errorMessage) {
      alert(errorMessage);
    }
  }, [errorMessage]);
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea id="description" value={description} onChange={handleDescriptionChange} />
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input type="number" id="price" value={price} onChange={handlePriceChange} />
      </div>
      <div>
        <label htmlFor="image">Image:</label>
        <input type="file" id="image" onChange={handleImageChange} />
      </div>
      <div>
        <label htmlFor="category">Category:</label>
        <input type="text" id="category" value={category} onChange={handleCategoryChange} />
      </div>
      <button type="submit">Create Product</button>
    </form>
  );
};


