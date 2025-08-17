import { useEffect } from "react";
import { clearCart, addProduct } from "@/lib/features/shoppingCart/cartSlice";
import { CartProduct } from "@/types/types";
import { AppStore } from "@/lib/store";

export const useHydrateCartFromStorage = (store: AppStore | null) => {
  useEffect(() => {
    if (typeof window !== "undefined" && store) {
      try {
        const data = localStorage.getItem("cart");
        if (data) {
          const parsed = JSON.parse(data);
          store.dispatch(clearCart());
          if (parsed.items && Array.isArray(parsed.items)) {
            parsed.items.forEach((item: CartProduct) => {
              store.dispatch(addProduct(item));
            });
          }
        }
      } catch (e) {
        console.warn("Error hydrating cart from localStorage:", e);
      }
    }
  }, [store]);

  useEffect(() => {
    if (!store || typeof window === "undefined") return;
    const unsubscribe = store.subscribe(() => {
      const cart = store.getState().cart;
      try {
        localStorage.setItem("cart", JSON.stringify(cart));
      } catch (e) {
        console.warn("Error saving cart to localStorage:", e);
      }
    });
    return () => unsubscribe();
  }, [store]);
};
