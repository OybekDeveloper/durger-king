import { configureStore } from "@reduxjs/toolkit";
import cart from "./slices/cardSlice";

export const store = configureStore({
  reducer: { cart },
});
