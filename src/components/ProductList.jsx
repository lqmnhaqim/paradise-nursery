import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, selectTotalQuantity } from '../redux/CartSlice.jsx';
import plantsData from '../data/plants.js';

function ProductCard({ plant, onNavigateToCart }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const added = items.some((item) => item.name === plant.name);

  const handleAdd = () => {
    dispatch(addItem({ name: plant.name, image: plant.image, cost: plant.cost }));
    onNavigateToCart();
  };

  return (
    <div className="product-card">
      <img className="product-thumb" src={plant.image} alt={plant.name} />
      <div className="product-info">
        <h3 className="product-name">{plant.name}</h3>
        <p className="product-desc">{plant.description}</p>
        <div className="product-footer">
          <span className="product-price">${plant.cost}</span>
          <button
            className="add-btn"
            onClick={handleAdd}
            disabled={added}
            aria-disabled={added}
          >
            {added ? 'Added ✓' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
}

function ProductList({ onNavigateToCart }) {
  const categories = [...new Set(plantsData.map((p) => p.category))];

  return (
    <section className="product-list-page">
      <h2 className="page-title">Our Plants</h2>
      <p className="page-subtitle">
        Browse our collection — {plantsData.length} varieties across {categories.length}{' '}
        categories. Add as many as you like!
      </p>

      {categories.map((category) => (
        <div key={category} className="category-section">
          <h3 className="category-title">{category}</h3>
          <div className="product-grid">
            {plantsData
              .filter((p) => p.category === category)
              .map((plant) => (
                <ProductCard
                  key={plant.name}
                  plant={plant}
                  onNavigateToCart={onNavigateToCart}
                />
              ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default ProductList;
