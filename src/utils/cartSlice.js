import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    deleteBox: false,
    confirm: false,
    itemToDelete: null,
  },
  reducers: {
    addItem: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.cart.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity += 1;
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
          state.itemToDelete = indexToDecrement;
          state.deleteBox = true;
        }
      }
    },
    confirmDelete: (state) => {
      if (state.confirm && state.itemToDelete !== null) {
        console.log("C", state.confirm);
        state.cart.splice(state.itemToDelete, 1);
        state.confirm = false;
        state.itemToDelete = null;
        state.deleteBox = false;
      }
    },
    cancelDelete: (state) => {
      state.confirm = false;
      state.itemToDelete = null;
      state.deleteBox = false;
    },
    setDeleteBox: (state) => {
      state.deleteBox = !state.deleteBox;
    },
    setConfirm: (state) => {
      state.confirm = !state.confirm;
    },
  },
});

export const {
  addItem,
  removeItem,
  incrementIndex,
  decrementIndex,
  confirmDelete,
  cancelDelete,
  setConfirm,
  setDeleteBox,
} = cartSlice.actions;
export default cartSlice.reducer;
