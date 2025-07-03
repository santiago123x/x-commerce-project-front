import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "@/types/types";

const initialState: CartItem[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    deleteProduct: (state, action) => {
      //delete
    },
    addProduct: (state, action: PayloadAction<CartItem>) => {
      const product = action.payload;
      const existingProduct = state.find(
        (item: CartItem) => item.id === product.id,
      );
      if (existingProduct) {
        existingProduct.quantity += product.quantity;
      } else {
        state.push(product);
      }
    },
  },
});


export const { addProduct, deleteProduct } = cartSlice.actions;
export default cartSlice.reducer;