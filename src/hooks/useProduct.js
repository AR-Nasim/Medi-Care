import { useEffect } from "react";
import { useState } from "react"

const useProduct = () => {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/AR-Nasim/data/main/products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[]);
    return [products,setProducts];
}

export default useProduct;