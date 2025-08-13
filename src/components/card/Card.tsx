import React from "react";
import Image from "next/image";
import { CardProps } from "@/types/types";
import { useAppDispatch } from "@/lib/hooks";
import { addProduct } from "@/lib/features/shoppingCart/cartSlice";

const Card: React.FC<CardProps> = ({
  id,
  name,
  description,
  image,
  price,
  bought,
  review,
  specialStyle,
}) => {
  const dispatch = useAppDispatch();
  const money_symbol: string = "US$";

  const renderStars = () => {
    const reviewValue = review || 0;
    return (
      "★".repeat(Math.floor(reviewValue)) +
      "☆".repeat(5 - Math.floor(reviewValue))
    );
  };

  return (
    <div
      className={`flex min-h-[450px] w-[370px] flex-col gap-3 rounded bg-[#f9f9f9] p-4 text-[#121212] shadow-sm ${
        specialStyle
          ? "[@media(min-width:880px)_and_(max-width:1320px)]:col-span-2"
          : ""
      }`}
    >
      <div className="relative flex h-[180px] items-center justify-center overflow-hidden rounded bg-white">
        <Image
          alt={`${description.slice(0, 10)}${description.length > 10 ? "..." : ""}`}
          src={image || ""}
          fill
          className="rounded object-contain object-center"
          sizes="(max-width: 200px) 100vw, 200px"
        />
      </div>

      <div className="line-clamp-3 h-[60px] overflow-hidden text-base leading-snug">
        <p>{description}</p>
      </div>

      <div className="flex flex-col justify-between text-xs text-[#666]">
        <div className="reviews_stars">{renderStars()}</div>
        <div className="reviews_bought">{bought} vendidos</div>
      </div>

      <div className="mt-auto flex items-center gap-1 text-xl font-bold">
        <span>{money_symbol}</span>
        <span>{price.toFixed(2)}</span>
      </div>

      <div className="mt-2 flex gap-2">
        <button
          type="button"
          className="flex-1 cursor-pointer rounded-full border-none bg-[#121212] py-1 text-lg text-white hover:bg-[#2d2d2d]"
          onClick={() => {
            dispatch(
              addProduct({ id, name, description, image, price, quantity: 1 }),
            );
          }}
        >
          Carrito
        </button>
        <button
          type="button"
          className="flex-1 cursor-pointer rounded-full border-none bg-[#ffd814] py-1 text-lg text-[#121212] hover:bg-[#f9d002]"
        >
          Comprar
        </button>
      </div>
    </div>
  );
};

export default Card;
