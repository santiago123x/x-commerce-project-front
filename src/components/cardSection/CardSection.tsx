import React, { useState, useEffect } from "react";
import Card from "@/components/card/Card";
import products from "@/mocks/products";
import { CardProps } from "@/types/interfaces";

const CardSection = () => {
  const categories = ["Celulares", "PCs", "Audio", "Accesorios"];
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [displayProducts, setDisplayProducts] = useState<CardProps[]>([]);

  useEffect(() => {
    const filtered = products.filter((p) => p.category === currentCategory);
    const shuffled = [...filtered].sort(() => 0.5 - Math.random());
    setDisplayProducts(shuffled.slice(0, 3));
  }, [currentCategory]);

  const checkCardWidth = (array: CardProps[], index: number): boolean => {
    return index === 2 && array.length === 3 ? true : false;
  };
  
  return (
    <div className="max-w-full px-[5%] font-urbanist py-[3%] text-[#121212]">
      <h1 className="text-2xl font-bold">Lo más vendido en:</h1>

      <div className="flex gap-4 my-8 pb-4 overflow-x-auto">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`px-4 py-1 text-lg border border-[#ddd] bg-white rounded-full cursor-pointer whitespace-nowrap transition-all duration-300 ease-in-out hover:bg-[#f5f5f5] ${
              currentCategory === category 
                ? "bg-[#ffd814] text-[#121212] border-[#ffd814]" 
                : ""
            }`}
            onClick={() => setCurrentCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <section className="grid justify-items-center grid-cols-[repeat(auto-fit,minmax(370px,1fr))] gap-8">
        {displayProducts.map((product, index) => (
          <Card key={index} {...product} specialStyle={checkCardWidth(displayProducts, index)} />
        ))}
      </section>
    </div>
  );
};

export default CardSection;