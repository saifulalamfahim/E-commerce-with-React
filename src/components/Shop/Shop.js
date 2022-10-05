import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Product/Products';
import './Shop.css';

const Shop = () => {
    const [products, setproducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setproducts(data))
    },[]);
    const handleAddToCart = (product) => {
        console.log(product);

        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className='products-container'>
               {
                products.map(product => <Products
                key={product.id}
                product={product}
                handleAddToCart={handleAddToCart}
                ></Products>)
               }
            </div>
            <div className='cart-container'>
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;