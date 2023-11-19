import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      let findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.quantity + sum;
      }, 0);
    },
    minusItem(state, action) {
      let findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem && findItem.quantity>0 ) {
        findItem.quantity--;
      }
    },
  },
});

export const selectCart = (state) => state.cart;
export const selectCartItemById = (id) => (state) =>
  state.cart.items.find((obj) => obj.id === id);

export const { addItem, clearItems, minusItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
