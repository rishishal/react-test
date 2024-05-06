import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../utils/cartSlice";

const store = configureStore({
  reducer: {
    allCart: cartSlice,
  },
});

export default store;
