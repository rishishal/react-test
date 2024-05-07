import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    totalCount: 0,
    totalPrice: 0,
  },
  reducers: {
    addItem: (state, action) => {
      state.cart.push(action.payload);
      state.totalCount = state.cart.length;
    },
  },
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
