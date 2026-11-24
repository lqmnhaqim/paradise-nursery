import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find((item) => item.name === name);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter((item) => item.name !== action.payload.name);
    },
    incrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.name === action.payload.name);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.name === action.payload.name);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.items = state.items.filter((i) => i.name !== action.payload.name);
        }
      }
    },
  },
});

export const { addItem, deleteItem, incrementQuantity, decrementQuantity } = cartSlice.actions;

export const selectTotalQuantity = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.quantity, 0);

export default cartSlice.reducer;
