// src/components/Product.js
import React from 'react';

const Product = ({ product }) => {
    return (
        <div className="product">
            <h3>{product.name}</h3>
            <img src={product.image} alt={product.name} style={{ width: '100px', height: '100px' }} />
            <p>Price: ${product.price}</p>
            <button>Add to Cart</button>
        </div>
    );
};

export default Product;