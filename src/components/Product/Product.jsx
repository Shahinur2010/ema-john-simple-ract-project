import React from 'react';
import './Product.css'

const Product = (props) => {
    const { img, seller, price, name, ratings } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} stars</p>
            </div>
            <div>
                <button className='btn-cart'>Add to Cart</button>
            </div>
        </div>

    );
};

export default Product;