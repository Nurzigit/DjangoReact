import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const ProductForm = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    image: '',
    category: '',
  });

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const fetchProducts = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/products/`);
    setProducts(response.data);
    console.log(response.data)
  };
  

  const fetchCategories = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/categories/`);
    setCategories(response.data);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (event) => {
    setFormData({
      ...formData,
      image: event.target.files[0],
    });
  };

  const handleSelectChange = (event) => {
    setFormData({
      ...formData,
      category: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData();  
    data.append('name', formData.name);
    data.append('description', formData.description);
    data.append('price', formData.price);
    data.append('image', formData.image);
    data.append('category', formData.category);
  
    if (selectedProduct) {
      await axios.put(`${process.env.REACT_APP_API_URL}/products/${selectedProduct.id}/`, data);
      console.log(JSON.stringify(data))
      setSelectedProduct(null);
    } else {
      await axios.post(`${process.env.REACT_APP_API_URL}/products/`, data);
    }

    setFormData({
      name: '',
      description: '',
      price: '',
      image: '',
      category: '',
    });
    
    fetchProducts();
  };

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setFormData({
      name: product.name,
      description: product.description,
      price: product.price,
      image: '',
      category: product.category.id,
    });
  };

  const handleDelete = async (product) => {
    await axios.delete(`${process.env.REACT_APP_API_URL}/products/${product.id}/`);
    fetchProducts();
  };

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price} - {product.category.name}
            <button onClick={() => handleEdit(product)}>Edit</button>
            <button onClick={() => handleDelete(product)}>Delete</button>
          </li>
        ))}
      </ul>
      <h2>{selectedProduct ? 'Edit Product' : 'Add Product'}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
          />
        </label>
       <br />
    <label>
      Image:
      <input type="file" name="image" onChange={handleFileChange} />
    </label>
    <br />
    <label>
      Category:
      <select value={formData.category} onChange={handleSelectChange}>
        <option value="">Select a category</option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </label>
    <br />
    <button type="submit">{selectedProduct ? 'Save' : 'Add'}</button>
  </form>
</div>
);
};

