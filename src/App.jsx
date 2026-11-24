import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store.js';
import Navbar from './components/Navbar.jsx';
import AboutUs from './components/AboutUs.jsx';
import ProductList from './components/ProductList.jsx';
import CartItem from './components/CartItem.jsx';
import './App.css';

function App() {
  const [page, setPage] = useState('landing'); // landing | products | cart

  const goToProducts = () => setPage('products');
  const goToCart = () => setPage('cart');
  const continueShopping = () => setPage('products');

  return (
    <Provider store={store}>
      <div className="app">
        <Navbar onNavigate={setPage} />

        {page === 'landing' && (
          <main className="landing">
            <section className="hero">
              <div className="hero-content">
                <h1 className="hero-title">Paradise Nursery</h1>
                <p className="hero-tagline">
                  Where plants are our passion — bring nature home today.
                </p>
                <button className="get-started-btn" onClick={goToProducts}>
                  Get Started
                </button>
              </div>
            </section>
            <AboutUs />
          </main>
        )}

        {page === 'products' && <ProductList onNavigateToCart={goToCart} />}

        {page === 'cart' && <CartItem onContinueShopping={continueShopping} />}
      </div>
    </Provider>
  );
}

export default App;
