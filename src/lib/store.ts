import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "@/lib/features/shoppingCart/cartSlice";

export const store =  configureStore({
  reducer: {
    cart: CartReducer,
  },
});


export type AppStore = typeof store;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
