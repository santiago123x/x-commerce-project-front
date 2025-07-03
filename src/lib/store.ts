import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "@/lib/features/shoppingCart/cartSlice";

export const store = () => {
  return configureStore({
    reducer: {
      cart: CartReducer,
    },
  });
};

export type AppStore = ReturnType<typeof store>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
