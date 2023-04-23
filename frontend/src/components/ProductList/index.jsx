import React from 'react';
import { Link } from 'react-router-dom';
import { useLocalHook } from '../../hooks/useLocalHook';

export const ProductList = () => {
    const { items: products } = useLocalHook();
    return (
        <div>
            <h2>Product List</h2>
                <ul>
                    {products.map(product => (
                    <li key={product.id}>
                        <Link to={`/detail/${product.id}`}>{product.name}</Link>
                    </li>
                    ))}
                </ul>

                
        </div>
    );
};

