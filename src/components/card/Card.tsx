import React from "react";
import { CardProps } from "@/types/interfaces";

const Card: React.FC<CardProps> = ({
  description,
  image,
  price,
  bought,
  review,
  specialStyle,
}) => {
  const money_symbol: string = "US$";

  const renderStars = () => {
    return "★".repeat(Math.floor(review)) + "☆".repeat(5 - Math.floor(review));
  };

  return (
    <div className={`flex flex-col bg-[#f9f9f9] text-[#121212] w-[370px] p-4 shadow-sm rounded min-h-[450px] gap-3 ${
      specialStyle ? "[@media(min-width:880px)_and_(max-width:1320px)]:col-span-2" : ""
    }`}>
      <div className="flex justify-center items-center h-[180px] overflow-hidden rounded bg-white">
        <img
          alt={`${description.slice(0, 10)}${
            description.length > 10 ? "..." : ""
          }`}
          src={image}
          loading="lazy"
          className="w-full h-full object-contain object-center max-w-[200px] max-h-[180px]"
        />
      </div>

      <div className="text-base leading-snug h-[60px] overflow-hidden line-clamp-3">
        <p>{description}</p>
      </div>

      <div className="flex flex-col justify-between text-xs text-[#666]">
        <div className="reviews_stars">{renderStars()}</div>
        <div className="reviews_bought">{bought} vendidos</div>
      </div>

      <div className="flex items-center gap-1 font-bold text-xl mt-auto">
        <span>{money_symbol}</span>
        <span>{price.toFixed(2)}</span>
      </div>

      <div className="flex gap-2 mt-2">
        <button type="button" className="flex-1 py-1 text-lg bg-[#121212] text-white rounded-full border-none cursor-pointer hover:bg-[#2d2d2d]">
          Carrito
        </button>
        <button type="button" className="flex-1 py-1 text-lg bg-[#ffd814] text-[#121212] rounded-full border-none cursor-pointer hover:bg-[#f9d002]">
          Comprar
        </button>
      </div>
    </div>
  );
};

export default Card;