import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addItem: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.cart.find((item) => item.id === id);
      if (existingItem) {
        state.cart.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },

    incrementIndex: (state, action) => {
      const indexToIncrement = action.payload;
      if (indexToIncrement >= 0 && indexToIncrement < state.cart.length) {
        state.cart[indexToIncrement].quantity += 1;
      }
    },

    decrementIndex: (state, action) => {
      const indexToDecrement = action.payload;
      if (indexToDecrement >= 0 && indexToDecrement < state.cart.length) {
        if (state.cart[indexToDecrement].quantity > 1) {
          state.cart[indexToDecrement].quantity -= 1;
        } else {
          state.cart.splice(indexToDecrement, 1);
        }
      }
    },
  },
});

export const { addItem, removeItem, incrementIndex, decrementIndex } =
  cartSlice.actions;
export default cartSlice.reducer;
