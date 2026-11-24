import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteItem,
  incrementQuantity,
  decrementQuantity,
} from '../redux/CartSlice.jsx';
function CartItem({ onContinueShopping }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Jumlah keseluruhan semua item dalam cart
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.cost * item.quantity,
    0
  );

  const handleIncrement = (item) => dispatch(incrementQuantity({ name: item.name }));
  const handleDecrement = (item) => dispatch(decrementQuantity({ name: item.name }));
  const handleDelete = (item) => dispatch(deleteItem({ name: item.name }));

  const handleCheckout = () => {
    alert('Checkout — Coming Soon! 🌱');
  };

  if (cartItems.length === 0) {
    return (
      <section className="cart-page">
        <h2 className="page-title">Shopping Cart</h2>
        <div className="cart-empty">
          <p>Your cart is empty. 🪴</p>
          <button className="continue-btn" onClick={onContinueShopping}>
            Continue Shopping
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="cart-page">
      <h2 className="page-title">Shopping Cart</h2>

      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.name} className="cart-item">
            <img className="cart-thumb" src={item.image} alt={item.name} />
            <div className="cart-item-info">
              <h3 className="cart-item-name">{item.name}</h3>
              <p className="cart-item-unit">Unit price: ${item.cost}</p>
            </div>
            <div className="quantity-controls">
              <button
                className="qty-btn"
                aria-label={`Decrease quantity of ${item.name}`}
                onClick={() => handleDecrement(item)}
              >
                −
              </button>
              <span className="qty-value">{item.quantity}</span>
              <button
                className="qty-btn"
                aria-label={`Increase quantity of ${item.name}`}
                onClick={() => handleIncrement(item)}
              >
                +
              </button>
            </div>
            <div className="cart-item-subtotal">
              ${(item.cost * item.quantity).toFixed(2)}
            </div>
            <button
              className="delete-btn"
              aria-label={`Delete ${item.name} from cart`}
              onClick={() => handleDelete(item)}
            >
              🗑 Delete
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <div className="cart-total">
          <span>Total Amount: </span>
          <strong>${totalAmount.toFixed(2)}</strong>
        </div>
        <div className="cart-actions">
          <button className="checkout-btn" onClick={handleCheckout}>
            Checkout
          </button>
          <button className="continue-btn" onClick={onContinueShopping}>
            Continue Shopping
          </button>
        </div>
      </div>
    </section>
  );
}

export default CartItem;
