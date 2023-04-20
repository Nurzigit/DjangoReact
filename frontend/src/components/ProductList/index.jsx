import React from 'react';
import { useLocalHook } from '../../hooks/useLocalHook';

export const ProductList = () => {
    const { items: products } = useLocalHook();
    return (
        <div>
            <h2>Product List</h2>
                <ul>
                    {products.map(product => (
                    <li key={product.id}>
                        {product.name} - {product.price} - {product.description}
                    </li>
                    ))}
                </ul>
        </div>
    );
};

