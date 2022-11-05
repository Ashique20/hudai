import React, { useEffect, useState } from "react";
import './shop.css'
import Product from "../product/product";

const Shop =()=>{
    const [cart,setCart] = useState([]);
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },
    [])
    const handleClick=(product)=>{
        
        const newCart = [...cart,product];
        setCart(newCart);
    }
    return(
        <div className="shop-container">
            <div className="product-container"> 
            {products.map(product =><Product 
            product={product}
            handleClick={handleClick}
            >

            </Product>)
            }
            </div>
            <div className="cart-container">
        <h3>Order summery</h3>
            </div>
        </div>
    );
}


export default Shop;