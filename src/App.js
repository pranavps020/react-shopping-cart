import './App.css';
import React,{ useEffect, useState } from 'react'
import Products from './components/Products/Products'
import Navbar from './components/Navbar/Navbar'
import {commerce} from './lib/commerce'

function App() {
    const[products , setProducts] = useState([]);
    const[cart , setCart] = useState({});
    
    const fetchProducts = async() => {
        const {data} = await commerce.products.list();
        setProducts(data);
        
    }
    const fetchCart = async() => {
        setCart(await commerce.cart.retrieve());    
    }
    const handleaddtoCart = async (id,qty) => {
        const item = await commerce.cart.add(id,qty);
        setCart(item.cart);
    }

    useEffect(() => {
        fetchProducts()
        fetchCart()
    },[])
    return (
        <div>
            <Navbar cart={cart} />
            <Products products={products} onaddCart={handleaddtoCart}/>
        </div>
    )
}

export default App


 