import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItems from '../ReviewItems/ReviewItems';

const Orders = () => {

    const [products, setProducts] = useProducts(); // !This Data came from Hooks (useProducts.js)
    const [cart, setCart] = useCart(products);

    const handleRemoveProduct = product => {
       const rest = cart.filter(pd =>pd.id !== product.id);
       setCart(rest);
       removeFromDb(product.id);
    }

    return (
        <div className='shop-container'>
            <div className='reviw-item-container'>
                {
                    cart.map(product => <ReviewItems
                        key={product.id}
                        product ={product}
                        handleRemoveProduct={handleRemoveProduct}
                    ></ReviewItems>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}>
                   <Link to="/inventory">
                   <button>Procced Chackout</button></Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;