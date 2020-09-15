import React from 'react'
import '../Products.css'

function Products({id, title,image, price, rating}) {
    return (
        <div className="product">
            <div className="product__info">
            <p>{title}</p>
            <p><small>{id}</small></p>
            <div className="product__rating">
                { Array(rating).fill().map((_) => (
                      <p><span role="img" aria-label="Star rating">⭐</span></p>
                   ))
                }
            </div>
            </div>
            <img src={image} alt="" /> 
            <p className="product__price">
                <small>$</small>
            <strong>{price}</strong>
                </p>
            <button>Add to cart</button>
        </div>
    )
}

export default Products
