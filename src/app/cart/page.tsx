"use client";
import React from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { CartProduct } from "@/types/types";
import { addProduct } from "@/lib/features/shoppingCart/cartSlice";
import CartItem from "@/components/cartItem/cartItem";
import PurchaseSummary from "@/components/purchaseSummary/PurchaseSummary";

const Cart = () => {
  const product: CartProduct = {
    id: "11",
    name: "Sample2 Product",
    price: 29.99,
    quantity: 1,
    description: "This is a sample product descriptionaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdasddddddddddddddddddddddddddddddddddddddddddddddddddddddd.",
    image: "https://m.media-amazon.com/images/I/71uBUqTlx3L.jpg",
    stock: 10,
  };

  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const handleAddToCart = () => {
    dispatch(addProduct(product));
  };
  return (
    <div className="flex w-full flex-1 items-start justify-center py-12">
      <div className="w-full max-w-[98vw] px-4 md:px-8">
        <h1 className="mb-8 text-2xl font-bold">Productos a comprar</h1>
        <div className="grid grid-cols-1 lg:grid-cols-[7fr_3fr] gap-4 lg:gap-8 items-start w-full">
          <div className="w-full">
            <div className="flex flex-col gap-6">
              {cart.items.length === 0 ? (
                <p>Your cart is empty.</p>
              ) : (
                cart.items.map((item: CartProduct) => (
                  <CartItem key={item.id} {...item} />
                ))
              )}
            </div>
            <button
              type="button"
              onClick={handleAddToCart}
              className="mt-8 rounded bg-gray-800 px-4 py-2 text-white"
            >
              Add Sample Product
            </button>
          </div>
          <div className="flex items-start justify-center w-full min-w-[260px] md:min-w-[340px]">
            <PurchaseSummary onContinue={() => console.log("Continuing to checkout...")} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
