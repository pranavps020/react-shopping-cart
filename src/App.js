import './App.css';
import React,{ useEffect, useState } from 'react';
import Products from './components/Products/Products';
import Navbar from './components/Navbar/Navbar';
import {commerce} from './lib/commerce';
import Cart from './components/Cart/Cart';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

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
        <Router>
         <div>
            <Navbar cart={cart} />
             <Switch>

               <Route exact path="/">
                 <Products products={products} onaddCart={handleaddtoCart}/>
               </Route>
              
               <Route exact path="/cart">
                <Cart cart={cart} />
              </Route>

            </Switch>
         </div>
        </Router>
    )
}

export default App


 