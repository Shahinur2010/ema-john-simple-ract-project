import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res=> res.json())
        .then(data=> setProducts(data))
    }, []);

    const handleAddProduct = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                 {
                    products.map(product=> <Product 
                        key={product.id}
                        product={product}
                        handleAddProduct={handleAddProduct}
                        ></Product>)
                 }
            </div>
            <div className="cart-container">
                <h4>Order Summary</h4>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: ${}</p>
                <p>Total Shipping Charge: $5</p>
                <p>Tax: $114</p>
                <p>Grand Total: $1559</p>
            </div>
        </div>
    );
};

export default Shop;