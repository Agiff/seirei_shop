import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
import { Products, Navbar, Cart, Checkout } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  }

  const handleAddToCart = async (productId, quantity) => {
    setCart(await commerce.cart.add(productId, quantity));
  }

  const handleUpdateCartQuantity = async (productId, quantity) => {
    setCart(await commerce.cart.update(productId, { quantity }));
  }

  const handleRemoveFromCart = async (productId) => {
    setCart(await commerce.cart.remove(productId));
  }

  const handleEmptyCart = async () => {
    setCart(await commerce.cart.empty());
  }

  // console.log(cart);

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <Router>
      <div>
        <Navbar totalItems={cart.total_items} />
        <Routes>
            <Route path="/" element={<Products products = {products} onAddToCart = {handleAddToCart}/>} />
            <Route path="/cart" element={
              <Cart 
                cart={cart} 
                handleUpdateCartQuantity={handleUpdateCartQuantity}
                handleRemoveFromCart={handleRemoveFromCart}
                handleEmptyCart={handleEmptyCart}
              />
            }/>
            <Route path="/checkout" element={<Checkout cart={cart}/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
