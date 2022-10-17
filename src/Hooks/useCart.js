// import React from 'react';

// ! for avoiding the duplicate "useState and UseEffect" code.
// ! using this hooks folder we can avoid the duplication [Example 53.3 (Programming Hero)]

import { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/fakedb";

const useCart = (products) => {
    const [cart, setCart] = useState([]);

    useEffect (() => {
        const storedCart = getStoredCart();
        // console.log(storedCart);
        const saveCart = [];
        for(const id in storedCart) {
            // console.log(id);
            const addedProduct = products.find(product => product.id === id)
            // console.log(addedProduct);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // console.log(addedProduct);
                saveCart.push(addedProduct);
            }
        }
        setCart(saveCart);
    }, [products]);
    return  [cart, setCart];  // ! "Return" technology just return 1 parameter, but it looks like returning 2 parameters, cause these parameter is in the array. it is mean return count 1 parameter instead of 2 parameter.
};

export default useCart;