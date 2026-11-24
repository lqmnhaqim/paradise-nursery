# Paradise Nursery — Shopping Application

A dynamic e-commerce web application for an online plant shop, **Paradise Nursery**.
Users can browse houseplants grouped by category, view thumbnails, names,
descriptions and prices, add plants to a shopping cart, and manage cart items
(increase / decrease quantity, delete items) while the navbar cart icon updates
dynamically and totals are calculated automatically.

## Project name

**Paradise Nursery Shopping Application** — built with React + Redux Toolkit (Vite).

## Features

- **Landing page** with company name and a **Get Started** button (hero background image).
- **About Us** section describing the company, mission, offerings and promise.
- **Navbar** (on both Product Listing and Cart pages) with links: **Home**, **Plants**, **Cart** and a live **cart icon counter**.
- **Product listing** — 18 unique plants across **3 categories** (Foliage, Aromatic, Succulents), each with thumbnail, name, description and price.
- **Add to Cart** buttons that add the product, **disable after adding**, and increment the navbar cart count.
- **Shopping cart page** — per-item thumbnail, name, unit price and subtotal; quantity **+ / −** controls; **delete** button per item; **total cart amount**; **Checkout** button ("Coming Soon"); **Continue Shopping** button back to the product listing.
- Cart state managed by a **Redux slice** (`CartSlice.jsx`) with actions: `addItem`, `deleteItem`, `incrementQuantity`, `decrementQuantity`.

## Tech stack

- React 19 (Vite)
- Redux Toolkit + react-redux
- Plain CSS (no UI framework)

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

## Project structure

```
src/
├── App.jsx                 # Landing page (hero + Get Started) & page routing
├── App.css                 # Styles incl. landing-page background image
├── main.jsx                # Entry point
├── store.js                # Redux store
├── data/plants.js          # 18 plants / 3 categories dataset
└── components/
    ├── Navbar.jsx          # Navbar + dynamic cart icon counter
    ├── AboutUs.jsx         # Company details
    ├── ProductList.jsx     # Product listing page (Task 6)
    └── CartItem.jsx        # Shopping cart page (Task 7)
```

_© Paradise Nursery — Final Project_
