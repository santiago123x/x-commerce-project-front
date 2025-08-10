"use client";
import React from "react";
import { CartItemProps } from "@/types/types";
import { useAppDispatch } from "@/lib/hooks";
import {
  increaseQuantity,
  decreaseQuantity,
} from "@/lib/features/shoppingCart/cartSlice";

const CartItem: React.FC<CartItemProps> = ({
  id,
  name,
  price,
  quantity,
  description,
  image,
}) => {
  const dispatch = useAppDispatch();
  return (
    <div className="mb-4 flex flex-col items-stretch rounded-lg border bg-white p-4 shadow md:flex-row">
      <div className="mb-4 flex w-full flex-shrink-0 flex-col items-center justify-center md:mb-0 md:w-28">
        <div className="flex h-24 w-24 items-center justify-center rounded bg-gray-200">
          {image ? (
            <img
              src={image}
              alt={name}
              className="h-full w-full rounded object-cover"
            />
          ) : (
            <span className="text-gray-400">Imagen</span>
          )}
        </div>
        <div className="mt-4 flex w-full flex-col items-center justify-center gap-2 md:hidden">
          <div className="flex items-center justify-center">
            <button
              className="mx-1 rounded border px-2 py-1 text-lg hover:bg-gray-100"
              disabled={quantity <= 1}
              onClick={() => dispatch(decreaseQuantity({ id, quantity: 1 }))}
            >
              &#8722;
            </button>
            <span className="mx-2 text-lg font-bold">{quantity}</span>
            <button
              className="mx-1 rounded border px-2 py-1 text-lg hover:bg-gray-100"
              onClick={() => dispatch(increaseQuantity({ id, quantity: 1 }))}
            >
              &#43;
            </button>
          </div>
          <div className="flex items-center justify-center">
            <span className="text-xs text-gray-500">US$</span>
            <span className="ml-1 text-2xl font-bold">{price}</span>
            <span className="ml-1 align-top text-xs text-gray-500">99</span>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-center md:pl-4">
        <h2 className="text-left text-lg font-semibold">{name}</h2>
        <p className="mb-2 whitespace-normal break-words text-left text-sm text-gray-500">
          {description && description.length > 40
            ? description.slice(0, 50) + "..."
            : description}
        </p>
        <button className="w-fit rounded border px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 md:w-fit">
          Eliminar
        </button>
      </div>
      <div className="mt-4 hidden flex-col items-center justify-center gap-2 md:mt-0 md:flex md:w-40">
        <div className="flex w-full flex-col items-end justify-center gap-2 md:w-auto">
          <div className="flex items-center justify-end">
            <button
              className="mx-1 rounded border px-2 py-1 text-lg hover:bg-gray-100"
              disabled={quantity <= 1}
              onClick={() => dispatch(decreaseQuantity({ id, quantity: 1 }))}
            >
              &#8722;
            </button>
            <span className="mx-2 text-lg font-bold">{quantity}</span>
            <button
              className="mx-1 rounded border px-2 py-1 text-lg hover:bg-gray-100"
              onClick={() => dispatch(increaseQuantity({ id, quantity: 1 }))}
            >
              &#43;
            </button>
          </div>
          <div className="flex items-center justify-end">
            <span className="text-xs text-gray-500">US$</span>
            <span className="ml-1 text-2xl font-bold">{price}</span>
            <span className="ml-1 align-top text-xs text-gray-500">99</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
