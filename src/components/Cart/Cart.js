import React from 'react';
import './Cart.css';

const Cart = (props) => {
    console.log(props.children)
    const { cart } = props;
    // console.log(props)
    let total = 0;
    let shipping = -0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tex =parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tex;

    return (
        <div className='cart'>
             <h4>This is Summery</h4>
                <p>Selected items: {quantity}</p>
                <p>Total price: ${total} </p>
                <p>Total Shipping: $ {shipping}</p>
                <p>Tax: $ {tex}</p>
                <h5>Grand Total: $ {grandTotal} </h5>
                {props.children}
        </div>
    );
};

export default Cart;