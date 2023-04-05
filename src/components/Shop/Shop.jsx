import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';



const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        // step:1 (get id of the addedProduct)
        for (const id in storedCart) {
            // step:2 (get the product by using id)
            const addedProduct = products.find(product => product.id === id)

            // step:3 (add quantity of the product)
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // step:4 (add the addedProduct to the saved cart)
                savedCart.push(addedProduct);
            }
        }
        // step:5 (set the cart)
        setCart(savedCart)
    }, [products])

    const handleAddProduct = (product) => {
        const newCart = [...cart, product];

        // super advanced
        // let newCart = [];
        // const exists = cart.find(pd => pd.id === product.id);
        // if(!exists){
        //     product.quantity = 1;
        //     newCart = [...cart, product]
        // }
        // else{
        //     exists.quantity = exists.quantity + 1;
        //     const remaining = cart.filter(pd =>pd.id !== product.id);
        //     newCart = [...remaining, exists]
        // }

        setCart(newCart);
        addToDb(product.id)
    }

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddProduct={handleAddProduct}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart handleClearCart={handleClearCart} cart={cart}>
                    <Link className='proceed-link' to='/order review'><button className='btn-proceed'>Review Order <FontAwesomeIcon icon={faArrowRight} /></button></Link>
                    </Cart>
            </div>
        </div>
    );
};

export default Shop;