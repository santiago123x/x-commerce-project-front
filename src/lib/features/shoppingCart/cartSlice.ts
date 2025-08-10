import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cart, CartItemProps } from "@/types/types";

const initialState: Cart = {
  items: [],
  total: 0,
};

const calcTotal = (items: CartItemProps[]) => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    deleteProduct: (state, action) => {
      //delete
    },
    addProduct: (state, action: PayloadAction<CartItemProps>) => {
      const product = action.payload;
      const existingProduct = state.items.find(
        (item: CartItemProps) => item.id === product.id,
      );
      if (existingProduct) {
        existingProduct.quantity += product.quantity;
        state.total = calcTotal(state.items);
      } else {
        state.items.push(product);
        state.total = calcTotal(state.items);
      }
    },
    increaseQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>,
    ) => {
      const { id, quantity } = action.payload;
      const existingProduct = state.items.find(
        (item: CartItemProps) => item.id === id,
      );
      if (existingProduct) {
        existingProduct.quantity += quantity;
        state.total = calcTotal(state.items);
      }
    },
    decreaseQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>,
    ) => {
      const { id, quantity } = action.payload;
      const existingProduct = state.items.find(
        (item: CartItemProps) => item.id === id,
      );
      if (existingProduct) {
        existingProduct.quantity = Math.max(
          1,
          existingProduct.quantity - quantity,
        );
        state.total = calcTotal(state.items);
      }
    },
  },
});

export const { addProduct, deleteProduct, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
