import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice"; // Ensure correct import path

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
