import React from 'react';

function ProductCard({ product }) {
    return (
        <div className="product-card">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <b>Rp {product.price}</b>
            <button>Beli</button>
        </div>
    );
}

export default ProductCard;