import React from 'react';
import { useSelector } from 'react-redux';
import { selectTotalQuantity } from '../redux/CartSlice.jsx';

function Navbar({ onNavigate }) {
  const totalQuantity = useSelector(selectTotalQuantity);

  return (
    <nav className="navbar">
      <div
        className="nav-brand"
        onClick={() => onNavigate('landing')}
        role="button"
        tabIndex={0}
      >
        🌿 Paradise Nursery
      </div>
      <div className="nav-links">
        <button className="nav-link" onClick={() => onNavigate('landing')}>
          Home
        </button>
        <button className="nav-link" onClick={() => onNavigate('products')}>
          Plants
        </button>
        <button className="nav-link cart-btn" onClick={() => onNavigate('cart')}>
          <span className="cart-icon" aria-label="shopping cart" role="img">
            🛒
          </span>
          Cart
          <span className="cart-count">{totalQuantity}</span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
