// import React from 'react';

// ! for avoiding the duplicate "useState and UseEffect" code.
// ! using this hooks folder we can avoid the duplication [Example 53.3 (Programming Hero)]

import { useEffect, useState } from "react";

const useProducts = () => {
   const [products, setProducts] = useState([]);

   useEffect(() => {
    fetch(`products.json`)
    .then(res => res.json())
    .then(data => setProducts(data));
   }, []);
   return [products, setProducts];   // ! "Return" technology just return 1 parameter, but it looks like returning 2 parameters, cause these parameter is in the array. it is mean return count 1 parameter instead of 2 parameter.
};

export default useProducts;