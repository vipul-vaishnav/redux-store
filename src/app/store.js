import { configureStore } from "@reduxjs/toolkit";
import CartReducers from "./CartSlice";

export const store = configureStore({
  reducer: {
    cart: CartReducers,
  },
});
