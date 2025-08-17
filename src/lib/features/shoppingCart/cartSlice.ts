import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cart, CartProduct } from "@/types/types";

const initialState: Cart = {
  items: [],
  total: 0,
};

const calcTotal = (items: CartProduct[]) => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    deleteProduct: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      state.items = state.items.filter((item: CartProduct) => item.id !== id);
      state.total = calcTotal(state.items);
    },
    addProduct: (state, action: PayloadAction<CartProduct>) => {
      const product = action.payload;
      const existingProduct = state.items.find(
        (item: CartProduct) => item.id === product.id,
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
        (item: CartProduct) => item.id === id,
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
        (item: CartProduct) => item.id === id,
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

export const { deleteProduct, addProduct, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
